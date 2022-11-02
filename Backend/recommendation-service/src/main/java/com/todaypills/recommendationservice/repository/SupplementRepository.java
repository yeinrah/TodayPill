package com.todaypills.recommendationservice.repository;

import com.todaypills.recommendationservice.domain.Supplement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface SupplementRepository extends JpaRepository<Supplement, Long> {

    Supplement findSupplementBySupplementId(Long supplement_id);
}
