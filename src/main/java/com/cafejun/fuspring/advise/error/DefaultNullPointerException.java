package com.cafejun.fuspring.advise.error;

import com.cafejun.fuspring.advise.payload.ErrorCode;
import lombok.Getter;

@Getter
public class DefaultNullPointerException extends  NullPointerException{

    private ErrorCode errorCode;

    public DefaultNullPointerException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}
