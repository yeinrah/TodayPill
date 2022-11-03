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
import com.todaypill.db.entity.User;
import com.todaypill.request.GetHealthReq;
import com.todaypill.request.InsertLikeReq;
import com.todaypill.request.UpdateNameReq;
import com.todaypill.request.UserFirstSurveyReq;
import com.todaypill.service.UserService;

import io.swagger.annotations.ApiOperation;
@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/api/user")
public class UserController {
	
	Codef codef;
	UserService userService;
	
	@Autowired
	public UserController(Codef codef, UserService userService) {
		super();
		this.codef = codef;
		this.userService = userService;
	}
	
	
	
	@PostMapping("/login")
    @ApiOperation(value = "Access토큰을 받아서 카카오 로그인을 진행한다.", notes = "카카오 로그인 진행")
    public ResponseEntity<?> login(@RequestBody String code) throws Exception {
        System.out.println("코드 =>" + code);
        code = code.substring(16);
        code = code.replace("\"", "");
        code = code.replace("}", "");
        System.out.println(code);
        HashMap<String, Object> userInfo = new HashMap<String, Object>();

        String reqUrl = "https://kapi.kakao.com/v2/user/me";
        URL url = new URL(reqUrl);

        HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Authorization", "Bearer "+ code);
        int responseCode = conn.getResponseCode();
        System.out.println("responseCode=>" + responseCode);

        BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

        String line = "";
        String result = "";
        while((line = br.readLine()) != null) {
            result += line;
        }
//        System.out.println("responseBody => "+result);

        JSONParser parser = new JSONParser();
        JSONObject jsonOb = (JSONObject)parser.parse(result);
//      JSONObject kakaoAccount = jsonOb.get((Object)"kakao_account");
        System.out.println("기본 객체 =>" + jsonOb);
        JSONObject kakaoAccount = (JSONObject)jsonOb.get("kakao_account");
        JSONObject getNickname = (JSONObject)kakaoAccount.get("profile");
        
        String name = (String)getNickname.get("nickname");
        String age = (String)kakaoAccount.get("age_range");
        age = age.substring(0,2);
        int realAge = Integer.parseInt(age);
        String email = (String)kakaoAccount.get("email");
        String gender = (String)kakaoAccount.get("gender");
        if(gender.equals("male")) gender = "남";
        else if(gender.equals("Female")) gender = "여";
        else gender = "x";
        
        System.out.println("카카오 =>"+kakaoAccount);
        System.out.println(jsonOb);
        System.out.println(name);
        System.out.println(realAge);
        System.out.println(email);
        System.out.println(gender);
        User user = userService.signup(email, name, realAge, gender);
        
        if(user==null) {
        	HashMap<String, Object> map = new HashMap();
        	map.put("signup", false);
        	map.put("name", name);
        	map.put("age", realAge);        	
        	map.put("email", email);
        	map.put("gender", gender);
            return new ResponseEntity<HashMap<String,Object>>(map, HttpStatus.OK);
        }else {
        	HashMap<String, Object> map = new HashMap();
        	map.put("signup", true);
        	map.put("name", name);
        	map.put("age", realAge);        	
        	map.put("email", email);
        	map.put("gender", gender);
            return new ResponseEntity<HashMap<String,Object>>(map, HttpStatus.OK);
        }
        

    }


	//3. 건강검진 내역 확인하기
	@PostMapping("/healthcheckdata")
	@ApiOperation(value = "건강검진 내역을 가져와서 영양소를 추천한다", notes = "추천하자")
	public ResponseEntity<?> getHealthCheckData(@RequestBody GetHealthReq getHealthReq) throws Exception {
		HashMap<String,Object> map = codef.getHealthCheckData(getHealthReq.getUserName(), getHealthReq.getPhoneNumber(), getHealthReq.getBirthday());
		List<String> list = (List<String>)map.get("list");
		boolean check = (boolean)map.get("check");
		userService.updateRecommend(getHealthReq.getEmail(),list.get(0), list.get(1), list.get(2));
		
		return new ResponseEntity<Boolean>(check, HttpStatus.OK);
	}
	
	//4. 영양소 추천으로 인한 추천성분 업데이트
	@PutMapping("/recommend")
	@ApiOperation(value = "추천성분 업데이트", notes = "추천성분 업데이트")
	public ResponseEntity<?> updateRecommend(@RequestBody GetHealthReq getHealthReq) throws Exception {
		codef.getHealthCheckData(getHealthReq.getUserName(), getHealthReq.getPhoneNumber(), getHealthReq.getBirthday());
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	//5. 좋아요 누르면 insert
	@PostMapping("/insertlike")
	@ApiOperation(value = "좋아요 누르기", notes = "좋아요 테이블 데이터 넣기")
	public ResponseEntity<?> insertLike(@RequestBody InsertLikeReq insertLikeReq) throws Exception {
		userService.insertLike(insertLikeReq.getUserId(), insertLikeReq.getSupplementId());
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	//6. 좋아요 눌러진거 삭제하기
	@DeleteMapping("/deletelike")
	@ApiOperation(value = "좋아요 삭제하기", notes = "좋아요 테이블 데이터 삭제하기")
	public ResponseEntity<?> deleteLike(@RequestBody InsertLikeReq insertLikeReq) throws Exception {
		userService.deleteLike(insertLikeReq.getUserId(), insertLikeReq.getSupplementId());
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	//7. 영양제별 좋아요 개수 배열 리턴
	@GetMapping("/supplementlike/{supplementId}")
	@ApiOperation(value = "영양제별 좋아요 누른 사람  userId 리턴", notes = "리턴")
	public ResponseEntity<?> deleteLike(@PathVariable int supplementId) throws Exception {
		List<Integer> list = userService.likeListOfSupplement(supplementId);
		return new ResponseEntity<List<Integer>>(list, HttpStatus.OK);
	}
	
	@GetMapping("/user/{email}")
	@ApiOperation(value = "email로 유저 정보 얻기", notes = "유저 정보 얻기")
	public ResponseEntity<?> deleteLike(@PathVariable String email) throws Exception {
		User user = userService.findOneByEmail(email);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@PutMapping("/user/updateName")
	@ApiOperation(value = "update name", notes = "이름 바꾸기")
	public ResponseEntity<?> updateName(@RequestBody UpdateNameReq updateNameReq) throws Exception {
		userService.updateName(updateNameReq);
		return new ResponseEntity<String>(HttpStatus.OK);
	}
	
	@PutMapping("/user/firstSurvey")
	@ApiOperation(value = "1차 설문조사", notes = "1차 설문조사를 진행한다.")
	public ResponseEntity<?> firstSurvey(@RequestBody UserFirstSurveyReq userFirstSurveyReq) throws Exception {
		String[] arr = userService.userFirstSurvey(userFirstSurveyReq);
		User user = userService.findOneByUserId(userFirstSurveyReq.getUserId());
		userService.updateRecommend(user.getEmail(), arr[0], arr[1], arr[2]);
		// commonQuestion 만들어주기
		
		return new ResponseEntity<String>(HttpStatus.OK);
	}

} 
