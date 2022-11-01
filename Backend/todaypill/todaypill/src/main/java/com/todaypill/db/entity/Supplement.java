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
	private int supplementId;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "price")
	private double price;
	
	@Column(name = "image")
	private String image;
	
	@Column(name = "ingredients")
	private String ingredients;
	
	@Column(name = "note")
	private String note;
		
	@Column(name = "like")
	private int like;
}

