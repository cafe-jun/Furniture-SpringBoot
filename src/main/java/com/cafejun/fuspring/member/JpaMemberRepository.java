package com.cafejun.fuspring.member;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

public class JpaMemberRepository implements MemberRepository{

    private final EntityManager em;

    public JpaMemberRepository(EntityManager em) {
        this.em = em;
    }
    @Override
    public Optional<Member> findByUserEmail(String email) {
        List<Member> result = em.createQuery("select m from Member m where m.email = :email",Member.class)
                .setParameter("email",email)
                .getResultList();
        return result.stream().findAny();
    }

    @Override
    public Member save(Member member) {
        em.persist(member);;
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        Member member = em.find(Member.class,id);
        return Optional.ofNullable(member);
    }

    @Override
    public List<Member> findAll() {
        return em.createQuery("select m from Member m",Member.class)
                .getResultList();
    }

    @Override
    public Optional<Member> findByMemberId(String username) {
        return Optional.empty();
    }
}
