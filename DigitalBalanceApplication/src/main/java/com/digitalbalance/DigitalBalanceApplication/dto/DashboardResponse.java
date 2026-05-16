package com.digitalbalance.DigitalBalanceApplication.dto;

public class DashboardResponse {

    private int digitalBalanceScore;
    private int productivityScore;
    private int socialMediaHours;
    private int gamingHours;
    private int workHours;
    private int sleepHours;

    public DashboardResponse() {
    }

    public DashboardResponse(int digitalBalanceScore, int productivityScore, int socialMediaHours,
                             int gamingHours, int workHours, int sleepHours) {
        this.digitalBalanceScore = digitalBalanceScore;
        this.productivityScore = productivityScore;
        this.socialMediaHours = socialMediaHours;
        this.gamingHours = gamingHours;
        this.workHours = workHours;
        this.sleepHours = sleepHours;
    }

    public int getDigitalBalanceScore() {
        return digitalBalanceScore;
    }

    public int getProductivityScore() {
        return productivityScore;
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

    public void setDigitalBalanceScore(int digitalBalanceScore) {
        this.digitalBalanceScore = digitalBalanceScore;
    }

    public void setProductivityScore(int productivityScore) {
        this.productivityScore = productivityScore;
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