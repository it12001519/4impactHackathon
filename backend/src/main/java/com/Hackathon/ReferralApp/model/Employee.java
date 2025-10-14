package com.Hackathon.ReferralApp.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    private int points = 0; // referral points

    // One employee can make many referrals
    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL)
    private java.util.List<Referral> referrals;
}