package com.Hackathon.ReferralApp.service;


import com.Hackathon.ReferralApp.model.JobOpening;
import com.Hackathon.ReferralApp.repository.JobOpeningRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobOpeningService {

    private final JobOpeningRepository jobOpeningRepository;

    public JobOpeningService(JobOpeningRepository jobOpeningRepository) {
        this.jobOpeningRepository = jobOpeningRepository;
    }

    public List<JobOpening> getAllJobOpenings() {
        return jobOpeningRepository.findAll();
    }

    public JobOpening createJobOpening(JobOpening jobOpening) {
        return jobOpeningRepository.save(jobOpening);
    }

    public JobOpening getJobOpeningById(Long id) {
        return jobOpeningRepository.findById(id).orElse(null);
    }
}
