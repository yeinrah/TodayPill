package com.todaypill.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.todaypill.db.entity.Like;
import com.todaypill.db.entity.Routine;
import com.todaypill.db.entity.Supplement;
import com.todaypill.db.entity.User;
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
	private SupplementRepository supplementRepository;

	public MyPageService(UserRepository userRepository, LikeRepository likeRepository,
			RoutineRepository routineRepository, SupplementRepository supplementRepository) {
		super();
		this.userRepository = userRepository;
		this.likeRepository = likeRepository;
		this.routineRepository = routineRepository;
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
	public Like insertLike(int userId, int supplementId) throws Exception {
		Like like = Like.builder().userId(userId).supplementId(supplementId).build();
		// 기존 영양제의 찜 값 가져오기
		Supplement supplement = supplementRepository.findOneBySupplementId(supplementId);
		int likeNum = supplement.getLike();
		// 영양제에 찜 1 추가하기
		supplementRepository.updateLike(supplementId, likeNum + 1);
		return likeRepository.save(like);
	}

	@Transactional
	public void deleteLike(int userId, int supplementId) throws Exception {
		// 기존 영양제의 찜 값 가져오기
		Supplement supplement = supplementRepository.findOneBySupplementId(supplementId);
		int likeNum = supplement.getLike();
		// 영양제의 찜 1 감소
		List<Like> list = likeRepository.likeClickOrNot(userId, supplementId);
		if (list.size() != 0) {
			likeRepository.delete(list.get(0));
			supplementRepository.updateLike(supplementId, likeNum - 1);
		}
	}

	@Transactional
	public List<Integer> likeListOfSupplement(int supplementId) throws Exception {
		List<Like> list = likeRepository.findAllBySupplementId(supplementId);
		List<Integer> UserIdList = new ArrayList<>();
		for (int i = 0; i < list.size(); i++) {
			UserIdList.add(list.get(i).getUserId());
		}
		return UserIdList;
	}

	@Transactional
	public Routine insertRoutine(Routine routine) throws Exception {
		return routineRepository.save(routine);
	}

	@Transactional
	public void deleteRoutine(int routineId) throws Exception {
		Routine routine = routineRepository.findOneByRoutineId(routineId);
		routineRepository.delete(routine);
	}
	
	@Transactional
	public void updateRoutine(int routineId, Routine routine) throws Exception {
		Routine originalRoutine = routineRepository.findOneByRoutineId(routineId);
		originalRoutine.setTime(routine.getTime());
		originalRoutine.setDay(routine.getDay());
		originalRoutine.setTablets(routine.getTablets());
		routineRepository.save(originalRoutine);
	}
}
