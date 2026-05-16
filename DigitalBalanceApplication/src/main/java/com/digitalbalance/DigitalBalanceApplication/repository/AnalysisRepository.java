package com.digitalbalance.DigitalBalanceApplication.repository;

import com.digitalbalance.DigitalBalanceApplication.entity.Analysis;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AnalysisRepository extends JpaRepository<Analysis, Long> {

    List<Analysis> findByUserIdOrderByIdAsc(Long userId);

    Optional<Analysis> findFirstByUserIdOrderByIdDesc(Long userId);
}