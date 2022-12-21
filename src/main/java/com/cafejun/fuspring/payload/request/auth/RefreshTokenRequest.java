package com.cafejun.fuspring.payload.request.auth;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class RefreshTokenRequest {
    @NotBlank
    @NotNull
    private String refreshToken;
    public RefreshTokenRequest(){}
    @Builder
    public RefreshTokenRequest(String refreshToken) {
        this.refreshToken = refreshToken;
    }
}
