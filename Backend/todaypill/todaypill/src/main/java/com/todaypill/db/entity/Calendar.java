package com.todaypill.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "calendar")
@Data
public class Calendar {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "calendar_id")
		private int calendarId;
		
		@Column(name = "user_id")
		private int userId;
		
		@Column(name = "supplement_id")
		private int supplementId;
		
		@Column(name = "date")
		// yyyy-MM-dd
		private String date;

		@Column(name = "time")
		// hh-mm
		private String time;
		
		@Column(name = "tablets")
		private int tablets;
		
		@Column(name = "day")
		// 일월화수목금토 - 0123456
		private int day;
				
}
