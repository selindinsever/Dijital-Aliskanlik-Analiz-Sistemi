package com.digitalbalance.DigitalBalanceApplication.service;

import com.digitalbalance.DigitalBalanceApplication.dto.AuthResponse;
import com.digitalbalance.DigitalBalanceApplication.dto.LoginRequest;
import com.digitalbalance.DigitalBalanceApplication.dto.RegisterRequest;
import com.digitalbalance.DigitalBalanceApplication.entity.User;
import com.digitalbalance.DigitalBalanceApplication.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class AuthService {

    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return new AuthResponse(null, null, null, "Bu email zaten kayıtlı.");
        }

        User user = new User();
        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());

        User savedUser = userRepository.save(Objects.requireNonNull(user));

        return new AuthResponse(
                savedUser.getId(),
                savedUser.getFullName(),
                savedUser.getEmail(),
                "Kayıt başarılı."
        );
    }

    public AuthResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail()).orElse(null);

        if (user == null) {
            return new AuthResponse(null, null, null, "Kullanıcı bulunamadı.");
        }

        if (!user.getPassword().equals(request.getPassword())) {
            return new AuthResponse(null, null, null, "Şifre yanlış.");
        }

        return new AuthResponse(
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                "Giriş başarılı."
        );
    }
}