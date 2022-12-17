package com.cafejun.fuspring.domain.mapper;

import lombok.Builder;
import lombok.Data;

@Data
public class TokenMapping {
    private String memberEmail;
    private String accessToken;
    private String refreshToken;

    public TokenMapping() {}

    @Builder
    public TokenMapping(String memberEmail, String accessToken, String refreshToken) {
        this.memberEmail = memberEmail;
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }

}
