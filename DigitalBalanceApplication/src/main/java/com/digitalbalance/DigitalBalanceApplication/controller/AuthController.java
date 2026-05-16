package com.digitalbalance.DigitalBalanceApplication.controller;

import com.digitalbalance.DigitalBalanceApplication.dto.AuthResponse;
import com.digitalbalance.DigitalBalanceApplication.dto.LoginRequest;
import com.digitalbalance.DigitalBalanceApplication.dto.RegisterRequest;
import com.digitalbalance.DigitalBalanceApplication.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public AuthResponse register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}