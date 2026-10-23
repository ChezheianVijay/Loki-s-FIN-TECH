package com.loki.auth.exception;

public class EmailAlreadyExistsException extends RuntimeException{
    public EmailAlreadyExistsException (String message){
        super(message);
    }
}
