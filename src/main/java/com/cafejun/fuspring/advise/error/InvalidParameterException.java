package com.cafejun.fuspring.advise.error;

import com.cafejun.fuspring.advise.payload.ErrorCode;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;

import java.util.List;

public class InvalidParameterException extends DefaultException {
    private final Errors errors;

    public InvalidParameterException(Errors errors){
        super(ErrorCode.INVALID_PARAMETER);
        this.errors = errors;
    }

    public List<FieldError> getFieldErrors() {
        return errors.getFieldErrors();
    }
}
