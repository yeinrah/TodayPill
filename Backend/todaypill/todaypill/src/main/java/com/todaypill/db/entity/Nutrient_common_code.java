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
@Table(name = "nutrient_common_code")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Nutrient_common_code {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "supplement_id")
	private int supplement_id;
	
	@Column(name = "brand")
	private String brand;
	
	@Column(name = "formula")
	private double formula;
	
}

