package com.cafejun.fuspring.domain.entity.member;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Role {
    GUEST("ROLE_GUEST"),
    MEMBER("ROLE_USER");

    private final String value;

}
