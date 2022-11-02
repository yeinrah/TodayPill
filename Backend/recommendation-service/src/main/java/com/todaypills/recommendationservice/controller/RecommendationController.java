package com.todaypills.recommendationservice.controller;

import com.todaypills.recommendationservice.dto.request.CreateUserInfoReq;
import com.todaypills.recommendationservice.dto.response.RecommendSupplementRes;
import com.todaypills.recommendationservice.service.RecommendService;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/recommend")
public class RecommendationController {

    private final RecommendService recommendService;

    @PostMapping
    public ResponseEntity<HttpStatus> createUserInfo(@Valid CreateUserInfoReq createUserInfoReq) throws IOException{
        recommendService.
    }
}
