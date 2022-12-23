package com.cafejun.fuspring.service.auth;

import com.cafejun.fuspring.advise.assertThat.DefaultAssert;
import com.cafejun.fuspring.domain.entity.member.Member;
import com.cafejun.fuspring.domain.entity.member.Provider;
import com.cafejun.fuspring.domain.entity.member.Role;
import com.cafejun.fuspring.domain.entity.member.Token;
import com.cafejun.fuspring.domain.mapper.TokenMapping;
import com.cafejun.fuspring.payload.request.auth.SignInRequest;
import com.cafejun.fuspring.payload.request.auth.SignUpRequest;
import com.cafejun.fuspring.payload.response.ApiResponse;
import com.cafejun.fuspring.payload.response.AuthResponse;
import com.cafejun.fuspring.payload.response.Message;
import com.cafejun.fuspring.repository.auth.TokenRepository;
import com.cafejun.fuspring.repository.member.MemberRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import lombok.RequiredArgsConstructor;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RequiredArgsConstructor
@Service
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final CustomTokenProviderService customTokenProviderService;

    private final MemberRepository memberRepository;
    private final TokenRepository tokenRepository;

    public ResponseEntity<?> signin(SignInRequest signInRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        signInRequest.getEmail(),
                        signInRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        TokenMapping tokenMapping = customTokenProviderService.createToken(authentication);
        Token token = Token.builder()
                .refreshToken(tokenMapping.getRefreshToken())
                .memberEmail(tokenMapping.getMemberEmail())
                .build();
        tokenRepository.save(token);
        AuthResponse authResponse = AuthResponse.builder().accessToken(tokenMapping.getAccessToken()).refreshToken(token.getRefreshToken()).build();
        return ResponseEntity.ok(authResponse);
    }

    public ResponseEntity<?> signup(SignUpRequest signUpRequest) {
        DefaultAssert.isTrue(!memberRepository.existsByEmail(signUpRequest.getEmail()),"해당 이메일이 존재하지 않습니다.");
        Member member = Member.builder()
                .email(signUpRequest.getEmail())
                .password(passwordEncoder.encode(signUpRequest.getPassword()))
                .name(signUpRequest.getName())
                .provider(Provider.local)
                .role(Role.MEMBER)
                .build();

        memberRepository.save(member);
        URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/auth/")
                .buildAndExpand(member.getId()).toUri();
        ApiResponse apiResponse = ApiResponse.builder().check(true).information(Message.builder().message("회원가입에 성공했습니다.").build()).build();
        return ResponseEntity.created(location).body(apiResponse);
    }
}
