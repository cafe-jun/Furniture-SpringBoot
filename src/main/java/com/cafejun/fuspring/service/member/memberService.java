package com.cafejun.fuspring.service.member;

import com.cafejun.fuspring.advise.assertThat.DefaultAssert;
import com.cafejun.fuspring.config.security.token.MemberPrincipal;
import com.cafejun.fuspring.domain.entity.member.Member;
import com.cafejun.fuspring.payload.response.ApiResponse;
import com.cafejun.fuspring.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
@RequiredArgsConstructor
@Service
public class memberService {
    private final MemberRepository memberRepository;

    public ResponseEntity<?> readByMember(MemberPrincipal memberPrincipal) {
        Optional<Member> member = memberRepository.findById(memberPrincipal.getId());
        DefaultAssert.isOptionalPresent(member);
        ApiResponse apiResponse = ApiResponse.builder().check(true).information(member.get()).build();
        return ResponseEntity.ok(apiResponse);
    }

}
