package com.todaypills.recommendationservice.domain;

import javax.persistence.Column;

public class SupplementsType {

    @Column
    private String supplement_type;
    @Column
    private String best_time;
}
