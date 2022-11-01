package com.todaypill.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.todaypill.db.entity.Supplement;

@Repository
public interface SupplementRepository extends JpaRepository<Supplement, Integer>{
	Supplement findOneBySupplementId(int supplementId);
	
	@Query(value = "update supplement set like =?2 where supplement_id= ?1", nativeQuery = true)
	void updateLike(int supplementId, int like);
}
