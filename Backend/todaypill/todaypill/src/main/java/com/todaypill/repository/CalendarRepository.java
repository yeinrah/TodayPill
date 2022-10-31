package com.todaypill.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todaypill.db.entity.Calendar;

@Repository
public interface CalendarRepository extends JpaRepository<Calendar, Integer>{
	Calendar findOneByDay(int day);
}
