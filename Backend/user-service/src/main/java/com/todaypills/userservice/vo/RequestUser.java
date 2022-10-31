package com.todaypills.userservice.vo;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

import java.lang.annotation.Native;

@Data
public class RequestUser {

    @NotNull(message = "이메일을 입력하세요.")
    @Size(min = 10, message = "이메일이 너무 짧습니다.")
    @Email
    private String email;

    @NotNull(message = "이름을 입력하세요.")
    @Size(min = 2, message = "성을 포함한 이름을 입력하세요.")
    private String name;

    @NotNull(message = "비밀번호를 입력하세요.")
    @Size(min = 4, message = "네자리 이상의 비밀번호를 입력하세요.")
    private String pwd;
}
