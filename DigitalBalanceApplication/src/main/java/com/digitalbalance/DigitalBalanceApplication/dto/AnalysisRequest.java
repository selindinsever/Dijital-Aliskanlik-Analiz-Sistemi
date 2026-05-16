package com.digitalbalance.DigitalBalanceApplication.dto;

public class AnalysisRequest {

    private Long userId;
    private int socialMediaHours;
    private int gamingHours;
    private int workHours;
    private int sleepHours;

    public AnalysisRequest() {
    }

    public Long getUserId() {
        return userId;
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

    public void setUserId(Long userId) {
        this.userId = userId;
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
}