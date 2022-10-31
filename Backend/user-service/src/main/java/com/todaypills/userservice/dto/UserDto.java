package com.todaypills.userservice.dto;

import com.todaypills.userservice.vo.ResponseOrder;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class UserDto {
    private String email;
    private String name;
    private String pwd;
    private String userId; //auto increment 되는 PK
    private Date createdAt;
    private String decryptedPwd;

    private String encryptedPwd;

    private List<ResponseOrder> orders;

}
