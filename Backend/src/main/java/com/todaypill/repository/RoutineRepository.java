package com.todaypill.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.todaypill.db.entity.Routine;

@Repository
public interface RoutineRepository extends JpaRepository<Routine, Integer>{
	List<Routine> findAllByUserId(int userId);
	
	@Query(value = "select * from `routine` where user_id = ?1 and day like %?2%", nativeQuery = true)
	List<Routine> findAllByUserIdAndDay(int userId, String day);
	
	Routine findOneByRoutineId(int routineId);
	
	@Modifying
	@Query(value = "update `routine` set deleted_since = ?2 where routine_id = ?1", nativeQuery = true)
	void updateRoutineVisibility(int routineId, String deletedSince);
}
