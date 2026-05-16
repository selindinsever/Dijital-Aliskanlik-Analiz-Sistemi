package com.digitalbalance.DigitalBalanceApplication.controller;

import com.digitalbalance.DigitalBalanceApplication.dto.DashboardResponse;
import com.digitalbalance.DigitalBalanceApplication.entity.Analysis;
import com.digitalbalance.DigitalBalanceApplication.repository.AnalysisRepository;
import com.digitalbalance.DigitalBalanceApplication.service.DashboardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin("*")
public class DashboardController {

    private final DashboardService dashboardService;
    private final AnalysisRepository analysisRepository;

    public DashboardController(DashboardService dashboardService, AnalysisRepository analysisRepository) {
        this.dashboardService = dashboardService;
        this.analysisRepository = analysisRepository;
    }

    @GetMapping("/latest/{userId}")
    public DashboardResponse getLatestDashboard(@PathVariable Long userId) {
        return dashboardService.getLatestDashboardData(userId);
    }

    @GetMapping("/charts/{userId}")
    public List<Analysis> getChartDataByUser(@PathVariable Long userId) {
        return analysisRepository.findByUserIdOrderByIdAsc(userId);
    }
}