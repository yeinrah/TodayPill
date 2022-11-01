package com.todaypill.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.todaypill.db.entity.User;
import com.todaypill.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
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

	
}
