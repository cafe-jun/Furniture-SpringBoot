package com.cafejun.fuspring.service.member;

import com.cafejun.fuspring.domain.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface memberService extends JpaRepository<Member,Long> {
    Optional<Member> findByEmail(String email);
    Boolean existsByEmail(String email);
}
