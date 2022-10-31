package com.todaypill.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Data;

@Entity
@Table(name = "routine")
@Data
@Builder
public class Routine {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "routine_id")
		private int routineId;
		
		@Column(name = "user_id")
		private int userId;
		
		@Column(name = "supplement_id")
		private int supplementId;

		@Column(name = "time")
		// hh-mm
		private String time;
		
		@Column(name = "day")
		// 일월화수목금토 - 0123456
		private int day;

		@Column(name = "tablets")
		private int tablets;
}
