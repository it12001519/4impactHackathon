package com.Hackathon.ReferralApp.repository;

import com.Hackathon.ReferralApp.model.JobOpening;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobOpeningRepository extends JpaRepository<JobOpening, Long> {
}