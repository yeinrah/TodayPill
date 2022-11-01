package com.todaypill.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.todaypill.db.entity.Routine;

@Repository
public interface RoutineRepository extends JpaRepository<Routine, Integer>{
	List<Routine> findAllByUserId(int userId);
	
	Routine findOneByRoutineId(int routineId);
	
	@Query(value = "delete * from `routine` where routine_id = ?1", nativeQuery = true)
	void deleteRoutine(int routineId);
}