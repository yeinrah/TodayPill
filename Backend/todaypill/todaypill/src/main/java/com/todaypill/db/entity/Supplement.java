package com.todaypill.db.entity;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "supplement")
@Data
@NoArgsConstructor
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
    private String ingredients;

    @Column
    private Double bioavailability;

    @Column
    private Double laxative;

    @Column(name = "kidney_disease")
    private Double kidneyDisease;

    @Column(name = "consumer_lab_score")
    private Integer consumerLabScore;

    @Column(name = "additional_efficacy")
    private String additionalEfficacy;

    @Column
    private String note;

    @Column
    private String amount;

    @Column(name = "required_count")
    private String requiredCount;

    @Column
    private String formula;

    @Column
    private Integer like;

    @Column(name = "sustained_release")
    private Boolean sustainedRelease;

    @Builder
    public Supplement(Long supplementId, String supplementName, Double price, String brand, String image, String ingredients, Double bioavailability, Double laxative, Double kidneyDisease, Integer consumerLabScore, String additionalEfficacy, String note, String amount, String requiredCount, String formula, Integer like, Boolean sustainedRelease) {
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
    }
    
}
