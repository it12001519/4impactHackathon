package com.Hackathon.ReferralApp.repository;

import com.Hackathon.ReferralApp.model.Referral;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReferralRepository extends JpaRepository<Referral, Long> {
}