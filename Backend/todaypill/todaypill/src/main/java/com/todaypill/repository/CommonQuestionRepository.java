package com.todaypill.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todaypill.db.entity.CommonQuestion;

@Repository
public interface CommonQuestionRepository extends JpaRepository<CommonQuestion, Integer>{
	
}
