package com.cafejun.fuspring.repository.auth;

import com.cafejun.fuspring.domain.entity.member.Token;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Long> {
    Optional<Token> findByMemberEmail(String memberEmail);
    Optional<Token> findByRefreshToken(String refreshToken);
}
