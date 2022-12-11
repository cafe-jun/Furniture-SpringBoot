package com.cafejun.fuspring.config;

import com.cafejun.fuspring.member.JpaMemberRepository;
import com.cafejun.fuspring.member.MemberRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.persistence.EntityManager;
import javax.sql.DataSource;

@Configuration
public class AppConfig {
//    private final DataSource dataSource;
    private final EntityManager em;

    public AppConfig(EntityManager em) {
//        this.dataSource = dm;
        this.em = em;
    }
    @Bean
    public MemberRepository memberRepository() {
        return new JpaMemberRepository(em);
    }

}
