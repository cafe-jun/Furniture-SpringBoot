package com.cafejun.fuspring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@PropertySource(value = { "classpath:oauth2/application-oauth.properties" })
@SpringBootApplication
public class FuSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(FuSpringApplication.class, args);
	}

}
