package com.loki.gateway.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/gateway")
public class AdminTestController {

    @GetMapping("/admin-test")
    public String adminTest() {
        return "Admin access successful";
    }
}