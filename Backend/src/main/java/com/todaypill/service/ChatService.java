//package com.todaypill.service;
//
//import java.security.Timestamp;
//import java.time.LocalDateTime;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.todaypill.chat.model.Status;
//import com.todaypill.chat.model.User;
//import com.todaypill.db.entity.ChattingRoom;
//import com.todaypill.repository.ChatRepository;
//
//@Service
//public class ChatService {
//
//	@Autowired
//	ChatRepository chatRepository;
//
//	public ChatService(ChatRepository chatRepository) {
//		super();
//		this.chatRepository = chatRepository;
//	}
//	
//	@Transactional
//	public void recordChat(String _id, String text, String senderName, String createdAt, Status status, User user, String roomName) throws Exception {
//
//		ChattingRoom chattingRoom = ChattingRoom.builder()._id(_id).text(text).senderName(senderName)
//				.createdAt(createdAt).roomName(roomName).build();
//		chatRepository.save(chattingRoom);
//		
//	}
//	
//	@Transactional
//	public List<ChattingRoom> selectAllChat(String roomName) throws Exception {
//		
//		return chatRepository.selectAllChat(roomName);
//	}
//}
