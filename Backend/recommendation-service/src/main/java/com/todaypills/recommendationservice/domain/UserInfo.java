package com.todaypills.recommendationservice.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "user")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Column
    private String email;
    @Column
    private String gender;
    @Column
    private Integer age;
    @Column
    private Float weight;
    @Column
    private Boolean smoking;
    @Column
    private Boolean pregnant;
    @Column
    private Boolean allergy;
    @Column(name = "outdoor_activity")
    private String outDoorActivity; // rarely, sometimes, usually
    @Column(name = "balanced_meal")
    private String balancedMeal; //lackFish, lackVeg, lackFruit, LackMeat
    @Column(name = "is_ok_big_pill")
    private Boolean isOkBigPill;
    @Column
    private final Boolean heart
    @Column(name = "preferred_brand")
    private String preferredBrand;
    @Column
    private String problem; //해결하고싶은 고민거리
    //eyes, vessel, liver, intestine, skin, anemia, immune, fatigue, stress/sleep

    @Builder
    public UserInfo(Long userId, String email, String gender, Integer age, Float weight, Boolean smoking, Boolean pregnant, Boolean allergy, String outDoorActivity, String balancedMeal, Boolean isOkBigPill, String disease, String preferredBrand, String problem) {
        this.userId = userId; //13242, "kmj9247@naver.com", "woman", 26, 52, false, false, false, "sometimes", "lackFish", false, "kidneyDisease, constipation", "", "fatigue"
        this.email = email;
        this.gender = gender;
        this.age = age;
        this.weight = weight;
        this.smoking = smoking;
        this.pregnant = pregnant;
        this.allergy = allergy;
        this.outDoorActivity = outDoorActivity;
        this.balancedMeal = balancedMeal;
        this.isOkBigPill = isOkBigPill;
        this.preferredBrand = preferredBrand;
        this.problem = problem;
    }
}
