package com.Hackathon.ReferralApp.service;

import com.Hackathon.ReferralApp.model.Employee;
import com.Hackathon.ReferralApp.model.Referral;
import com.Hackathon.ReferralApp.repository.EmployeeRepository;
import com.Hackathon.ReferralApp.repository.ReferralRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReferralService {

    private final ReferralRepository referralRepository;
    private final EmployeeRepository employeeRepository;

    public ReferralService(ReferralRepository referralRepository, EmployeeRepository employeeRepository) {
        this.referralRepository = referralRepository;
        this.employeeRepository = employeeRepository;
    }

    public List<Referral> getAllReferrals() {
        return referralRepository.findAll();
    }

    public Referral createReferral(Referral referral) {
        // TODO: referral points logic
        Employee employee = employeeRepository.findById(referral.getEmployee().getId()).orElse(null);
        if (employee != null) {
            employee.setPoints(employee.getPoints() + 10);
            employeeRepository.save(employee);
        }
        return referralRepository.save(referral);
    }

    public Referral getReferralById(Long id) {
        return referralRepository.findById(id).orElse(null);
    }
}