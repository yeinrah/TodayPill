package com.todaypills.recommendationservice.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "supplement_type")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SupplementsType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long supplementId;

    @Column
    private String supplement_type; //마그네슘, 비타민B ... 등
    @Column
    private String best_time; // hh:mm
}