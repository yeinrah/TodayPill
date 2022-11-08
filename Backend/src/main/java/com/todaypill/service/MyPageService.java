package com.todaypill.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.todaypill.db.entity.Calendar;
import com.todaypill.db.entity.Like;
import com.todaypill.db.entity.Routine;
import com.todaypill.db.entity.User;
import com.todaypill.repository.CalendarRepository;
import com.todaypill.repository.LikeRepository;
import com.todaypill.repository.RoutineRepository;
import com.todaypill.repository.SupplementRepository;
import com.todaypill.repository.UserRepository;

@Service
public class MyPageService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private LikeRepository likeRepository;

	@Autowired
	private RoutineRepository routineRepository;
	
	@Autowired
	private CalendarRepository calendarRepository;

	@Autowired
	private SupplementRepository supplementRepository;

	public MyPageService(UserRepository userRepository, LikeRepository likeRepository,
			RoutineRepository routineRepository, CalendarRepository calendarRepository,
			SupplementRepository supplementRepository) {
		super();
		this.userRepository = userRepository;
		this.likeRepository = likeRepository;
		this.routineRepository = routineRepository;
		this.calendarRepository = calendarRepository;
		this.supplementRepository = supplementRepository;
	}

	@Transactional
	public List<Like> getLikeList(int userId) {
		List<Like> list = likeRepository.findAllByUserId(userId);
		return list;
	}

	@Transactional
	public User getUser(int userId) {
		User user = userRepository.findOneByUserId(userId);
		return user;
	}

	@Transactional
	public List<Routine> getRoutineList(int userId) {
		List<Routine> list = routineRepository.findAllByUserId(userId);
		return list;
	}
	
	@Transactional
	public List<Routine> getRoutineListByDay(int userId, String day) {
		List<Routine> list = routineRepository.findAllByUserIdAndDay(userId, day);
		return list;
	}
	
	@Transactional
	public List<Calendar> getCalendarList(int userId, String month) {
		List<Calendar> list = calendarRepository.findAllByMonth(userId, month);
		return list;
	}
	
	@Transactional
	public Calendar insertCalendar(Calendar calendar) {
		return calendarRepository.save(calendar);
	}

	@Transactional
	public void deleteCalendar(int routineId, String date) {
		calendarRepository.deleteCalendar(routineId, date);
	}
	
	@Transactional
	public Routine insertRoutine(Routine routine) {
		return routineRepository.save(routine);
	}

	@Transactional
	public void deleteRoutine(int routineId) {
		Routine routine = routineRepository.findOneByRoutineId(routineId);
		routineRepository.delete(routine);
	}
	
	@Transactional
	public void updateRoutine(int routineId, Routine routine) {
		Routine originalRoutine = routineRepository.findOneByRoutineId(routineId);
		originalRoutine.setTime(routine.getTime());
		originalRoutine.setDay(routine.getDay());
		originalRoutine.setTablets(routine.getTablets());
		routineRepository.save(originalRoutine);
	}
}
