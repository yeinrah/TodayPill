package com.todaypills.recommendationservice.repository;

import com.todaypills.recommendationservice.domain.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {

    UserInfo findUserInfoByUserId(Long user_id);
}
