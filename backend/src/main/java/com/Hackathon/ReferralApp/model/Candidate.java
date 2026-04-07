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
public class Candidate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties(ignoreUnknown = true)
    private String name;

    @JsonIgnoreProperties(ignoreUnknown = true)
    private String email;

    @JsonIgnoreProperties(ignoreUnknown = true)
    @Enumerated(EnumType.STRING)
    private CandidateStatus status = CandidateStatus.APPLIED;
}
