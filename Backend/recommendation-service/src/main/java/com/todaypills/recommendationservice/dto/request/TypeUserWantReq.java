package com.todaypills.recommendationservice.dto.request;

import lombok.Builder;
import lombok.Getter;

/*영양제 종류마다 개별적으로 받는 유저가 선호하는 영양제 속성*/
@Getter
@Builder
public class TypeUserWantReq {

    private final String supplementType;
    private final Double  lowerPriceLimit;
    private final Double  upperPriceLimit;
    private final String additionalEfficacy;
    private final String fomula;
    private final Boolean sustainedRelease;

}
