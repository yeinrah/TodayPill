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
		
		@Column(name = "routine_id")
		private int routineId;
		
		@Column(name = "user_id")
		private int userId;
		
		// yyyy-MM-dd
		private String date;

		private Boolean taken;
}
