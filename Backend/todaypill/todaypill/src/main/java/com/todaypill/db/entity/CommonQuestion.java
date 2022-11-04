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
public class CommonQuestion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int userId;
	
	@Column(name = "smoking")
	private boolean smoking;
	
	@Column(name = "pregnant")
	private boolean pregnant;
	
	@Column(name = "allergy")
	private String allergy;
	
	@Column(name = "heartburn")
	private boolean heartburn;
	
	@Column(name = "diarrhea")
	private boolean diarrhea;
		
	@Column(name = "constipation")
	private boolean constipation;
	
	@Column(name = "kidney_disease")
	private boolean kidney_disease;
	
	@Column(name = "skin")
	private int skin;
	
	@Column(name = "balanced_meal")
	private boolean balanced_meal;
	
	@Column(name = "lack")
	private String lack;
	
	@Column(name = "is_ok_big_pill")
	private boolean is_ok_big_pill;
	
	@Column(name = "preferred_brand")
	private String preferred_brand;
	
	@Column(name = "problem")
	private String problem;
	
	
}

