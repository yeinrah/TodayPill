package com.todaypill.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todaypill.chat.model.Message;
import com.todaypill.db.entity.ChattingRoom;
import com.todaypill.db.entity.Routine;
import com.todaypill.service.ChatService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    private ChatService chatService;
    
    
    
    public ChatController(SimpMessagingTemplate simpMessagingTemplate, ChatService chatService) {
		super();
		this.simpMessagingTemplate = simpMessagingTemplate;
		this.chatService = chatService;
	}
    
	@GetMapping("/getText/{roomName}")
	@ApiOperation(value = "영양제 이름에 해당하는 채팅 방의 채팅 내용을 가져온다.", notes = "roomName 필요")
	public ResponseEntity<?> getText(@PathVariable String roomName) throws Exception {
		List<ChattingRoom> list = chatService.selectAllChat(roomName);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@MessageMapping("/vitaminB")
    @SendTo("/chatroom/vitaminB")
    public Message receiveMessageVitaminB(@Payload Message message) throws Exception{
		chatService.recordChat(message.get_id(),"비타민 B", message.getSenderName(), message.getText());
        return message;
    }

    @MessageMapping("/vitaminC")
    @SendTo("/chatroom/vitaminC")
    public Message receiveMessageVitaminC(@Payload Message message) throws Exception{
		chatService.recordChat(message.get_id(),"비타민 C", message.getSenderName(), message.getText());
        return message;
    }
    @MessageMapping("/vitaminD")
    @SendTo("/chatroom/vitaminD")
    public Message receiveMessageVitaminD(@Payload Message message) throws Exception{
		chatService.recordChat(message.get_id(),"비타민 D", message.getSenderName(), message.getText());
    	return message;
    }
    @MessageMapping("/multivitamin")
    @SendTo("/chatroom/multivitamin")
    public Message receiveMessageMultivitamin(@Payload Message message) throws Exception{
		chatService.recordChat(message.get_id(),"종합비타민", message.getSenderName(), message.getText());
    	return message;
    }
    @MessageMapping("/magnesium")
    @SendTo("/chatroom/magnesium")
    public Message receiveMessageMagnesium(@Payload Message message) throws Exception{
		chatService.recordChat(message.get_id(),"마그네슘", message.getSenderName(), message.getText());
    	return message;
    }
    @MessageMapping("/omega3")
    @SendTo("/chatroom/omega3")
    public Message receiveMessageOmega3(@Payload Message message) throws Exception{
		chatService.recordChat(message.get_id(),"오메가3", message.getSenderName(), message.getText());
    	return message;
    }
    @MessageMapping("/milkthistle")
    @SendTo("/chatroom/milkthistle")
    public Message receiveMessageMilkthistle(@Payload Message message)throws Exception{
		chatService.recordChat(message.get_id(),"밀크시슬3", message.getSenderName(), message.getText());
    	return message;
    }
    @MessageMapping("/lutein")
    @SendTo("/chatroom/lutein")
    public Message receiveMessageLutein(@Payload Message message) throws Exception{
		chatService.recordChat(message.get_id(),"루테인", message.getSenderName(), message.getText());
    	return message;
    }
    @MessageMapping("/zinc")
    @SendTo("/chatroom/zinc")
    public Message receiveMessageZinc(@Payload Message message) throws Exception{
		chatService.recordChat(message.get_id(),"아연", message.getSenderName(), message.getText());
    	return message;
    }
    @MessageMapping("/lactobacillus")
    @SendTo("/chatroom/lactobacillus")
    public Message receiveMessageLactobacillus(@Payload Message message) throws Exception{
		chatService.recordChat(message.get_id(),"유산균", message.getSenderName(), message.getText());
    	return message;
    }
    @MessageMapping("/collagen")
    @SendTo("/chatroom/collagen")
    public Message receiveMessageCollagen(@Payload Message message) throws Exception{
		chatService.recordChat(message.get_id(),"콜라겐", message.getSenderName(), message.getText());
    	return message;
    }
    @MessageMapping("/fe")
    @SendTo("/chatroom/fe")
    public Message receiveMessageFe(@Payload Message message) throws Exception{
		chatService.recordChat(message.get_id(),"철분", message.getSenderName(), message.getText());
    	return message;
    }
    @MessageMapping("/profolis")
    @SendTo("/chatroom/profolis")
    public Message receiveMessageProfolis(@Payload Message message) throws Exception{
		chatService.recordChat(message.get_id(),"프로폴리스", message.getSenderName(), message.getText());
    	return message;
    }
//    @MessageMapping("/private-message")
//    public Message recMessage(@Payload Message message){
//        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(),"/private",message);
//        System.out.println(message.toString());
//        return message;
//    }
}