package com.cafejun.fuspring.controller.member;


import com.cafejun.fuspring.service.member.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;


@RequiredArgsConstructor
@RestController
@RequestMapping("/member")
public class MemberController {

    private final MemberService memberService;

//    @GetMapping(value = "/profile")
//    public ResponseEntity<?> getProfile(
////            @Valid @RequestParam
//    ) {
//
//    }

}
