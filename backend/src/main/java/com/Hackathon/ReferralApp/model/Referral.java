package com.Hackathon.ReferralApp.model;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(
    generator = ObjectIdGenerators.PropertyGenerator.class,
    property = "id"
)
public class Referral {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // employee who referred
    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    // candidate being referred
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "candidate_id", referencedColumnName = "id")
    private Candidate candidate;

    // job opening for referral
    @ManyToOne
    @JoinColumn(name = "job_opening_id")
    private JobOpening jobOpening;

    private String resume; // or resume file path
}