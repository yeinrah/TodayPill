package com.todaypill.service;

import java.io.IOException;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todaypill.db.entity.Propolis;
import com.todaypill.db.entity.Supplement;
import com.todaypill.repository.PropolisRepository;
import com.todaypill.repository.SupplementRepository;

@Service
public class PropolisService {
	@Autowired
	private SupplementRepository supplementRepository;

	@Autowired
	private PropolisRepository propolisRepository;

	public PropolisService(SupplementRepository supplementRepository, PropolisRepository propolisRepository) {
		super();
		this.supplementRepository = supplementRepository;
		this.propolisRepository = propolisRepository;
	}

	public void addPropolis() throws IOException, InterruptedException {
		// String supplementName, Double price, String brand, String image,
		// String ingredients, Integer bioavailability, Integer laxative,
		// Integer kidneyDisease, Integer consumerLabScore, String additionalEfficacy,
		// String note, Float amount, Float requiredCount, String formula, Integer like,
		// Boolean sustainedRelease

		List<Propolis> list = propolisRepository.findAll();
		for (Propolis m : list) {
			String supplementName = m.getName();
			String[] ps = m.getPrice().split(",");
			Double price = Double.parseDouble(ps[0].concat(ps[1]));
			String brand = supplementName.split(",")[0];
			String image = m.getImg();
			String ingredients = m.getNutrition();

			// 여기서부터 점수 계산
			int cnt = 0;
			Double bioavailability = (double) 0;
			Double laxative = (double) 0;
			Double kidneyDisease = (double) 0;
			StringBuilder sb = new StringBuilder();
			Set<String> set = new LinkedHashSet<String>();

			if (cnt != 0) {
				bioavailability = (double) Math.round(bioavailability / cnt * 10) / 10.0;
				laxative = (double) Math.round(laxative / cnt * 10) / 10.0;
				kidneyDisease = (double) Math.round(kidneyDisease / cnt * 10) / 10.0;
			}

			Integer consumerLabScore = 0;

			for (String s : set) {
				sb.append(s);
				sb.append(", ");
			}

			String additionalEfficacy = sb.toString();
			if (sb.length() > 0)
				additionalEfficacy = sb.toString().substring(0, sb.length() - 2);
			String note = "";
			String[] detail = m.getName().split(", ");
			String amount = detail[detail.length - 1];
			String requiredCount = m.getServing();
			String formula = "capsule";
			if (amount.contains("ml") || requiredCount.contains("ml"))
				formula = "liquid";
			if (amount.contains("젤리"))
				formula = "chewable";
			if (amount.contains("g") || requiredCount.contains("g"))
				formula = "powder";
			if (supplementName.contains("스프레이"))
				formula = "spray";
			Integer like = 0;
			Boolean sustainedRelease = false;
			if (m.getName().contains("서방형") || m.getName().contains("리포솜") || m.getName().contains("리포소말")
					|| m.getName().contains("sustained") || m.getName().contains("timed"))
				sustainedRelease = true;
			Supplement supplement = Supplement.builder().supplementName(supplementName).price(price).brand(brand)
					.image(image).ingredients(ingredients).bioavailability(bioavailability).laxative(laxative)
					.kidneyDisease(kidneyDisease).consumerLabScore(consumerLabScore)
					.additionalEfficacy(additionalEfficacy).note(note).amount(amount).requiredCount(requiredCount)
					.formula(formula).like(like).sustainedRelease(sustainedRelease).build();
			supplementRepository.save(supplement);
		}
	}
}
