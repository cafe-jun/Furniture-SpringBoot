package com.cafejun.fuspring.repository.member;

import com.cafejun.fuspring.domain.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);
    Boolean existsByEmail(String email);
}

