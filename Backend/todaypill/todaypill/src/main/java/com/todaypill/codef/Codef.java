package com.todaypill.codef;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.codef.api.EasyCodef;
import io.codef.api.EasyCodefServiceType;

@Component
public class Codef {
	public void getHealthCheckData() throws InterruptedException, IOException, ParseException {
		EasyCodef codef = new EasyCodef();
		String PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2AIbpmBsoFttEpq9vQZxi5VvSR6zidBfN3cqnG+88qRzYoql7iJ8nUVtQnrcvcUpSSKUKcnvbast1R9iCR03I5IdVcJCfgczdGi6ltGFB7HGLKpIuhf+r+AbNy2f/DSbjNW3TzoyCqcaJR6Uk+QTTjQxx3J4va+L4UCttmgDfc1KbzUkvnSz+XRSJ8Xvh91fTuxjhQ14T7zPuPrwtZjsW6HNHCSNsQKYUb8bW+y1umMWk6wg0lmq0rVfrqum1113cLZZFKurNY1XmT9MRofDLzurJoSJ2QRH+98tNV7/hFIcMRQ+u+r3/QjgjKTrxiEpJx8XL7Wm7zKPQo5h6WofHQIDAQAB";
		String CLIENT_ID = "2a505173-8184-42a8-955c-2ca23734baf2";
		String CLIENT_SECRET = "60f839be-87b2-43a3-8a3c-37093e628daf";
		
		codef.setClientInfoForDemo(CLIENT_ID, CLIENT_SECRET);
		codef.setPublicKey(PUBLIC_KEY);
		

			String accessToken1 = codef.requestToken(EasyCodefServiceType.DEMO);
	
		
		List<HashMap<String, Object>>  accountList = new ArrayList<HashMap<String, Object>> ();
		HashMap<String, Object> accountMap = new HashMap<String, Object>();
		String id = "khss4008@gmail.com";
		
		accountMap.put("organization",	"0002"); // 기관코드는 각 상품 페이지에서 확인 가능
		accountMap.put("loginType",  	"5");	//로그인 타입(간편인증)
		accountMap.put("loginTypeLevel", "1");	// 1= 카카오톡
		accountMap.put("userName", "나예인");	// 1= 카카오톡
		accountMap.put("phoneNo",	"01030991601");
//		accountMap.put("id", id); //요청 식별 아이디 ex) ID + UUID 뭔지 잘 모르겠다
		accountMap.put("identity",	"19960309");
		accountMap.put("inquiryType",	"0");	//조회 타입 0 = 건강검진 일반조회
		accountMap.put("searchStartYear",	"2019");	//조회 시작년도
		accountMap.put("searchEndYear",	"2022");	//조회 종료년도
		accountMap.put("type",	"0");	// 조회대상 0 = 전체, 1 = 본인검진, 2 = 영유아검진
		
//		 "organization": "0002",
//		  "loginType":"0 또는 5", 0이 공동/금융인증서, 5가 간편인증
//		  "certType": "1",
//		  "certFile": "BASE64로 Encoding된 인증서 der파일 문자열",
//		  "keyFile": "BASE64로 Encoding된 인증서 key파일 문자열",
//		  "certPassword": "RSA암호화된 비밀번호",
//		  "loginTypeLevel": "1",
//		  "userName": "홍길동",
//		  "phoneNo": "010********",
//		  "id": "사용자 계정을 식별할 수 있는 유일 값 세팅",
//		  "identity": "********",
//		  "inquiryType": "0",
//		  "searchStartYear": "2021",
//		  "searchEndYear": "2021",
//		  "type": "1"
		
		String productUrl = "/v1/kr/public/pp/nhis-health-checkup/result";
		String result = "";
		
			result = codef.requestProduct(productUrl, EasyCodefServiceType.DEMO, accountMap);	//이게 api 요청한거

		
		
		HashMap<String, Object> responseMap;
		HashMap<String, Object> resultMap;
			responseMap = new ObjectMapper().readValue(result, HashMap.class);
			System.out.println("accountMap1 =>" + accountMap);
			System.out.println("responseMap =>"+ responseMap);
			resultMap = (HashMap<String, Object>)responseMap.get("result");
			System.out.println("resultMap =>" + resultMap);



		//N차 추가인증은 기본 파라미터 + 추가인증 파라미터를 요청해줘야 한다.
		accountMap.put("simpleAuth",	"1");	
		accountMap.put("is2Way",	true);	
		System.out.println("accountMap2 =>" + accountMap);
		JSONParser parser = new JSONParser();
			JSONObject jsonob = (JSONObject) parser.parse(result);
			jsonob = (JSONObject) jsonob.get("data");

			HashMap<String, Object> add = new HashMap<>();
			add.put("jobIndex", Integer.parseInt(jsonob.get("jobIndex").toString()));
			add.put("threadIndex", Integer.parseInt(jsonob.get("threadIndex").toString()));
			add.put("jti",	jsonob.get("jti").toString());
			add.put("twoWayTimestamp", Long.parseLong(jsonob.get("twoWayTimestamp").toString()));
			accountMap.put("twoWayInfo",add);
			System.out.println("accountMap3 =>" + accountMap);
			//1. json 안에 값들을 넣어서 실험해봐라
			//2. 그게안되면 지갑에 계속 인증요청이 오는데, thread sleep를 해야하나? 잘 모르겠다.


		
//		  "simpleAuth": "[간편인증]",
//		  "is2Way": true,
//		  "twoWayInfo": {
//		    "jobIndex": 0,
//		    "threadIndex": 0,
//		    "jti": "db55392ae72a44efaa394",
//		    "twoWayTimestamp": 15650663
//			}
		
//			accountMap.put("data",result);
			Thread.sleep(20000);
			result = codef.requestCertification(productUrl, EasyCodefServiceType.DEMO, accountMap);

		
		System.out.println(result);
		
		
		HashMap<String, Object> resultMap2 = (HashMap<String, Object>)accountMap.get("result");
		
	} 
}
