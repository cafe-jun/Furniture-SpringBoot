package com.cafejun.fuspring.controller.auth;

import com.cafejun.fuspring.config.security.token.CurrentMember;
import com.cafejun.fuspring.config.security.token.MemberPrincipal;
import com.cafejun.fuspring.payload.request.auth.RefreshTokenRequest;
import com.cafejun.fuspring.payload.request.auth.SignInRequest;
import com.cafejun.fuspring.payload.request.auth.SignUpRequest;
import com.cafejun.fuspring.service.auth.AuthService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @PostMapping(value = "/signin")
    public ResponseEntity<?> signin(
            @RequestBody SignInRequest signInRequest
    ) {
        return authService.signin(signInRequest);
    }
    @PostMapping(value = "/signup")
    public ResponseEntity<?> signup(
            @RequestBody SignUpRequest signUpRequest
    ) {
        return authService.signup(signUpRequest);
    }
    @PostMapping(value = "/refresh")
    public ResponseEntity<?> refresh(
            @Valid @RequestBody RefreshTokenRequest tokenRefreshRequest
    ) {
        return authService.refresh(tokenRefreshRequest);
    }
    @PostMapping(value = "/signout")
    public ResponseEntity<?> signout(
            @CurrentMember MemberPrincipal memberPrincipal, @Valid @RequestBody RefreshTokenRequest tokenRefreshRequest
    ) {
        return authService.signout(tokenRefreshRequest);
    }
}
