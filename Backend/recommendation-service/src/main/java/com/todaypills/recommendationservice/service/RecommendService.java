package com.todaypills.recommendationservice.service;

import com.todaypills.recommendationservice.domain.Supplement;
import com.todaypills.recommendationservice.domain.UserInfo;
import com.todaypills.recommendationservice.dto.request.CreateUserInfoReq;
import com.todaypills.recommendationservice.dto.request.TypeUserWantReq;
import com.todaypills.recommendationservice.dto.response.RecommendSupplementRes;
import com.todaypills.recommendationservice.repository.SupplementRepository;
import com.todaypills.recommendationservice.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.regex.Pattern;

@Service
@Transactional
@RequiredArgsConstructor
public class RecommendService {
    static class Node {
        String name;
        int score;

        public Node(String name, int score) {
            this.name = name;
            this.score = score;
        }
    }

    List<Node> l = new ArrayList<>();

    CreateUserInfoReq createUserInfoReq = new CreateUserInfoReq(1L, "kmj9247@naver.com", "woman"
            , 26, 52F, false, false, false, "sometimes", "lackFish"
            , false, false, false, true, false, "", "stress/sleep");

    TypeUserWantReq typeUserWantReq = new TypeUserWantReq("magnesium", 10000D, 40000D, "memory_boost", "capsule", false);
    Supplement supplement1 = new Supplement(12L, "참조은 마그네슘", 28000D, "종근당", "", "magnesium bisglycinate, magnesium citrate", 5.5F, 1.5F, 0F, 2, "Stress_relief", "", 250F, 1F, "capsule", 1, false, "", 1.3);
    Supplement supplement2 = new Supplement(30L, "빛나는 마그네슘 영양제", 35000.0, "now food", "", "magnesium citrate, magnesium bisglycinate", 5.5F, 1.5F, 0F, 0, "Stress_relief", "", 250F, 1F, "chewable", 3, true, "shine magnesium", 1.8);
    LinkedList<Supplement> supplementLists = new LinkedList<>();
    supplementLists.add

    // 예시로 속성 하나

    int score = 0;
    for (Supplement supplement :supplementLists)    {
        if (typeUserWantReq.getLowerPriceLimit() < supplement.getPrice() && typeUserWantReq.getUpperPriceLimit() > supplement.getPrice()) {

            //String p = String.format("(%s|%s)", supplement.supplementKName, supplement.supplementEName);
            //if (Pattern.matches(p, "bisglycinate")) {
            score += (createUserInfoReq.getPreferredBrand().equals(supplement.getBrand()) ? 3 : 0)
                    + supplement.getBioavailability()
                    + (createUserInfoReq.getConstipation() ? supplement.getLaxative() : 0)
                    + (createUserInfoReq.getKidneyDisease() ? supplement.getKidneyDisease() : 0)
                    + supplement.getConsumerLabScore()
                    + (supplement.getAdditionalEfficacy().contains(typeUserWantReq.getAdditionalEfficacy()) ? 3 : 0)
                    + (createUserInfoReq.getIsOkBigPill() && supplement.getRequiredCount() == 1F ? 3 : -3)
                    + (!createUserInfoReq.getIsOkBigPill() ? supplement.getPillSize() : 0)
                    + (typeUserWantReq.getFomula().equals(supplement.getFormula()) ? 3 : 0)
                    + (typeUserWantReq.getSustainedRelease() && supplement.getSustainedRelease() ? 3 : 0)
            //}
        }
        l.add(new Node(supplement.getSupplementName(), score));


        l.sort((o1, o2) -> o2.score - o1.score);
        for (int i = 0; i < 20; i++) {
            Node n = l.get(i);
            System.out.println(n.name + ":: " + n.score);
        }
    }

    private final SupplementRepository supplementRepository;
    private final UserInfoRepository userInfoRepository;


//    /*추천받은 영양제를 가져오기*/
//    public RecommendSupplementRes getSupplementsRecommended(long supplementId) {
//
//        Supplement supplement = supplementRepository.findSupplementBySupplementId(supplementId);
//        return RecommendSupplementRes.builder()
//                .supplement_id(supplement.getSupplementId())
//                .supplement_name(supplement.getSupplementName())
//                .price(supplement.getPrice())
//                .brand(supplement.getBrand())
//                .image(supplement.getImage())
//                .ingredients(supplement.getIngredients())
//                .additional_efficacy(supplement.getAdditionalEfficacy())
//                .amount(supplement.getAmount())
//                .required_count(supplement.getRequiredCount())
//                .build();
//    }

//    /*유저 정보 등록*/
//    public void postUserInfo(CreateUserInfoReq createUserInfoReq) {
//        UserInfo userInfo = UserInfo.builder()
//                .userId(createUserInfoReq.getUserId())
//                .email(createUserInfoReq.getEmail())
//                .gender(createUserInfoReq.getGender())
//                .age(createUserInfoReq.getAge())
//                .weight(createUserInfoReq.getWeight())
//                .smoking(createUserInfoReq.getSmoking())
//                .pregnant(createUserInfoReq.getPregnant())
//                .allergy(createUserInfoReq.getAllergy())
//                .outDoorActivity(createUserInfoReq.getOutDoorActivity())
//                .balancedMeal(createUserInfoReq.getBalancedMeal())
//                .isOkBigPill(createUserInfoReq.getIsOkBigPill())
//                .disease(createUserInfoReq.getDisease())
//                .preferredBrand(createUserInfoReq.getPreferredBrand())
//                .problem(createUserInfoReq.getProblem())
//                .build();
//    }

}
