package com.cafejun.fuspring.domain.entity.member;

import com.cafejun.fuspring.domain.time.DefaultTime;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;


/**
 * 왠만하면 Entity 의 PK는 Long Type에 Auto_increment를 추천
 * 이렇게 하면 bigInt 타입이 됨
 * 주민등록번호와 같이 비즈니스상 유니크키나 여러키를 조합한 복합키를 사용하면 난감한 상황발생
 * 1, PK를 맺을때는 다른 테이블에서 복합키를 전부 갖고 있거나 중간 테이블을 하나 더 구축해야하는 상황이 발생
 * 2. 인덱스에 좋은 여향을 끼치지 못합니다.
 * 3. 유니크한 조건이 변경될경우 PK 전체를 수정해야하는 일이 발생
 *
 */


@DynamicUpdate
@Entity
@Getter
@Table(name = "MEMBER")
public class Member extends DefaultTime {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column()
    private Long id;
    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Boolean emailVerified = false;

    private String imageUrl;
    @NotNull
    @Enumerated(EnumType.STRING)
    private Provider provider;

    @JsonIgnore
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    private String providerId;

    public Member(){}
    @Builder
    public Member(String email, String name, Boolean emailVerified, Provider provider, String password, Role role, String providerId) {
        this.email = email;
        this.name = name;
        this.provider = provider;
        this.password = password;
        this.role = role;
    }
    public void updateName(String name) {
        this.name = name;
    }
    public void updateImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
