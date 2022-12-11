package com.cafejun.fuspring.config;

import com.cafejun.fuspring.member.JpaMemberRepository;
import com.cafejun.fuspring.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.persistence.EntityManager;
import javax.sql.DataSource;

@Configuration
public class AppConfig {
    private final EntityManager em;
    private final DataSource dataSource;
    @Autowired
    public AppConfig(DataSource dataSource,EntityManager em) {
        this.dataSource = dataSource;
        this.em = em;
    }
    @Bean
    public MemberRepository memberRepository() {
        return new JpaMemberRepository(em);
    }

}
