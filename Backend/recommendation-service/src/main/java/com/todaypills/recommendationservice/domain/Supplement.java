package com.todaypills.recommendationservice.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "supplement")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Supplement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long supplementId;

    @Column(name = "supplement_name")
    private String supplementName;


    @Column
    private Double price;

    @Column
    private String brand;

    @Column
    private String image;

    @Column
    private String ingredients; // >> 깔끔하게 찢기

    @Column
    private Float bioavailability; // > 값 넣기

    @Column
    private Float laxative; // > 값 넣기

    @Column(name = "kidney_disease") // >>
    private Float kidneyDisease;

    @Column(name = "consumer_lab_score") // 일단 다 0점
    private Integer consumerLabScore;

    @Column(name = "additional_efficacy")
    private String additionalEfficacy;

    @Column
    private String note;

    @Column
    private Float amount;

    @Column(name = "required_count")
    private Float requiredCount;

    @Column
    private String formula;

    @Column
    private Integer like;

    @Column(name = "sustained_release")
    private Boolean sustainedRelease;

    @Column
    private Float pillSize;
    @Builder

    public Supplement(Long supplementId, String supplementName, Double price, String brand, String image, String ingredients, Float bioavailability, Float laxative, Float kidneyDisease, Integer consumerLabScore, String additionalEfficacy, String note, Float amount, Float requiredCount, String formula, Integer like, Boolean sustainedRelease, Float pillSize) {
        this.supplementId = supplementId;
        this.supplementName = supplementName;
        this.price = price;
        this.brand = brand;
        this.image = image;
        this.ingredients = ingredients;
        this.bioavailability = bioavailability;
        this.laxative = laxative;
        this.kidneyDisease = kidneyDisease;
        this.consumerLabScore = consumerLabScore;
        this.additionalEfficacy = additionalEfficacy;
        this.note = note;
        this.amount = amount;
        this.requiredCount = requiredCount;
        this.formula = formula;
        this.like = like;
        this.sustainedRelease = sustainedRelease;
        this.pillSize = pillSize;
    }
}
