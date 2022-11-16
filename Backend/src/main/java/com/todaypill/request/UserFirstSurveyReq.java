package com.todaypill.request;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserFirstSurveyReq")
public class UserFirstSurveyReq {


	@ApiModelProperty(name = "유저 id", example = "1")
	@NotNull(message = "user id를 입력하세요.")
	private Integer userId;

	@ApiModelProperty(name = "임신 여부", example = "true")
	@NotNull(message = "임신 여부 입력하세요.")
	private boolean pregnant;

	@ApiModelProperty(name = "흡연 여부", example = "true")
	@NotNull(message = "흡연 여부 입력하세요.")
	private boolean smoking;

	@ApiModelProperty(name = "음주 횟수", example = "true")
	@NotNull(message = "음주 횟수 입력하세요.")
	private Integer drinking;
	
	@ApiModelProperty(name = "알러지 종류", example = "꽃가루 등")
	@NotNull(message = "알러지 입력하세요.")
	private String allergy;

	@ApiModelProperty(name = "야외활동 횟수", example = "true")
	@NotNull(message = "야외활동 횟수 입력하세요.")
	private Integer outdoor_activity;

	@ApiModelProperty(name = "균형식사 여부", example = "true")
	@NotNull(message = "균형식사 입력하세요.")
	private boolean balanced_meal;

	@ApiModelProperty(name = "뭐가 부족한지", example = "눈건강")
	@NotNull(message = "뭐가 부족한지 입력하세요.")
	private String lack;

	@ApiModelProperty(name = "큰 알약 불편함 여부", example = "true")
	@NotNull(message = "큰 알약을 삼키기 불편한지 입력하세요.")
	private boolean is_ok_big_pill;

	@ApiModelProperty(name = "속쓰림", example = "true")
	@NotNull(message = "속쓰림 입력하세요.")
	private boolean heartburn;

	@ApiModelProperty(name = "변비 여부", example = "true")
	@NotNull(message = "변비 여부 입력하세요.")
	private boolean constipation;

	@ApiModelProperty(name = "설사 여부", example = "true")
	@NotNull(message = "설사 여부 입력하세요.")
	private boolean diarrhea;

	@ApiModelProperty(name = "소화 장애 여부", example = "true")
	@NotNull(message = "소화 장애 여부 입력하세요.")
	private boolean digestiveDisorder;

	@ApiModelProperty(name = "편두통 여부" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean migraine;

	@ApiModelProperty(name = "요통 여부" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean  backache;

	@ApiModelProperty(name = "과민성 대장 증후군" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean bowelSyndrome;

	@ApiModelProperty(name = "아토피 여부" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean atopy;

	@ApiModelProperty(name = "비듬" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean dandruff;

	@ApiModelProperty(name = "구내염" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean stomatitis;

	@ApiModelProperty(name = "다리 경련" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean lagCramp;

	@ApiModelProperty(name = "빈혈" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean anemia;

	@ApiModelProperty(name = "갑상선 질환" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean thyroidDisease;

	@ApiModelProperty(name = "신장 질환 여부", example = "true")
	@NotNull(message = "신장 질환 입력하세요.")
	private boolean kidney_disease;

	@ApiModelProperty(name = "당뇨병" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean diabetes;

	@ApiModelProperty(name = "통풍" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean gouty;

	@ApiModelProperty(name = "고혈압약" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean high_blood_pressure;

	@ApiModelProperty(name = "고지혈증" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean hyperlipidemia;

	@ApiModelProperty(name = "치주염" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean periodontitis;

	@ApiModelProperty(name = "심부전" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean heartFailure;

	@ApiModelProperty(name = "피임약" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean contraceptive;

	@ApiModelProperty(name = "제산제" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean antacid;

	@ApiModelProperty(name = "혈압약" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean bloodPressureMedicine;

	@ApiModelProperty(name = "이뇨제" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean diuretic;

	@ApiModelProperty(name = "소타롤(부정맥약)" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean sotalol;

	@ApiModelProperty(name = "가바펜틴(항경련제)" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean gabapentin;

	@ApiModelProperty(name = "레보티록신(갑상선 호르몬 결핍 치료제)" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean levothyroxine;

	@ApiModelProperty(name = "항생제" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean antibiotics;

	@ApiModelProperty(name = "격렬한 신체 활동" , example = "true")
	@NotNull(message = "입력하세요")
	private boolean physicalActivity;
	
	@ApiModelProperty(name = "선호 브랜드 이름", example = "엔자이메디카")
	@NotNull(message = "선호 브랜드 이름 입력하세요.")
	private String preferred_brand;
	
	@ApiModelProperty(name = "고민거리", example = "배가 아파요")
	@NotNull(message = "고민거리 입력하세요.")
	private String problem;
	
}
