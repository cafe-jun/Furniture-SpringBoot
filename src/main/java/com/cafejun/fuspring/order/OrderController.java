package com.cafejun.fuspring.order;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class OrderController {
    @PostMapping("/test")
    public String test() {
        return "success";
    }
}
