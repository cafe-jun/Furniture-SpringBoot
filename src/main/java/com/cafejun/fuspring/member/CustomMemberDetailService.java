package com.cafejun.fuspring.member;

import com.cafejun.fuspring.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class CustomMemberDetailService implements UserDetailsService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional(readOnly = true) // Transactional 범위는 유지하되 조회 기능만 남겨두어 조회속도가 개선됨
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        //.map() -> memberRepository로 넘어온 member의 Stream을 map을 통해 createUserDetails 실행
        //.orElseThrow() -> 값이 있으면 리턴 없으면 UsernameNotFoundException 발생
        // UsernameNotFoundException 가 실행이 안되는것 같다
        return memberRepository.findByEmail(email)
                .map(this::createUserDetails)
                .orElseThrow(() -> new UsernameNotFoundException("해당하는 유저를 찾을 수 없습니다."));

    }

    // 해당하는 User 의 데이터가 존재한다면 UserDetails 객체로 만들어서 리턴
    private UserDetails createUserDetails(Member member) {
        System.out.println("CustomMemberDetailService.createUserDetails" + member);

        return User.builder()
                .username(member.getEmail())
                .password(passwordEncoder.encode(member.getPassword()))
                .roles(member.getRoles().toArray(new String[0]))
                .build();
    }
    //        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(member.getRoles().toString());

//        return new User(
//            String.valueOf(member.getId()),
//            member.getPassword(),
//            Collections.singleton(grantedAuthority)
//        );
}
