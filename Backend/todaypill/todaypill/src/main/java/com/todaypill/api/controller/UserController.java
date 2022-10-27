package com.todaypill.api.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.HashMap;

import javax.net.ssl.HttpsURLConnection;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todaypill.codef.Codef;
import com.todaypill.request.GetHealthReq;

import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/api/user")
public class UserController {
	
	Codef codef;

	@Autowired
	public UserController(Codef codef) {
		super();
		this.codef = codef;
	}
	
	
	
	@GetMapping("/login/{access_token}")
	@ApiOperation(value = "Access토큰을 받아서 카카오 로그인을 진행한다.", notes = "카카오 로그인 진행")
	public ResponseEntity<?> login(@PathVariable String access_token) throws Exception {

		HashMap<String, Object> userInfo = new HashMap<String, Object>();
		String reqUrl = "https://kapi.kakao.com/v2/user/me";
		URL url = new URL(reqUrl);
		HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();
		conn.setRequestMethod("POST");
		conn.setRequestProperty("Authorization", "Bearer　"+access_token);
		int responseCode = conn.getResponseCode();
		System.out.println("responseCode=>" + responseCode);
		
		BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		
		String line = "";
		String result = "";
		while((line = br.readLine()) != null) {
			result += line;
		}
		System.out.println("responseBody => "+result);
		
		JSONParser parser = new JSONParser();
		JSONObject jsonOb = (JSONObject)parser.parse(result);
		System.out.println(jsonOb);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	//3. 건강검진 내역 확인하기
	@GetMapping("/getHealthCheckData")
	@ApiOperation(value = "건강검진 내역을 가져오는지 확인한다", notes = "확인하자")
	public ResponseEntity<?> getHealthCheckData(@RequestBody GetHealthReq getHealthReq) throws Exception {
		codef.getHealthCheckData(getHealthReq.getUserName(), getHealthReq.getPhoneNumber(), getHealthReq.getBirthday());
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	//4. 영양소 추천으로 인한 추천성분 업데이트
	@GetMapping("/updateRecommend")
	@ApiOperation(value = "추천성분 업데이트", notes = "추천성분 업데이트")
	public ResponseEntity<?> updateRecommend(@RequestBody GetHealthReq getHealthReq) throws Exception {
		codef.getHealthCheckData(getHealthReq.getUserName(), getHealthReq.getPhoneNumber(), getHealthReq.getBirthday());
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
}
