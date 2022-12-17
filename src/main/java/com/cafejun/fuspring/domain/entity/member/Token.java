package com.cafejun.fuspring.domain.entity.member;

import com.cafejun.fuspring.domain.time.DefaultTime;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Table(name="token")
@Entity
public class Token extends DefaultTime {
    @Id
    @Column(name = "member_email", length = 1024 , nullable = false)
    private String memberEmail;

    @Column(name = "refresh_token", length = 1024 , nullable = false)
    private String refreshToken;

    public Token(){}

    public Token updateRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }

    @Builder
    public Token(String memberEmail, String refreshToken) {
        this.memberEmail = memberEmail;
        this.refreshToken = refreshToken;
    }
}
