package com.todaypill.service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.todaypill.db.entity.CommonQuestion;
import com.todaypill.db.entity.Like;
import com.todaypill.db.entity.Supplement;
import com.todaypill.db.entity.User;
import com.todaypill.repository.CommonQuestionRepository;
import com.todaypill.repository.LikeRepository;
import com.todaypill.repository.SupplementRepository;
import com.todaypill.repository.UserRepository;
import com.todaypill.request.DetailHealthReq;
import com.todaypill.request.UpdateNameReq;
import com.todaypill.request.UserFirstSurveyReq;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	LikeRepository likeRepository;
	SupplementRepository supplementRepository;
	CommonQuestionRepository commonQuestionRepository;
	
	
	
	public UserService(UserRepository userRepository, LikeRepository likeRepository,
			SupplementRepository supplementRepository, CommonQuestionRepository commonQuestionRepository) {
		super();
		this.userRepository = userRepository;
		this.likeRepository = likeRepository;
		this.supplementRepository = supplementRepository;
		this.commonQuestionRepository = commonQuestionRepository;
	}
	//회원 등록
	@Transactional
	public boolean signup(String email, String name, int age, String gender) throws Exception {
		User user = userRepository.findOneByEmail(email);
//		System.out.println("이메일로 찾아보면 이런 값이 나옵니다."+user.getEmail());
		if (user == null) {
			User userinfo = User.builder().email(email).name(name).age(age).gender(gender).build();
			userRepository.save(userinfo);
			//객체가 넘어가면 회원가입 처음 한거
			System.out.println("builder하고 나면 이런 값이 나옵니다."+user);
			return true;
		} else {
			//null이 넘어가면 이미 있는 회원
			return false;
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
	public List<Like> getUserLike(int userId) throws Exception {
		List<Like> list = likeRepository.findAllByUserId(userId);
		return list;
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
	
	@Transactional
	public User findOneByUserId(int userId) throws Exception {
		User user = userRepository.findOneByUserId(userId);
		return user;
	}
	
	@Transactional
	public void updateName(UpdateNameReq updateNameReq) throws Exception {
		userRepository.updateName(updateNameReq.getUserId(), updateNameReq.getName());
	}
	
	@Transactional
	public String[] userFirstSurvey(UserFirstSurveyReq userFirstSurveyReq) throws Exception {
		
		int vitaminB=0;
		int vitaminC=0;
		int vitaminD=0;
		int multivitamin=0;
		int magnesium=0;
		int omega3=0;
		int milkcistle=0;
		int lutain=0;
		int Zn=0;
		int lactobacillus=0;
		int collagen=0;
		int Fe=0;
		int profolis=0;
		//밥 잘 먹고 있는지 -> boolean이면 뭘잘먹고있는지를 판단하기 힘듦
		if(userFirstSurveyReq.isBalanced_meal()) {}
		//이게 밥잘먹고있는지에 대한 string 받는곳
		if(userFirstSurveyReq.getLack().contains("")) {}
		
		//큰 약 잘 먹는지 -> 2차 설문용
		if(userFirstSurveyReq.is_ok_big_pill()) {}
		//변비가 있으면 -> 유산균 더하기
		if(userFirstSurveyReq.isConstipation()) {
			lactobacillus +=2;
		}
		//설사는 마그네슘 섭취를 줄여야 한다.
		if(userFirstSurveyReq.isDiarrhea()) {
			magnesium-=2;
		}
		//속쓰림은 비타민 A, C, E, 오메가 3
		if(userFirstSurveyReq.isHeartburn()) {
			omega3+=2;
			vitaminC+=2;
		}
		//신장에 비타민 C는 무리를 줄 수 있다. 비타민 D는 좋음 오메가3도
		if(userFirstSurveyReq.isKidney_disease()) {
			vitaminC-=2;
			vitaminD+=1;
			omega3+=1;
			
		}
		//임신했을 때 철분 , 종합비타민, 
		if(userFirstSurveyReq.isPregnant()) {
			Fe+=2;
			multivitamin+=2;
		}
		//흡연할 경우, 루테인이 안좋음
		if(userFirstSurveyReq.isSmoking()) {
			lutain-=2;
		}
		//무슨 알러지든 간에 항산화제인 비타민 C는 도움이 된다.
		if(userFirstSurveyReq.getAllergy().contains("")) {
			vitaminC+=2;
		}
		
		//선호하는 브랜드명 -> 2차설문용
		if(userFirstSurveyReq.getPreferred_brand().contains("")) {}
		//고민거리도 뭐 받아서 해주면 될듯(버튼으로 체크하는 형식) 피로감, 눈건강, 피부건강 등 이거는 사용자가 원하는 것이기 때문에 높은 +
		if(userFirstSurveyReq.getProblem().contains("")) {}
		//햇빛 많이쬐면 쬔 만큼 비타민D 변수 조절
		if(userFirstSurveyReq.getOutdoor_activity()==1)vitaminD+=2;
		else if(userFirstSurveyReq.getOutdoor_activity()==2)vitaminD+=1.5;
		else if(userFirstSurveyReq.getOutdoor_activity()==3)vitaminD+=1;
		else if(userFirstSurveyReq.getOutdoor_activity()==4)vitaminD+=0.5;
		
		Map<String,Integer> map = new HashMap<String, Integer>();
		map.put("비타민 B", vitaminB);
		map.put("비타민 C", vitaminC);
		map.put("비타민 D", vitaminD);
		map.put("종합비타민", multivitamin);
		map.put("마그네슘", magnesium);
		map.put("오메가-3", omega3);
		map.put("밀크시슬", milkcistle);
		map.put("루테인", lutain);
		map.put("아연", Zn);
		map.put("유산균", lactobacillus);
		map.put("콜라겐", collagen);
		map.put("철분", Fe);
		map.put("프로폴리스", profolis);
		List<Map.Entry<String, Integer>> list = new ArrayList(map.entrySet());
		list.sort(new Comparator<Map.Entry<String, Integer>>() {
			@Override
			public int compare(Entry<String, Integer> o1, Entry<String, Integer> o2) {
				return o2.getValue() - o1.getValue();
			}
		});
		String[] arr = new String[3];
		for(int i=0; i<3;i++) {
			System.out.println("key =>"+(list.get(i)).getKey()+"    value =>"+(list.get(i)).getValue());
			arr[i]=(list.get(i)).getKey();
		}
		System.out.println("알러지 길이 =>"+userFirstSurveyReq.getAllergy());
		CommonQuestion cq = CommonQuestion.builder().allergy(userFirstSurveyReq.getAllergy()).
				balanced_meal(userFirstSurveyReq.isBalanced_meal()).
				constipation(userFirstSurveyReq.isConstipation()).diarrhea(userFirstSurveyReq.isDiarrhea()).
				heartburn(userFirstSurveyReq.isHeartburn()).is_ok_big_pill(userFirstSurveyReq.is_ok_big_pill())
				.kidney_disease(userFirstSurveyReq.isKidney_disease()).lack(userFirstSurveyReq.getLack()).
				preferred_brand(userFirstSurveyReq.getPreferred_brand())
				.pregnant(userFirstSurveyReq.isPregnant()).problem(userFirstSurveyReq.getProblem()).
				outdoor_activity(userFirstSurveyReq.getOutdoor_activity()).smoking(userFirstSurveyReq.isSmoking())
				.userId(userFirstSurveyReq.getUserId())
				.build();
		commonQuestionRepository.save(cq);
		return arr;
	}
	
	@Transactional
	public void insertDetail(DetailHealthReq detailHealthReq) throws Exception {
		CommonQuestion cq = CommonQuestion.builder().allergy(null).
				balanced_meal(false).
				constipation(false).diarrhea(false).
				heartburn(false).is_ok_big_pill(detailHealthReq.getPillSize())
				.kidney_disease(false).lack(null).
				preferred_brand(detailHealthReq.getBrand())
				.pregnant(false).problem(null).
				outdoor_activity(0).smoking(false)
				.userId(detailHealthReq.getUserId())
				.build();
		commonQuestionRepository.save(cq);
	}
	
	@Transactional
	public void patchGender(String email, String gender) throws Exception {
		userRepository.patchGender(gender, email);
	}
}
