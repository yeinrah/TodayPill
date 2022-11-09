package com.todaypill.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.todaypill.db.entity.CommonQuestion;

@Repository
public interface CommonQuestionRepository extends JpaRepository<CommonQuestion, Integer>{
    @Query(value = "select * from commonquestion where user_id = ?1", nativeQuery = true)
    CommonQuestion findOneByUserId(Integer userId);
}
