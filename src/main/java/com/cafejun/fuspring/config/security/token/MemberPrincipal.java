package com.cafejun.fuspring.config.security.token;

import com.cafejun.fuspring.domain.entity.member.Member;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Getter
public class MemberPrincipal implements OAuth2User, UserDetails {
    private Long id;
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;
    private Map<String,Object> attributes;

    public MemberPrincipal(Long id, String email, String password, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
    }

    public static MemberPrincipal create(Member member) {
        List<GrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority(member.getRole().getValue()));
        return new MemberPrincipal(
                member.getId(),
                member.getEmail(),
                member.getPassword(),
                authorities
        );
    }
    public static MemberPrincipal create(Member member,Map<String,Object> attributes) {
        MemberPrincipal memberPrincipal = MemberPrincipal.create(member);
        memberPrincipal.setAttributes(attributes);
        return memberPrincipal;
    }
    @Override
    public String getName() {
        return String.valueOf(id);
    }
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

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setAttributes(Map<String, Object> attributes) {
        this.attributes = attributes;
    }
}
