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
	
	@ApiModelProperty(name = "흡연 여부", example = "true")
	@NotNull(message = "흡연 여부 입력하세요.")
	private boolean smoking;
	
	@ApiModelProperty(name = "임신 여부", example = "true")
	@NotNull(message = "임신 여부 입력하세요.")
	private boolean pregnant;
	
	@ApiModelProperty(name = "알러지 개수", example = "꽃가루")
	@NotNull(message = "알러지 입력하세요.")
	private String allergy;
	
	@ApiModelProperty(name = "속쓰림", example = "true")
	@NotNull(message = "속쓰림 입력하세요.")
	private boolean heartburn;
	
	@ApiModelProperty(name = "설사 여부", example = "true")
	@NotNull(message = "설사 여부 입력하세요.")
	private boolean diarrhea;
		
	@ApiModelProperty(name = "변비 여부", example = "true")
	@NotNull(message = "변비 여부 입력하세요.")
	private boolean constipation;
	
	@ApiModelProperty(name = "신장 질환 여부", example = "true")
	@NotNull(message = "신장 질환 입력하세요.")
	private boolean kidney_disease;
	
	@ApiModelProperty(name = "바깥활동 여부", example = "2")
	@NotNull(message = "바깥활동 여부 입력하세요.")
	private Integer outdoor_activity;
	
	@ApiModelProperty(name = "균형식사 여부", example = "true")
	@NotNull(message = "균형식사 입력하세요.")
	private boolean balanced_meal;
	
	@ApiModelProperty(name = "뭐가 부족한지", example = "눈건강")
	@NotNull(message = "뭐가 부족한지 입력하세요.")
	private String lack;
	
	@ApiModelProperty(name = "큰 알약은 괜찮은지", example = "false")
	@NotNull(message = "큰 알약은 괜찮은지 입력하세요.")
	private boolean is_ok_big_pill;
	
	@ApiModelProperty(name = "선호 브랜드 이름", example = "엔자이메디카")
	@NotNull(message = "선호 브랜드 이름 입력하세요.")
	private String preferred_brand;
	
	@ApiModelProperty(name = "고민거리", example = "배가 아파요")
	@NotNull(message = "고민거리 입력하세요.")
	private String problem;
	
}
