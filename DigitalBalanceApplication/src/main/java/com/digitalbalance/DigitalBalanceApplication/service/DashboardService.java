package com.digitalbalance.DigitalBalanceApplication.service;

import com.digitalbalance.DigitalBalanceApplication.dto.DashboardResponse;
import com.digitalbalance.DigitalBalanceApplication.entity.Analysis;
import com.digitalbalance.DigitalBalanceApplication.repository.AnalysisRepository;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class DashboardService {

    private final AnalysisRepository analysisRepository;

    public DashboardService(AnalysisRepository analysisRepository) {
        this.analysisRepository = analysisRepository;
    }

    public DashboardResponse getLatestDashboardData(Long userId) {

        Analysis analysis = analysisRepository.findFirstByUserIdOrderByIdDesc(Objects.requireNonNull(userId))
                .orElseThrow(() -> new RuntimeException("Bu kullanıcıya ait analiz bulunamadı."));

        return new DashboardResponse(
                analysis.getDigitalBalanceScore(),
                analysis.getProductivityScore(),
                analysis.getSocialMediaHours(),
                analysis.getGamingHours(),
                analysis.getWorkHours(),
                analysis.getSleepHours()
        );
    }
}