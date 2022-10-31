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
@Table(name = "commonquestion")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Common_Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int userId;
	
	@Column(name = "smoke")
	private boolean smoke;
	
	@Column(name = "pregnant")
	private int pregnant;
	
	@Column(name = "allergy")
	private boolean allergy;
	
	@Column(name = "pollen")
	private boolean pollen;
	
	@Column(name = "honey")
	private boolean honey;
		
	@Column(name = "bee")
	private boolean bee;
	
	@Column(name = "eyes")
	private boolean eyes;
	
	@Column(name = "vessel")
	private boolean vessel;
	
	@Column(name = "liver")
	private boolean liver;
	
	@Column(name = "intestine")
	private boolean intestine;
	
	@Column(name = "skin")
	private boolean skin;
	
	@Column(name = "anemia")
	private boolean anemia;
	
	@Column(name = "immune")
	private boolean immune;
	
	@Column(name = "fatigue")
	private boolean fatigue;

	@Column(name = "outdoor")
	private boolean outdoor;
	
	@Column(name = "eat")
	private boolean eat;
	
	
}

