package com.todaypill.db.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "supplement")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Supplement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "supplement_id")
	private Integer supplementId;
	
	@Column(name = "supplement_type_id")
	private Integer supplementTypeId;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "brand")
	private String brand;
	
	@Column(name = "price")
	private Integer price;
	
	@Column(name = "image")
	private String image;
		
	// columnDefinition = "TEXT" 이거는 에러남
	@Column(name = "ingredients", length = 2000)
	private String ingredients;
	
	@Column(name = "bioavailability")
	private Float bioavailability;
	
	@Column(name = "laxative")
	private Float laxative;
	
	@Column(name = "kidney_disease")
	private Float kidneyDisease;
	
	@Column(name = "consumer_lab_score")
	private Integer consumerLabScore;
	
	@Column(name = "additional_efficacy")
	private String additionalEfficacy;
	
	@Column(name = "note")
	private String note;
	
	@Column(name = "amount")
	private String amount;
	
	@Column(name = "required_count")
	private String requiredCount;
	
	@Column(name = "formula")
	private String formula;
	
	@Column(name = "like")
	private Integer like;
	
	@Column(name = "sustained_release")
	private Boolean sustainedRelease;

	@Column(name = "pill_size")
	private String pillSize;
}
