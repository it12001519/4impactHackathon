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
public class JobOpening {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties(ignoreUnknown = true)
    private String jobTitle;

    @JsonIgnoreProperties(ignoreUnknown = true)
    @Column(columnDefinition = "TEXT")
    private String jobDesc;

    @JsonIgnoreProperties(ignoreUnknown = true)
    @Column(columnDefinition = "TEXT")
    private String jobResp;

    @JsonIgnoreProperties(ignoreUnknown = true)
    @Column(columnDefinition = "TEXT")
    private String jobQual;

    @JsonIgnoreProperties(ignoreUnknown = true)
    private boolean hardToFillRole;

    @JsonIgnoreProperties(ignoreUnknown = true)
    private String postedBy;

    // One job opening can have many referrals
    @OneToMany(mappedBy = "jobOpening", cascade = CascadeType.ALL)
    @JsonIgnoreProperties(ignoreUnknown = true)
    private java.util.List<Referral> referrals;
}
