package com.todaypills.userservice.vo;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * 사용자가 로그인할 때 입력한 데이터
 * */
@Data
public class RequestLogin {
    @NotNull(message = "이메일을 입력하세요.")
    @Size(min = 2, message = "이메일이 너무 짧습니다.")
    @Email
    private String email;

    @NotNull(message = "비밀번호를 입력하세요.")
    @Size(min = 4, message = "네자리 이상의 비밀번호를 입력하세요.")
    private String password;
}
