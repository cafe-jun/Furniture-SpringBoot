package com.cafejun.fuspring.service.member;

import com.cafejun.fuspring.advise.assertThat.DefaultAssert;
import com.cafejun.fuspring.config.security.token.MemberPrincipal;
import com.cafejun.fuspring.domain.entity.member.Member;
import com.cafejun.fuspring.payload.request.auth.ChangePasswordRequest;
import com.cafejun.fuspring.payload.response.ApiResponse;
import com.cafejun.fuspring.repository.member.MemberRepository;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
@RequiredArgsConstructor
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    public ResponseEntity<?> readByMember(MemberPrincipal memberPrincipal) {
        Optional<Member> member = memberRepository.findById(memberPrincipal.getId());
        DefaultAssert.isOptionalPresent(member);
        ApiResponse apiResponse = ApiResponse.builder().check(true).information(member.get()).build();
        return ResponseEntity.ok(apiResponse);
    }

    public ResponseEntity<?> modify(MemberPrincipal memberPrincipal, ChangePasswordRequest passwordChangeRequest) {
        Optional<Member> member = memberRepository.findById(memberPrincipal.getId());
        boolean passwordCheck = passwordEncoder.matches(passwordChangeRequest.getOldPassword(),member.get().getPassword());
        DefaultAssert.isTrue(passwordCheck,"잘못된 비밀번호입니다.");

        boolean newPasswordCheck = passwordChangeRequest.getNewPassword().equals(passwordChangeRequest.getNewPassword());
        DefaultAssert.isTrue(newPasswordCheck,"신규 등록 비밀번호 값이 일치하지 않습니다.");
        passwordEncoder.encode(passwordChangeRequest.getNewPassword());
        return ResponseEntity.ok(true);
    }
    public ResponseEntity<?> profile(MemberPrincipal memberPrincipal) {
        Optional<Member> member = memberRepository.findById(memberPrincipal.getId());
        DefaultAssert.isOptionalPresent(member);
        ApiResponse apiResponse = ApiResponse.builder().check(true).information(member.get()).build();
        return ResponseEntity.ok(apiResponse);
    }


}
