package com.Hackathon.ReferralApp.controller;

import com.Hackathon.ReferralApp.model.JobOpening;
import com.Hackathon.ReferralApp.service.JobOpeningService;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "*", maxAge = 3600)
public class JobOpeningController {

    private final JobOpeningService jobOpeningService;

    public JobOpeningController(JobOpeningService jobOpeningService) {
        this.jobOpeningService = jobOpeningService;
    }

    @GetMapping
    public List<JobOpening> getAllJobs() {
        return jobOpeningService.getAllJobOpenings();
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public JobOpening getJobById(@PathVariable Long id) {
        return jobOpeningService.getJobOpeningById(id);
    }

    @PostMapping
    public JobOpening createJob(@RequestBody JobOpening jobOpening) {
        return jobOpeningService.createJobOpening(jobOpening);
    }
}