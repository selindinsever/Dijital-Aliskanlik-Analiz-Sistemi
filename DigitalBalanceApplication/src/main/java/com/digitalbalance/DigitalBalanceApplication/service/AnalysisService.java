package com.digitalbalance.DigitalBalanceApplication.service;

import com.digitalbalance.DigitalBalanceApplication.dto.AnalysisRequest;
import com.digitalbalance.DigitalBalanceApplication.entity.Analysis;
import com.digitalbalance.DigitalBalanceApplication.entity.User;
import com.digitalbalance.DigitalBalanceApplication.repository.AnalysisRepository;
import com.digitalbalance.DigitalBalanceApplication.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

import java.util.Objects;

@Service
public class AnalysisService {

    private final AnalysisRepository analysisRepository;
    private final UserRepository userRepository;

    public AnalysisService(AnalysisRepository analysisRepository, UserRepository userRepository) {
        this.analysisRepository = analysisRepository;
        this.userRepository = userRepository;
    }

    public Analysis saveAnalysis(AnalysisRequest request) {

        User user = userRepository.findById(Objects.requireNonNull(request.getUserId()))
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı."));

        int digitalBalanceScore = calculateDigitalBalance(request);
        int productivityScore = calculateProductivity(request);

        Analysis analysis = new Analysis();
        analysis.setUser(user);
        analysis.setSocialMediaHours(request.getSocialMediaHours());
        analysis.setGamingHours(request.getGamingHours());
        analysis.setWorkHours(request.getWorkHours());
        analysis.setSleepHours(request.getSleepHours());
        analysis.setDigitalBalanceScore(digitalBalanceScore);
        analysis.setProductivityScore(productivityScore);
        analysis.setCreatedAt(LocalDateTime.now());

        return analysisRepository.save(Objects.requireNonNull(analysis));
    }

    private int calculateDigitalBalance(AnalysisRequest request) {

        int score = 100;

        score -= request.getSocialMediaHours() * 5;
        score -= request.getGamingHours() * 4;

        score += request.getSleepHours() * 3;
        score += request.getWorkHours() * 2;

        if (score > 100) {
            score = 100;
        }

        if (score < 0) {
            score = 0;
        }

        return score;
    }

    private int calculateProductivity(AnalysisRequest request) {

        int score = 0;

        score += request.getWorkHours() * 10;
        score += request.getSleepHours() * 5;

        score -= request.getSocialMediaHours() * 4;
        score -= request.getGamingHours() * 3;

        if (score > 100) {
            score = 100;
        }

        if (score < 0) {
            score = 0;
        }

        return score;
    }
}