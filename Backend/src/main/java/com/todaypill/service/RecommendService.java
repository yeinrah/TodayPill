package com.todaypill.service;


import com.todaypill.db.entity.CommonQuestion;
import com.todaypill.db.entity.Supplement;
import com.todaypill.db.entity.User;
import com.todaypill.repository.CommonQuestionRepository;
import com.todaypill.repository.SupplementRepository;
import com.todaypill.repository.UserRepository;
import com.todaypill.request.UserSecondSurveyReq;
import com.todaypill.response.SupplementAndScoreRes;

import net.bytebuddy.utility.privilege.GetSystemPropertyAction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import springfox.documentation.swagger2.mappers.ModelMapper;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@Transactional
public class RecommendService {

    @Autowired
    SupplementRepository supplementRepository;
    UserRepository userRepository;
    CommonQuestionRepository commonQuestionRepository;

    public RecommendService(SupplementRepository supplementRepository, UserRepository userRepository,
			CommonQuestionRepository commonQuestionRepository) {
		super();
		this.supplementRepository = supplementRepository;
		this.userRepository = userRepository;
		this.commonQuestionRepository = commonQuestionRepository;
	}




	public List<SupplementAndScoreRes> recommendSupplement(UserSecondSurveyReq userSecondSurveyReq){

            // commonquestion과 user 객체를 가져오면 된다
    		String email = userSecondSurveyReq.getEmail();
            User user = userRepository.findOneByEmail(email);
            CommonQuestion commonQuestion = commonQuestionRepository.findOneByUserId(user.getUserId());

            List<SupplementAndScoreRes> supplementAndScoreRes = new ArrayList<>();
            List<Supplement> supplementList = (List<Supplement>)supplementRepository.findAll();
            //List<Supplement> supplementList = (List<Supplement>) mapper.map(supplementRepository.findAll(), Supplement.class);
            double cnt = 0.0001;
            for (Supplement supplement :supplementList)    {
                double score = 0;
                Integer labScore = 0;
                String additionalEfficacy = "";
                if (userSecondSurveyReq.getLowerPriceLimit() < supplement.getPrice() && userSecondSurveyReq.getUpperPriceLimit() > supplement.getPrice() 
                	&& supplement.getCategory().contains(userSecondSurveyReq.getCategory())) {
                	
                    score = (commonQuestion.getPreferred_brand().equals(supplement.getBrand()) ? 3 : 0)
                            + supplement.getBioavailability()
                            + (commonQuestion.isConstipation() ? supplement.getLaxative() : 0)
                            + (commonQuestion.isKidney_disease() ? supplement.getKidneyDisease() : 0)
                            + (supplement.getConsumerLabScore() == null ? labScore : supplement.getConsumerLabScore())
                            + (supplement.getAdditionalEfficacy() != null && supplement.getAdditionalEfficacy().contains(userSecondSurveyReq.getAdditionalEfficacy()) ? 3 : 0)
                            + (commonQuestion.is_ok_big_pill() && supplement.getRequiredCount().contains("1") ? 3 : -3)
    //                        + (!userInfoRes.getCommonQuestion().isOkBigPill() ? supplement.getPillSize() : 0)
                            + (userSecondSurveyReq.getFormula().equals(supplement.getFormula()) ? 3 : 0)
                            + (userSecondSurveyReq.getSustainedRelease() && supplement.getSustainedRelease() ? 3 : 0);
                    //}
                }
                supplementAndScoreRes.add(new SupplementAndScoreRes(supplement.getSupplementId(),supplement.getCategory()
                        , supplement.getSupplementName(), supplement.getPrice(), supplement.getBrand(), supplement.getImage()
                        , supplement.getIngredients(), supplement.getBioavailability(), supplement.getLaxative(), supplement.getKidneyDisease()
                        , supplement.getConsumerLabScore(), supplement.getAdditionalEfficacy(), supplement.getNote(),supplement.getAmount()
                        , supplement.getRequiredCount(), supplement.getFormula(), supplement.getLike(),supplement.getSustainedRelease()
                        ,supplement.getPillSize(),supplement.getBestTime(), score));
                cnt+=0.0001;
                score+=cnt;
//                System.out.println(score);
            }
            supplementAndScoreRes.sort((o1, o2) -> {
//            	if(o1.getScore() == o2.getScore()) return 1;
//            	System.out.println((int)(o2.getScore() - o1.getScore()));
//            	return (int) (o2.getScore()  - o1.getScore());});
            	
            	int a =o2.getScore().intValue();
            	int b = o1.getScore().intValue();
            return a-b;
//            	return 1;
            });
            //[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,]
            List<SupplementAndScoreRes> list = new ArrayList();
            for(int i=0; i<10;i++) {
            	list.add(supplementAndScoreRes.get(i));
            }
            return list;
    }
//    userInfoRes.getCommonQuestion() userInfoRes.getCommonQuestion() = new userInfoRes.getCommonQuestion()(1L, "kmj9247@naver.com", "woman"
//            , 26, 52F, false, false, false, "sometimes", "lackFish"
//            , false, false, false, true, false, "", "stress/sleep");
//
//    TypeUserWantReq typeUserWantReq = new TypeUserWantReq("magnesium", 10000D, 40000D, "memory_boost", "capsule", false);
//    Supplement supplement1 = new Supplement(12L, "참조은 마그네슘", 28000D, "종근당", "", "magnesium bisglycinate, magnesium citrate", 5.5F, 1.5F, 0F, 2, "Stress_relief", "", 250F, 1F, "capsule", 1, false, "", 1.3);
//    Supplement supplement2 = new Supplement(30L, "빛나는 마그네슘 영양제", 35000.0, "now food", "", "magnesium citrate, magnesium bisglycinate", 5.5F, 1.5F, 0F, 0, "Stress_relief", "", 250F, 1F, "chewable", 3, true, "shine magnesium", 1.8);
//
}
