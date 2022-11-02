package com.todaypills.recommendationservice.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
public class RecommendSupplementRes {
    private final Long supplement_id;
    private final String supplement_name;
    private final Double price;
    private final String brand;
    private final String image;
    private final String ingredients;
    private final String additional_efficacy;
    private final Float amount;
    private final Float required_count;

    @Builder
    public RecommendSupplementRes(Long supplement_id, String supplement_name, Double price, String brand, String image, String ingredients, String additional_efficacy, Float amount, Float required_count) {
        this.supplement_id = supplement_id;
        this.supplement_name = supplement_name;
        this.price = price;
        this.brand = brand;
        this.image = image;
        this.ingredients = ingredients;
        this.additional_efficacy = additional_efficacy;
        this.amount = amount;
        this.required_count = required_count;
    }
}
