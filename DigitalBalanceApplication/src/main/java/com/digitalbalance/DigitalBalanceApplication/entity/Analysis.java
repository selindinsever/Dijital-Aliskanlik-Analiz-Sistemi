package com.digitalbalance.DigitalBalanceApplication.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "analysis")
public class Analysis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int socialMediaHours;
    private int gamingHours;
    private int workHours;
    private int sleepHours;
    private int productivityScore;
    private int digitalBalanceScore;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Analysis() {
    }

    public Long getId() {
        return id;
    }

    public int getSocialMediaHours() {
        return socialMediaHours;
    }

    public int getGamingHours() {
        return gamingHours;
    }

    public int getWorkHours() {
        return workHours;
    }

    public int getSleepHours() {
        return sleepHours;
    }

    public int getProductivityScore() {
        return productivityScore;
    }

    public int getDigitalBalanceScore() {
        return digitalBalanceScore;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public User getUser() {
        return user;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setSocialMediaHours(int socialMediaHours) {
        this.socialMediaHours = socialMediaHours;
    }

    public void setGamingHours(int gamingHours) {
        this.gamingHours = gamingHours;
    }

    public void setWorkHours(int workHours) {
        this.workHours = workHours;
    }

    public void setSleepHours(int sleepHours) {
        this.sleepHours = sleepHours;
    }

    public void setProductivityScore(int productivityScore) {
        this.productivityScore = productivityScore;
    }

    public void setDigitalBalanceScore(int digitalBalanceScore) {
        this.digitalBalanceScore = digitalBalanceScore;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setUser(User user) {
        this.user = user;
    }
}