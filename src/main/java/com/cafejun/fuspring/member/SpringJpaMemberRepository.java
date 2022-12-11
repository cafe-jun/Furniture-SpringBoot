package com.cafejun.fuspring.member;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SpringJpaMemberRepository extends JpaRepository<Member, Long>,MemberRepository {
    @Override
    Optional<Member> findByMemberId(String username);
}

