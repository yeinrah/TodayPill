package com.todaypills.userservice.service;

import com.todaypills.userservice.dto.UserDto;
import com.todaypills.userservice.jpa.UserEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

/**
 * spring security에서 제공하는 UserDetailService를 상속
 * */
public interface UserService extends UserDetailsService {
    UserDto createUser(UserDto userDto);

    UserDto getUserByUserId(String userId);
    Iterable<UserEntity> getUserByAll();

    UserDto getUserDetailsByEmail(String userName);
}
