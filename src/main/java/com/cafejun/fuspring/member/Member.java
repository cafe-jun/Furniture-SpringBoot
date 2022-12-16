package com.cafejun.fuspring.member;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 왠만하면 Entity 의 PK는 Long Type에 Auto_increment를 추천
 * 이렇게 하면 bigInt 타입이 됨
 * 주민등록번호와 같이 비즈니스상 유니크키나 여러키를 조합한 복합키를 사용하면 난감한 상황발생
 * 1, PK를 맺을때는 다른 테이블에서 복합키를 전부 갖고 있거나 중간 테이블을 하나 더 구축해야하는 상황이 발생
 * 2. 인덱스에 좋은 여향을 끼치지 못합니다.
 * 3. 유니크한 조건이 변경될경우 PK 전체를 수정해야하는 일이 발생
 *
 */

@Builder
@Data
@Entity
@Table(name = "T_MEMBER")
@NoArgsConstructor // 기본 생성자 자동추가
@AllArgsConstructor
public class Member implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column()
    private Long id;
    @Column(nullable = false, length = 100, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    @Builder.Default
    private List<String> roles = new ArrayList<>();
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    // getUsername,getPassword 의 정보를 가지고 인증
    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
