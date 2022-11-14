package com.todaypill.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.todaypill.chat.model.Message;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/messageVitaminB")
    @SendTo("/chatroom/vitaminB")
    public Message receiveMessageVitaminB(@Payload Message message){
        return message;
    }

    @MessageMapping("/messageVitaminC")
    @SendTo("/chatroom/vitaminC")
    public Message receiveMessageVitaminC(@Payload Message message){
        return message;
    }
//    @MessageMapping("/private-message")
//    public Message recMessage(@Payload Message message){
//        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(),"/private",message);
//        System.out.println(message.toString());
//        return message;
//    }
}