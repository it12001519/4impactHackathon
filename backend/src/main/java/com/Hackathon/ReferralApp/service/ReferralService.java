package com.Hackathon.ReferralApp.service;

import com.Hackathon.ReferralApp.model.*;
import com.Hackathon.ReferralApp.repository.*;
import com.Hackathon.ReferralApp.service.*;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
public class ReferralService {

    private final ReferralRepository referralRepository;
    private final EmployeeRepository employeeRepository;
    private final JobOpeningRepository jobOpeningRepository;
    private final CandidateRepository candidateRepository;

    public ReferralService(ReferralRepository referralRepository, EmployeeRepository employeeRepository,
    JobOpeningRepository jobOpeningRepository, CandidateRepository candidateRepository) {
        this.referralRepository = referralRepository;
        this.employeeRepository = employeeRepository;
        this.jobOpeningRepository = jobOpeningRepository;
        this.candidateRepository = candidateRepository;
    }

    public List<Referral> getAllReferrals() {
        return referralRepository.findAll();
    }

    @PostMapping
    public Referral createReferral(@RequestBody Referral referral) {
        // TODO: referral points logic
        System.out.print("LOGGING"+ referral.toString());
        Employee employee = employeeRepository.findById(referral.getEmployee().getId())
              .orElseThrow(() -> new RuntimeException("Employee not found"));
          referral.setEmployee(employee);
      
          if (referral.getJobOpening() != null) {
              JobOpening jobOpening = jobOpeningRepository.findById(referral.getJobOpening().getId())
                  .orElseThrow(() -> new RuntimeException("Job opening not found"));
              referral.setJobOpening(jobOpening);
          }
      
          if (referral.getCandidate() != null) {
              Candidate candidate = candidateRepository.findById(referral.getCandidate().getId())
                  .orElseThrow(() -> new RuntimeException("Candidate not found"));
              referral.setCandidate(candidate);
          }
      return referralRepository.save(referral);
    }

    public Referral getReferralById(Long id) {
        return referralRepository.findById(id).orElse(null);
    }
}