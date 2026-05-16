package com.digitalbalance.DigitalBalanceApplication.controller;

import com.digitalbalance.DigitalBalanceApplication.dto.AnalysisRequest;
import com.digitalbalance.DigitalBalanceApplication.entity.Analysis;
import com.digitalbalance.DigitalBalanceApplication.service.AnalysisService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/analysis")
@CrossOrigin("*")
public class AnalysisController {

    private final AnalysisService analysisService;

    public AnalysisController(AnalysisService analysisService) {
        this.analysisService = analysisService;
    }

    @PostMapping
    public Analysis saveAnalysis(@RequestBody AnalysisRequest request) {
        return analysisService.saveAnalysis(request);
    }
}