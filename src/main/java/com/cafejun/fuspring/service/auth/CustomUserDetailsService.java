package com.cafejun.fuspring.service.auth;

import com.cafejun.fuspring.advise.assertThat.DefaultAssert;
import com.cafejun.fuspring.config.security.token.MemberPrincipal;
import com.cafejun.fuspring.domain.entity.member.Member;
import com.cafejun.fuspring.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class CustomUserDetailsService implements UserDetailsService {
    private final MemberRepository memberRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("유저 정보를 찾을 수 없습니다."));
        return MemberPrincipal.create(member);
    }
    @Transactional(readOnly = true)
    public UserDetails loadUserById(Long id) {
        Optional<Member> member = memberRepository.findById(id);
        DefaultAssert.isOptionalPresent(member);
        log.debug("member.get() message",member.get());
        return MemberPrincipal.create(member.get());

    }
}
