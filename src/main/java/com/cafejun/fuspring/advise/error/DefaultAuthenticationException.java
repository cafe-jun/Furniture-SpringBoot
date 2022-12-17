package com.cafejun.fuspring.advise.error;

import com.cafejun.fuspring.advise.payload.ErrorCode;
import org.springframework.security.core.AuthenticationException;

public class DefaultAuthenticationException extends AuthenticationException {

    private ErrorCode errorCode;

    public DefaultAuthenticationException(String msg, Throwable cause) {
        super(msg, cause);
        this.errorCode = ErrorCode.INVALID_REPRESENTATION;
    }

    public DefaultAuthenticationException(String msg) {
        super(msg);

    }
    public DefaultAuthenticationException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}
