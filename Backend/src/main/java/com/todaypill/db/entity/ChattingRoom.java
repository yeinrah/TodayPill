//package com.todaypill.db.entity;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//import com.todaypill.chat.model.Status;
//import com.todaypill.chat.model.User;
//
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Entity
//@Table(name = "chatting_room")
//@Data
//@Builder
//@AllArgsConstructor
//@NoArgsConstructor
//public class ChattingRoom {
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column(name = "chat_id")
//	private String chatId;
//	
//	@Column(name = "_id")
//	private String _id;
//	
//	@Column(name = "text")
//	private String text;
//	@Column(name = "senderName")
//    private String senderName;
//	@Column(name = "createdAt")
//    private String createdAt;
////	@Column(name = "status")
////    private Status status;
////	@Column(name = "user")
////    private User user;
//	@Column(name = "room_name")
//	private String roomName;
//}
