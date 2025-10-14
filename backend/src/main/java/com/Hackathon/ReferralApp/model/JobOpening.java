package com.Hackathon.ReferralApp.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobOpening {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String jobTitle;

    @Column(columnDefinition = "TEXT")
    private String jobDesc;

    @Column(columnDefinition = "TEXT")
    private String jobResp;

    @Column(columnDefinition = "TEXT")
    private String jobQual;

    private boolean hardToFillRole;
    private String postedBy;

    // One job opening can have many referrals
    @OneToMany(mappedBy = "jobOpening", cascade = CascadeType.ALL)
    private java.util.List<Referral> referrals;
}
