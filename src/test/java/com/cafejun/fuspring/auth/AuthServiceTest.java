package com.cafejun.fuspring.auth;

import com.cafejun.fuspring.domain.entity.member.Member;
import com.cafejun.fuspring.payload.request.auth.SignInRequest;
import com.cafejun.fuspring.payload.request.auth.SignUpRequest;
import com.cafejun.fuspring.repository.member.MemberRepository;
import com.cafejun.fuspring.service.auth.AuthService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@Slf4j
@SpringBootTest
class AuthServiceTest {

    @Autowired
    private AuthService authService;
    @Autowired
    private MemberRepository memberRepository;

    @BeforeEach
    public void clearMember() {
        memberRepository.deleteAll();
    }

    @Test
    @DisplayName("AuthService signUp 성공 테스트")
    public void signupSuccess(){
        SignUpRequest signUpRequest = new SignUpRequest();
        signUpRequest.setEmail("tb25271123@gmail.com");
        signUpRequest.setPassword("12345");
        signUpRequest.setName("jsshin");
        authService.signup(signUpRequest);
        Optional<Member> member = memberRepository.findByEmail(signUpRequest.getEmail());
        assertThat(member.get().getEmail()).isEqualTo(signUpRequest.getEmail());
    }

    @Test
    @DisplayName("AuthService signUp 실패 테스트")
    public void signupFail(){
        SignUpRequest signUpRequest = new SignUpRequest();
        signUpRequest.setEmail("tb25271123@gmail.com");
        signUpRequest.setPassword("12345");
        signUpRequest.setName("jsshin");
        authService.signup(signUpRequest);
        Optional<Member> member = memberRepository.findByEmail(signUpRequest.getEmail());
        assertThat(member.get().getEmail()).isNotEqualTo(signUpRequest.getEmail()+"123");
    }

    @Test
    @DisplayName("AuthService signin 성공 테스트")
    public void signin(){
        // given
        SignUpRequest signUpRequest = new SignUpRequest();
        signUpRequest.setEmail("tb25271123@gmail.com");
        signUpRequest.setPassword("12345");
        signUpRequest.setName("jsshin");
        authService.signup(signUpRequest);

        SignInRequest signInRequest = new SignInRequest();
        signInRequest.setEmail("tb25271123@gmail.com");
        signInRequest.setPassword("12345");
        authService.signin(signInRequest);
        Optional<Member> member = memberRepository.findByEmail(signInRequest.getEmail());
        assertThat(member.get().getEmail()).isEqualTo(signInRequest.getEmail());
        assertThat(member.get().getName()).isEqualTo(signUpRequest.getName());

    }
}
