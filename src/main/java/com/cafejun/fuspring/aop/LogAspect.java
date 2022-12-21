package com.cafejun.fuspring.aop;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class LogAspect {
    @Around("execution(* com.cafejun.fuspring.controller.*.*(..))")
    public Object ControllerLogger(ProceedingJoinPoint proceedingJoinPoint) throws Throwable, Exception {
        Object result = proceedingJoinPoint.proceed();
        return result;
    }
}
