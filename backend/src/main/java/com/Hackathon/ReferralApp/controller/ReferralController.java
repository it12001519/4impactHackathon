package com.Hackathon.ReferralApp.controller;

import com.Hackathon.ReferralApp.model.Referral;
import com.Hackathon.ReferralApp.service.ReferralService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/referrals")
public class ReferralController {

    private final ReferralService referralService;

    public ReferralController(ReferralService referralService) {
        this.referralService = referralService;
    }

    @GetMapping
    public List<Referral> getAllReferrals() {
        return referralService.getAllReferrals();
    }

    @GetMapping("/{id}")
    public Referral getReferralById(@PathVariable Long id) {
        return referralService.getReferralById(id);
    }

    @PostMapping
    public Referral createReferral(@RequestBody Referral referral) {
        return referralService.createReferral(referral);
    }
}