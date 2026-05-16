package com.digitalbalance.DigitalBalanceApplication.dto;

public class AuthResponse {

    private Long id;
    private String fullName;
    private String email;
    private String message;

    public AuthResponse() {
    }

    public AuthResponse(Long id, String fullName, String email, String message) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }

    public String getMessage() {
        return message;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}