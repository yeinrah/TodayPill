package com.todaypill.request;

import javax.validation.constraints.NotNull;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("RoutineReq")
public class RoutineReq {
	@ApiModelProperty(name = "유저 id", example = "1")
	@NotNull(message = "유저 id를 입력하세요.")
	private int userId;

	@ApiModelProperty(name = "영양제 id", example = "1")
	@NotNull(message = "영양제 id를 입력하세요.")
	private int supplementId;

	@ApiModelProperty(name = "시간", example = "08:30")
	@NotNull(message = "시간을 입력하세요.")
	private String time;

	@ApiModelProperty(name = "요일", example = "1")
	@NotNull(message = "요일을 입력하세요.")
	private int day;
	
	@ApiModelProperty(name = "개수", example = "2")
	@NotNull(message = "개수를 입력하세요.")
	private int tablets;
}
