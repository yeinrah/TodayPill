package com.todaypill.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.todaypill.db.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	User findOneByUserId(int userId);
	
	@Query(value = "select * from user where email = ?1", nativeQuery = true)
	User findOneByEmail(String email);
	
	@Modifying
	@Query(value = "update user set recommend_one = ?2, recommend_two = ?3, recommend_three = ?4 where email = ?1", nativeQuery = true)
	void updateRecommend(String email, String recoOne, String recoTwo, String recoThr);

}