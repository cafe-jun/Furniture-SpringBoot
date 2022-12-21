package com.cafejun.fuspring.payload.request.auth;

import lombok.Data;

@Data
public class SignUpRequest {
    private String name;
    private String email;
    private String password;
}
