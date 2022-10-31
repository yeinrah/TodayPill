package com.todaypill.api.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todaypill.db.entity.Like;
import com.todaypill.db.entity.Routine;
import com.todaypill.db.entity.User;
import com.todaypill.request.RoutineReq;
import com.todaypill.service.MyPageService;

import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/api/mypage")
public class MyPageController {

	@Autowired
	private MyPageService myPageService;

	public MyPageController(MyPageService myPageService) {
		super();
		this.myPageService = myPageService;
	}

	@GetMapping("/{user_id}")
	@ApiOperation(value = "유저의 마이페이지에 접근한다.", notes = "user id 필요")
	public ResponseEntity<?> myPage(@PathVariable int userId) throws Exception {
		User user = myPageService.getUser(userId);
		List<Like> list = myPageService.getLikeList(userId);
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("user", user);
		map.put("likeList", list);
		return new ResponseEntity<>(map, HttpStatus.OK);
	}

	@GetMapping("/{user_id}/mysupplement")
	@ApiOperation(value = "유저가 복용하는 영양제 데이터에 접근한다.", notes = "user id 필요")
	public ResponseEntity<?> mySupplement(@PathVariable int userId) throws Exception {
		List<Routine> list = myPageService.getRoutineList(userId);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@PostMapping("/{user_id}/mysupplement")
	@ApiOperation(value = "유저가 복용하는 영양제 데이터를 추가한다.", notes = "user id, routine 필요")
	public ResponseEntity<?> insertSupplement(@PathVariable int userId, @RequestBody RoutineReq routineReq)
			throws Exception {
		Routine routine = Routine.builder().userId(routineReq.getUserId()).supplementId(routineReq.getSupplementId())
				.time(routineReq.getTime()).day(routineReq.getDay()).tablets(routineReq.getTablets()).build();
		myPageService.insertRoutine(routine);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@DeleteMapping("/{user_id}/mysupplement/{routine_id}")
	@ApiOperation(value = "유저가 복용하는 영양제 데이터를 삭제한다.", notes = "routine id 필요")
	public ResponseEntity<?> deleteSupplement(@PathVariable int routineId) throws Exception {
		myPageService.deleteRoutine(routineId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PutMapping("/{user_id}/mysupplement/{routine_id}")
	@ApiOperation(value = "유저가 복용하는 영양제 데이터를 수정한다.", notes = "routine id 필요")
	public ResponseEntity<?> updateSupplement(@PathVariable int routineId, @RequestBody RoutineReq routineReq) throws Exception {
		Routine routine = Routine.builder().userId(routineReq.getUserId()).supplementId(routineReq.getSupplementId())
				.time(routineReq.getTime()).day(routineReq.getDay()).tablets(routineReq.getTablets()).build();
		myPageService.updateRoutine(routineId, routine);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
