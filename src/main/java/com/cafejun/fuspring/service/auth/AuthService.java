package com.cafejun.fuspring.service.auth;

import com.cafejun.fuspring.advise.assertThat.DefaultAssert;
import com.cafejun.fuspring.domain.entity.member.Member;
import com.cafejun.fuspring.domain.entity.member.Provider;
import com.cafejun.fuspring.domain.entity.member.Role;
import com.cafejun.fuspring.domain.entity.member.Token;
import com.cafejun.fuspring.domain.mapper.TokenMapping;
import com.cafejun.fuspring.payload.request.auth.RefreshTokenRequest;
import com.cafejun.fuspring.payload.request.auth.SignInRequest;
import com.cafejun.fuspring.payload.request.auth.SignUpRequest;
import com.cafejun.fuspring.payload.response.ApiResponse;
import com.cafejun.fuspring.payload.response.AuthResponse;
import com.cafejun.fuspring.payload.response.Message;
import com.cafejun.fuspring.repository.auth.TokenRepository;
import com.cafejun.fuspring.repository.member.MemberRepository;

import lombok.extern.slf4j.Slf4j;
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
import java.util.Optional;
@Slf4j
@RequiredArgsConstructor
@Service
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final CustomTokenProviderService customTokenProviderService;

    private final MemberRepository memberRepository;
    private final TokenRepository tokenRepository;

    public ResponseEntity<?> signin(SignInRequest signInRequest){
        log.debug("authentication,{}",signInRequest);
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        signInRequest.getEmail(),
                        signInRequest.getPassword()
                )
        );
        log.debug("authentication,{}",authentication);
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
        DefaultAssert.isEqualString(signUpRequest.getPassword(), signUpRequest.getPassword_confirmation(),"??????????????? ???????????? ????????????.");

        DefaultAssert.isTrue(!memberRepository.existsByEmail(signUpRequest.getEmail()),"?????? ???????????? ?????? ???????????????.");
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
        ApiResponse apiResponse = ApiResponse.builder().check(true).information(Message.builder().message("??????????????? ??????????????????.").build()).build();
        return ResponseEntity.created(location).body(apiResponse);
    }

    public ResponseEntity<?> signout(RefreshTokenRequest tokenRefreshRequest) {
        boolean checkValid = valid(tokenRefreshRequest.getRefreshToken());
        DefaultAssert.isAuthentication(checkValid);
        Optional<Token> token = tokenRepository.findByRefreshToken(tokenRefreshRequest.getRefreshToken());
        tokenRepository.delete(token.get());
        ApiResponse apiResponse = ApiResponse.builder().check(true).information(Message.builder().message("???????????? ???????????????.")).build();
        return ResponseEntity.ok(apiResponse);
    }


    public ResponseEntity<?> refresh(RefreshTokenRequest tokenRefreshRequest) {
        // 1??? ??????
        boolean checkValid = valid(tokenRefreshRequest.getRefreshToken());
        DefaultAssert.isAuthentication(checkValid);
        Optional<Token> token = tokenRepository.findByRefreshToken(tokenRefreshRequest.getRefreshToken());
        Authentication authentication = customTokenProviderService.getAuthenticationByEmail(token.get().getMemberEmail());
        //4. refresh token ?????? ?????? ???????????? ??????
        //?????? ????????? ??????
        TokenMapping tokenMapping;
        Long expirationTime = customTokenProviderService.getExpiration(tokenRefreshRequest.getRefreshToken());
        if(expirationTime >0) {
            tokenMapping = customTokenProviderService.refreshToken(authentication,token.get().getRefreshToken());
        } else {
            tokenMapping = customTokenProviderService.createToken((authentication));
        }
        Token updateToken = token.get().updateRefreshToken(tokenMapping.getRefreshToken());
        tokenRepository.save(updateToken);
        AuthResponse authResponse = AuthResponse.builder().accessToken(tokenMapping.getAccessToken()).refreshToken(updateToken.getRefreshToken()).build();
        return ResponseEntity.ok(authResponse);
    }

    private boolean valid(String refreshToken) {
        // 1. ?????? ?????? ????????? ??????
        boolean validateCheck = customTokenProviderService.validateToken(refreshToken);
        DefaultAssert.isTrue(validateCheck,"Token ????????? ?????????????????????.");
        // 2. refresh token ?????? ????????????.
        Optional<Token> token = tokenRepository.findByRefreshToken(refreshToken);
        DefaultAssert.isTrue(token.isPresent(),"?????? ????????? ???????????????.");
        //3. email ?????? ?????? ???????????? ????????????
        Authentication authentication = customTokenProviderService.getAuthenticationByEmail(token.get().getMemberEmail());
        DefaultAssert.isTrue(token.get().getMemberEmail().equals(authentication.getName()),"????????? ????????? ?????????????????????.");
        return true;
    }
}
