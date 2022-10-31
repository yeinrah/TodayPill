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
public class Supplements {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long supplement_id;

    @Column
    private String supplement_name;

    @Column
    private double price;

    @Column
    private String brand;

    @Column
    private String image;

    @Column
    private String ingredients;

    @Column
    private int bioavailability;

    @Column
    private int laxative;

    @Column
    private int kidney_disease;

    @Column
    private int consumer_lab_score;

    @Column
    private String additional_efficacy;

    @Column
    private String note;

    @Column
    private float amount;

    @Column
    private float required_count;

    @Column
    private String formula;

    @Column
    private int views;

    @Column
    private boolean sustained_release;

    @Builder
    public Supplements(Long supplement_id, String supplement_name, double price, String brand, String image, String ingredients, int bioavailability, int laxative, int kidney_disease, int consumer_lab_score, String additional_efficacy, String note, float amount, float required_count, String formula, int views, boolean sustained_release) {
        this.supplement_id = supplement_id;
        this.supplement_name = supplement_name;
        this.price = price;
        this.brand = brand;
        this.image = image;
        this.ingredients = ingredients;
        this.bioavailability = bioavailability;
        this.laxative = laxative;
        this.kidney_disease = kidney_disease;
        this.consumer_lab_score = consumer_lab_score;
        this.additional_efficacy = additional_efficacy;
        this.note = note;
        this.amount = amount;
        this.required_count = required_count;
        this.formula = formula;
        this.views = views;
        this.sustained_release = sustained_release;
    }
}
