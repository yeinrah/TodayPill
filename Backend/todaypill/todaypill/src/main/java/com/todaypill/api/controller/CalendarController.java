package com.todaypill.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todaypill.db.entity.Calendar;
import com.todaypill.db.entity.Routine;
import com.todaypill.service.MyPageService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/api/calendar")
public class CalendarController {

	@Autowired
	private MyPageService myPageService;

	public CalendarController(MyPageService myPageService) {
		super();
		this.myPageService = myPageService;
	}

	@GetMapping("/{userId}")
	@ApiOperation(value = "유저의 캘린더에 접근한다.", notes = "user id, month(String) 필요")
	public ResponseEntity<?> calendar(@PathVariable int userId, @PathVariable String month) {
		List<Calendar> calendarList = myPageService.getCalendarList(userId, month);
		return new ResponseEntity<>(calendarList, HttpStatus.OK);
	}

	@GetMapping("/{userId}/{date}")
	@ApiOperation(value = "특정 일자 캘린더에 접근한다.", notes = "user id, date, day(String, 요일 숫자) 필요")
	public ResponseEntity<?> myDate(@PathVariable int userId, @PathVariable String day) throws Exception {
		List<Routine> list = myPageService.getRoutineListByDay(userId, day);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@PatchMapping("/{userId}/{date}")
	@ApiOperation(value = "복용 데이터를 기록한다.", notes = "user id, date(String) 필요")
	public ResponseEntity<?> insertCalendar(@PathVariable int userId, @RequestBody Calendar calendar) {
		myPageService.insertCalendar(calendar);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/{userId}/{date}")
	@ApiOperation(value = "복용 데이터를 삭제한다.", notes = "user id, date(String) 필요")
	public ResponseEntity<?> deleteCalendar(int routineId, String date) {
		myPageService.deleteCalendar(routineId,date);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
