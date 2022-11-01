package com.todaypill.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.todaypill.db.entity.Like;
import com.todaypill.db.entity.Supplement;
import com.todaypill.db.entity.User;
import com.todaypill.repository.LikeRepository;
import com.todaypill.repository.SupplementRepository;
import com.todaypill.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	LikeRepository likeRepository;
	SupplementRepository supplementRepository;
	
	
	
	public UserService(UserRepository userRepository, LikeRepository likeRepository,
			SupplementRepository supplementRepository) {
		super();
		this.userRepository = userRepository;
		this.likeRepository = likeRepository;
		this.supplementRepository = supplementRepository;
	}
	
	//회원 등록
	@Transactional
	public User signup(String email, String name, int age, String gender) throws Exception {
		User user = userRepository.findOneByEmail(email);
		if (user == null) {
			User userinfo = User.builder().email(email).name(name).age(age).gender(gender).build();
			userRepository.save(userinfo);
			//객체가 넘어가면 회원가입 처음 한거
			return user;
		} else {
			//null이 넘어가면 이미 있는 회원
			return null;
		}
	}
	@Transactional
	public void updateRecommend (String email, String recoOne, String recoTwo, String recoThr) throws Exception{
//		User user = userRepository.findOneByEmail(email);
		userRepository.updateRecommend(email, recoOne, recoTwo, recoThr);
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
	public User findOneByEmail(String email) throws Exception {
		User user = userRepository.findOneByEmail(email);
		return user;
	}
	
}
