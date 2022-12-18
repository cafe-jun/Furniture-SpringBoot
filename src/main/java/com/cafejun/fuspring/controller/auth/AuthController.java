package com.cafejun.fuspring.controller.auth;

import com.cafejun.fuspring.payload.request.auth.SignInRequest;
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
            @Valid @RequestBody SignInRequest signInRequest
    ) {
        return authService.signin(signInRequest);
    }
}