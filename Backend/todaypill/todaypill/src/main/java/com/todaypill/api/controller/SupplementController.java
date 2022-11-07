package com.todaypill.api.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.HashMap;
import java.util.List;

import javax.net.ssl.HttpsURLConnection;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todaypill.codef.Codef;
import com.todaypill.db.entity.Like;
import com.todaypill.db.entity.Supplement;
import com.todaypill.db.entity.User;
import com.todaypill.request.GetHealthReq;
import com.todaypill.request.InsertLikeReq;
import com.todaypill.request.UpdateNameReq;
import com.todaypill.request.UserFirstSurveyReq;
import com.todaypill.service.SupplementService;
import com.todaypill.service.UserService;

import io.swagger.annotations.ApiOperation;
@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/api/supplement")
public class SupplementController {
	
	UserService userService;
	SupplementService supplementService;
	@Autowired
	public SupplementController(UserService userService, SupplementService supplementService) {
		super();
		this.userService = userService;
		this.supplementService = supplementService;
	}
	
	
	
	@GetMapping("/findAll")
	@ApiOperation(value = "supplement 전부를 가져온다", notes = "가져온다")
	public ResponseEntity<?> firstSurvey() throws Exception {
		List<Supplement> list = supplementService.findAll();
		return new ResponseEntity<List<Supplement>>(list, HttpStatus.OK);
	}
	
	@GetMapping("/{supplementId}")
	@ApiOperation(value = "supplement id로 해당 영양제 정보를 가져온다", notes = "가져온다")
	public ResponseEntity<?> findSupplement(@PathVariable int supplementId) throws Exception {
		Supplement supplement = supplementService.getSupplement(supplementId);
		return new ResponseEntity<Supplement>(supplement, HttpStatus.OK);
	}
	
	@GetMapping("/findLikeTop10")
	@ApiOperation(value = "supplement 중 like 순위 10위 안의 영양제를 가져온다", notes = "가져온다")
	public ResponseEntity<?> findLikeTop10() throws Exception {
		List<Supplement> list = supplementService.getLikeTop10();
		return new ResponseEntity<List<Supplement>>(list, HttpStatus.OK);
	}

} 