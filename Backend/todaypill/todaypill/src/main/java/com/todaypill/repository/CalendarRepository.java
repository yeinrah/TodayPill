package com.todaypill.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.todaypill.db.entity.Calendar;

@Repository
public interface CalendarRepository extends JpaRepository<Calendar, Integer>{
	@Query(value = "select * from `calendar` where user_id = ?1 and date like -?2-", nativeQuery = true)
	List<Calendar> findAllByMonth(int userId, String month);
	
	@Query(value = "delete from `calendar` where routine_id = ?1 and date = ?2", nativeQuery = true)
	void deleteCalendar(int routineId, String date);
}
