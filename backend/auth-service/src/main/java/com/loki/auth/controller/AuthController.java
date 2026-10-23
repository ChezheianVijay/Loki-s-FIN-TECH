package com.loki.auth.controller;

import com.loki.auth.dto.LoginRequest;
import com.loki.auth.dto.LoginResponse;
import com.loki.auth.dto.SignupResponse;
import com.loki.auth.dto.UserRegistrationRequest;
import com.loki.auth.entity.User;
import com.loki.auth.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController (UserService userService){
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<SignupResponse> signUp(@Valid @RequestBody UserRegistrationRequest request){
        SignupResponse userSignup = userService.registerUser(request);

        return ResponseEntity.status(HttpStatus.CREATED).body(userSignup);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login (@Valid @RequestBody LoginRequest request){
        LoginResponse usrResponse = userService.loginUser(request);
        return ResponseEntity.ok(usrResponse);
    }
}
