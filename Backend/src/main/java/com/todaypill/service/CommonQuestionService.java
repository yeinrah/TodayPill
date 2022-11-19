package com.todaypill.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.todaypill.db.entity.CommonQuestion;
import com.todaypill.repository.CommonQuestionRepository;

@Service
public class CommonquestionService {

	@Autowired
	CommonQuestionRepository commonQuestionRepository;

	public CommonquestionService(CommonQuestionRepository commonQuestionRepository) {
		super();
		this.commonQuestionRepository = commonQuestionRepository;
	}

	@Transactional
	public CommonQuestion findOneByUserId(int userId) {
		CommonQuestion cq = commonQuestionRepository.findOneByUserId(userId);
		return cq;
	}
}
