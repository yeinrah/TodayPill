package com.todaypill.service;

import java.security.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.todaypill.db.entity.ChattingRoom;
import com.todaypill.repository.ChatRepository;

@Service
public class ChatService {

	@Autowired
	ChatRepository chatRepository;

	public ChatService(ChatRepository chatRepository) {
		super();
		this.chatRepository = chatRepository;
	}
	
	@Transactional
	public void recordChat( String roomName, String nickname, String chat) throws Exception {
		LocalDateTime now = LocalDateTime.now();
		int year = now.getYear();
		int month = now.getMonthValue();
		int day = now.getDayOfMonth();
		int hour = now.getHour();
		int minute = now.getMinute();
		int second = now.getSecond();
		
		ChattingRoom chattingRoom = ChattingRoom.builder().
				roomName(roomName).nickname(nickname).chat(chat).
				time(year+"-"+month+"-"+day+":"+hour+":"+minute+":"+second).report(0).build();
		chatRepository.save(chattingRoom);
		
	}
	
	@Transactional
	public List<ChattingRoom> selectAllChat(String roomName) throws Exception {
		
		return chatRepository.selectAllChat(roomName);
	}
}
