package com.todaypills.recommendationservice.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import javax.validation.constraints.NotNull;

@Getter
@ToString
public class CreateUserInfoReq {

    @NotNull
    private final Long userId;

    private final String email;

    private final String gender;

    private final Integer age;

    private final Float weight;

    private final Boolean smoking;

    private final Boolean pregnant;

    private final Boolean allergy;

    private final String outDoorActivity; // rarely, sometimes, usually

    private final String balancedMeal; //lackFish, lackVeg, lackFruit, LackMeat

    private final Boolean isOkBigPill;

    //기저질환
    private final Boolean heartburn;
    private final Boolean diarrhea;
    private final Boolean constipation;
    private final Boolean kidneyDisease;

    private final String preferredBrand;

    private final String problem; //해결하고싶은 고민거리
    //eyes, vessel, liver, intestine, skin, anemia, immune, fatigue, stress/sleep

    @Builder
    public CreateUserInfoReq(Long userId, String email, String gender, Integer age, Float weight, Boolean smoking, Boolean pregnant, Boolean allergy, String outDoorActivity, String balancedMeal, Boolean isOkBigPill, Boolean heartburn, Boolean diarrhea, Boolean constipation, Boolean kidneyDisease, String preferredBrand, String problem) {
        this.userId = userId;
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
        this.heartburn = heartburn;
        this.diarrhea = diarrhea;
        this.constipation = constipation;
        this.kidneyDisease = kidneyDisease;
        this.preferredBrand = preferredBrand;
        this.problem = problem;
    }
}
