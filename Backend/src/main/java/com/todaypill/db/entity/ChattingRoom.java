package com.todaypill.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "chatting_room")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChattingRoom {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "record_chat")
		private int recordChat;
		
		@Column(name = "room_name")
		private String roomName;
		
		@Column(name = "nickname")
		private String nickname;
		
		@Column(name = "chat")
		private String chat;

		@Column(name = "time")
		private String time;
		
		@Column(name = "report")
		private Integer report;
		
		
}
