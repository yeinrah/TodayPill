package com.todaypill.db.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "commonquestion")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommonQuestion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private int userId;

	@Column(name = "pregnant")
	private boolean pregnant;

	@Column(name = "smoking")
	private boolean smoking;

	@Column(name = "drinking")
	private Integer drinking; //한달에 1~2회 / 일주일에 1~2회 / 일주일에 3회 이상 각 1, 3, 6점으로
	
	@Column(name = "allergy")
	private String allergy; // 꽃가루/허브/꿀/벌/생선/계란

	@Column(name = "outdoor_activity")
	private Integer outdoor_activity; // (충분한 양의 햇볕을 쬔다 / 종종 햇볕을 쬔다 / 거의 햇볕을 쬐지 않는다 ) 각 1, 3, 6점으로

	@Column(name = "balanced_meal")
	private boolean balanced_meal; //아니오를 선택했다면 채소/생선/과일/육류 버튼으로 중복선택 가능하게끔

	@Column(name = "lack")
	private String lack; // lackFish, lackVeg, lackFruit, lackMeat

	@Column(name = "is_ok_big_pill")
	private boolean is_ok_big_pill;

	/* 다음 중 해당하는 증상이 있다면 선택해주세요.
	-중복선택 (속쓰림 / 변비 / 설사 / 소화장애 / 요통 / 편두통 / 과민성 대장 증후군 / 아토피 피부염 / 비듬 / 야간 다리 경련 / 구내염)*/
	@Column(name = "heartburn")
	private boolean heartburn; //속쓰림

	@Column(name = "constipation")
	private boolean constipation; //변비

	@Column(name = "diarrhea")
	private boolean diarrhea; // 설사
		
	@Column(name = "digestive_disorder")
	private boolean digestiveDisorder; // 소화장애

	@Column(name = "migraine")
	private boolean migraine; //편두통

	@Column(name = "backache")
	private boolean backache; //요통

	@Column(name = "bowel_syndrome")
	private boolean bowelSyndrome; // 과민성 대장 증후군

	@Column(name = "atopy")
	private boolean atopy; // 아토피

	@Column(name = "dandruff")
	private boolean dandruff; // 비듬

	@Column(name = "stomatitis")
	private boolean  stomatitis; // 구내염

	@Column(name = "leg_cramp")
	private boolean legCramp; // 다리 경련

	/*다음 중 해당하는 질환을 앓고 계시다면 선택해주세요.
	-중복선택 ( 빈혈 / 갑상선 질환 / 신장 질환 / 당뇨병 / 통풍 / 고혈압 / 고지혈증 / 치주염 / 심부전)*/
	@Column(name = "anemia")
	private boolean anemia; // 빈혈

	@Column(name = "thyroid_disease")
	private boolean thyroidDisease; // 갑상선 질환

	@Column(name = "kidney_disease")
	private boolean kidney_disease; // 신장 질환

	@Column(name = "diabetes")
	private boolean diabetes; // 당뇨병

	@Column(name = "gouty")
	private boolean gouty; //통풍

	@Column(name = "high_blood_pressure")
	private boolean highBloodPressure; //혈압약

	@Column(name = "hyperlipidemia")
	private boolean hyperlipidemia; //고지혈증

	@Column(name = "periodontitis")
	private boolean periodontitis; //치주염

	@Column(name = "heart failure")
	private boolean heartFailure; //심부전

	/*10. 다음 중 복용중인 약이 있으시다면 선택해주세요.
	-중복선택 (피임약 / 제산제 / 혈압약 / 이뇨제 / 소타롤(부정맥) / 가바펜틴(항경련제) / 레보티록신(갑상선) / 항생제)*/

	@Column(name = "contraceptive")
	private boolean contraceptive; //피임약

	@Column(name = "antacid")
	private boolean antacid; //제산제

	@Column(name = "blood pressure medicine")
	private boolean bloodPressureMedicine; //혈압약

	@Column(name = "diuretic")
	private boolean diuretic; //이뇨제

	@Column(name = "sotalol")
	private boolean sotalol; //소타롤(부정맥약)

	@Column(name = "gabapentin")
	private boolean  gabapentin; //가바펜틴(항경련제)

	@Column(name = "levothyroxine")
	private boolean levothyroxine; //레보티록신(갑상선 호르몬 결핍 치료제)

	@Column(name = "antibiotics")
	private boolean antibiotics; //항생제
	
	@Column(name = "physical_activity")
	private boolean physicalActivity; //격렬한 신체 활동
	
	@Column(name = "preferred_brand")
	private String preferred_brand;

	/*11. 영양제로 해결하고 싶은 증상을 선택해주세요.
	-중복선택 ( 면역력 개선 / 암, 심혈관 질환 예방 / 치매 예방 / 식후 혈당 관리 / 콜레스테롤 수치 개선 / 관절 통증
			/ 뼈 건강 / 간 건강 / 우울감 / PMS, 월경통 / 빈혈 /  수면 / 눈 건강 / 청력 보호 / 주름 개선 / 모발 건강  ) */

	@Column(name = "problem")
	private String problem;

}

