package com.cafejun.fuspring.member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Optional<Member> findByUserEmail(String email);
    Member save(Member member);
    Optional<Member> findById(Long id);
    List<Member> findAll();
}
