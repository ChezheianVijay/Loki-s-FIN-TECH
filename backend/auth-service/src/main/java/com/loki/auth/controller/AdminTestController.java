package com.loki.auth.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminTestController {

    @GetMapping("/protected")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminProtectedEndpoint() {
        return "Admin access successful";
    }
}