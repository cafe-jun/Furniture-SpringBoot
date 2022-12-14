package com.cafejun.fuspring.service.auth;

import com.cafejun.fuspring.config.OAuth2Config;
import com.cafejun.fuspring.config.security.token.MemberPrincipal;
import com.cafejun.fuspring.domain.mapper.TokenMapping;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Slf4j
@Service
public class CustomTokenProviderService {
    @Autowired
    private OAuth2Config oAuth2Config;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;


    public TokenMapping refreshToken(Authentication authentication, String refreshToken) {
        MemberPrincipal memberPrincipal = (MemberPrincipal) authentication.getPrincipal();
        Date now = new Date();
        Date accessTokenExpiresIn = new Date(now.getTime()+oAuth2Config.getAuth().getAccessTokenExpirationMsec());
        Key key = getKey();
        String accessToken = Jwts.builder()
                            .setSubject(Long.toString(memberPrincipal.getId()))
                            .setIssuedAt(new Date())
                            .setExpiration(accessTokenExpiresIn)
                            .signWith(key, SignatureAlgorithm.HS512).compact();

        return TokenMapping.builder()
                .memberEmail(memberPrincipal.getEmail())
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }
    public TokenMapping createToken(Authentication authentication) {
        MemberPrincipal memberPrincipal = (MemberPrincipal) authentication.getPrincipal();
        Date now = new Date();
        Date accessTokenExpiresIn = new Date(now.getTime()+oAuth2Config.getAuth().getAccessTokenExpirationMsec());
        Date refreshTokenExpiresIn = new Date(now.getTime() + oAuth2Config.getAuth().getRefreshTokenExpirationMsec());
        Key key = getKey();
        String accessToken = Jwts.builder()
                .setSubject(Long.toString(memberPrincipal.getId()))
                .setIssuedAt(new Date())
                .setExpiration(accessTokenExpiresIn)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();

        String refreshToken = Jwts.builder()
                .setExpiration(refreshTokenExpiresIn)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();

        return TokenMapping.builder()
                .memberEmail(memberPrincipal.getEmail())
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
    }

    public Long getMemberIdFromToken(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(getKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
        return Long.parseLong(claims.getSubject());
    }
    public UsernamePasswordAuthenticationToken getAuthenticationById(String token) {
        Long memberId = getMemberIdFromToken(token);
        log.info("signin member id ,{}",memberId);
        UserDetails userDetails = customUserDetailsService.loadUserById(memberId);
        log.info("UserDetails,{},{},{}",userDetails.getAuthorities(),userDetails.getPassword(),userDetails.getUsername());
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
        log.info("UsernamePasswordAuthenticationToken,{}",authentication.getAuthorities());
        return authentication;
    }
    public UsernamePasswordAuthenticationToken getAuthenticationByEmail(String email) {
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(email);
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
        return authentication;
    }

    public Long getExpiration(String token) {
        // accessToken ?????? ????????????
        Date expiration = Jwts.parserBuilder().setSigningKey(getKey()).build().parseClaimsJws(token).getBody().getExpiration();
        // ?????? ??????
        Long now = new Date().getTime();
        //?????? ??????
        return (expiration.getTime()-now);
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(getKey()).build().parseClaimsJws(token);
            return true;
        } catch (io.jsonwebtoken.security.SecurityException ex) {
            log.error("????????? JWT ???????????????.");
        } catch (MalformedJwtException ex) {
            log.error("????????? JWT ???????????????.");
        } catch (ExpiredJwtException ex) {
            log.error("????????? JWT ???????????????.");
        } catch (UnsupportedJwtException ex) {
            log.error("???????????? ?????? JWT ???????????????.");
        } catch (IllegalArgumentException ex) {
            log.error("JWT ????????? ?????????????????????.");
        }
        return false;
    }
    private Key getKey() {
        System.out.println("CustomTokenProviderService.getKey"+oAuth2Config.getAuth().getTokenSecret());
        String secretKey = oAuth2Config.getAuth().getTokenSecret();
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
