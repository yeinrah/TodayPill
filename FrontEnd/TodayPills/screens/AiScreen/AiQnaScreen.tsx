import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import AiQna from "../../components/AiPage/AiQna";
import BackgroundScreen2 from "../BackgroundScreen2";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export default function AiQnaScreen ({ navigation, route }: any) {
	const [randomImage, setRandomImage] = useState();
	const images = [
		require("../../assets/images/ai/face1.png"),
		require("../../assets/images/ai/face2.png"),
		require("../../assets/images/ai/face3.png"),
		require("../../assets/images/ai/face4.png"),
		require("../../assets/images/ai/face5.png"),
		require("../../assets/images/ai/face6.png"),
	]
	const datas = {
		"비타민 B" : [
			[
				"비타민 B의 종류가 너무 많아서\n뭘 먹어야 할지 모르겠어요.",
				"비타민 B군의 생체이용 메커니즘은 서로 밀접한 연관관계를 갖고 있습니다. 따라서 비타민 B군 중에서 단일 성분을 몇개 골라 섭취하는 것보다 B군 전체를 함유하고 있는 제품을 섭취하는 것이 좋습니다( ",
				["Kennedy, Nutrients 2016", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4772032/"],
				" ).",
			],
			[
				"우울감 해소에 비타민 B가 도움이 되나요?",
				"나이아신(B-3), 피리독신(B-6), 코발라민(B-12)의 결핍은 우울증을 유발할 수 있습니다. 미국의 한 연구에 따르면 혈중 B-12 수치가 정상 미만인 임산부(평균 249pg/mL)는 정상 수치(>300pg)보다 우울증을 겪을 가능성이 3.82배 더 높습니다(정상 평균 477pg/mL)( ",
				["Peppard, Res Nurs Health 2019", "https://www.ncbi.nlm.nih.gov/pubmed/31119757"],
				" ).\n\n",
				"뿐만 아니라 엽산(B9)은 항우울제 치료에 긍정적인 효과를 가져올 수 있습니다 ( ",
				["Taylor, J Psychopharmacol 2004", "https://www.ncbi.nlm.nih.gov/pubmed/15260915"],
				" ). 500mcg의 엽산을 매일 복용하면 SSRI 약물 플루옥세틴(Prozac)의 효과가 증가하는 것으로 나타났으며, Prozac 단독 치료에 비해 우울증 회복률이 25% 증가했습니다( ",
				["Coppen, J 영향 장애 2000", "http://www.jad-journal.com/article/S0165-0327(00)00153-1/abstract"],
				" ). 연구자들은 낮은 엽산 수치가 특정 항우울제(선택적 세로토닌 재흡수 억제제 또는 SSRI)에 대한 임상 반응을 감소시켜 자살 위험을 증가시킬 수 있다고 가정했습니다. ( ",
				["Gibbons, Harvard Data Sci Rev 2019", "https://hdsr.mitpress.mit.edu/pub/18lm7jrp/release/16"],
				" ) 그런 다음 동일한 연구자들은 866,000명 이상의 성인(대부분 60세 미만 여성, 약 절반은 만성 통증, 약 4분의 1은 항우울제 복용)의 데이터를 검토한 결과 엽산으로 치료받은 사람들이 일반적으로 하루 1,000mcg(허용 상한 섭취량)은 엽산을 처방받지 않은 사람들에 비해 자살 또는 자해를 시도할 위험이 44% 낮았습니다.",
			],
			[
				"피곤할 때 구내염이 자주 발생합니다.\n비타민B를 섭취하면 도움이 될까요?",
				"(",
				" ",
				["Kozlack, J Oral Pathol Med 2010", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3323114/"],
				" ). 이 연구에 따르면 코발라민(B12)와 엽산(B9)은 구내염을 줄이는 데 도움이 될 수 있습니다. 1,000mcg의 비타민 B12를 1일 1회 취침 전에 6일 동안 복용한 결과,  위약에 비해 수개월 동안 구내염 수, 통증 수준 및 발병 기간이 감소했습니다. 위약을 복용한 사람들은 32%만이 구내염이 호전되었다고 답했고, 비타민 B12를 복용한 사람들은 74%가 구내염이 호전되었다고 답했습니다. ( ",
				["Volkov, J Am Board Fam Med 2009", "https://www.ncbi.nlm.nih.gov/pubmed/19124628"],
				" ).티아민(B1), 리보플라빈(B2), 피리독신(B6) 또는 엽산(B9)이 결핍되면  구내염이 재발하는 경향이 있습니다( ",
				["Akintoye, Dent Clin North Am 2014", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3964366/"],
				" ).",
			],
			[
				"비타민B 섭취로 기억력과 인지능력 향상에\n도움을 받을 수 있나요?",
				"여러 연구에 따르면 비타민 B를 장기간(최소 18개월) 복용할 경우 노인의 기억력 및 인지 능력의 저하를 늦출 수 있습니다. 경도 인지 장애가 있는 70세 이상의 사람들을 대상으로 한 2년 간의 위약 대조 연구에서, 비타민 B는 혈장 호모시스테인(11.3 마이크로몰/L 이상)의 수치를 높여 인지 저하를 늦추는 것으로 나타났습니다. 연구에 참여한 사람들에게 비타민 B9(800mcg), 비타민 B12(500mcg), 비타민 B6(20mg)을 매일 투여했습니다. 위약을 복용한 사람들에 비해 뇌 수축이 8배 감소했습니다. ( ",
				["de Jager, Int J Geriatr Psy 2011 ; Douaud, PNAS 2013", "http://www.pnas.org/content/early/2013/05/16/1301816110.abstract"],
				" ) 흥미로운 점은, 오메가-3 지방산이 충분할 때 비타민 B의 효과가 향상되었다는 점입니다. 오메가-3 수치가 낮은 사람들은 비타민 B의 효과가 상대적으로 적었습니다( ",
				["Jerneren, Am J Clin Nutr 2015 ; Oulhaj, J Alz Dis 2016", "https://www.ncbi.nlm.nih.gov/pubmed/26757190"],
				" ).",
			],
			[
				"손톱이 자주 갈라지고 부서집니다.\n비오틴(B7)을 먹으면 정말 효과를 볼 수 있나요?",
				"6~9개월 동안 매일 2,500mcg의 비오틴(B7)을 투여하면 손톱 두께가 25% 증가하고 손톱이 갈라지는 경향이 감소하는 것으로 나타났습니다( ",
				["Columbo, J Am Acad Dermatol 1990", "https://www.ncbi.nlm.nih.gov/pubmed/2273113"],
				" ). 하지만 비오틴은 이미 건강한 손톱을 더 건강하게 만들어주지는 않았습니다.",
			],
			[
				"비오틴(B7)이 탈모에도 도움이 되나요?",
				"스위스의 한 연구에 따르면 비오틴 결핍은 탈모를 호소하는 여성에게 흔하게 나타날 수 있습니다( ",
				["Trueb, Int J Trichology 2016", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4989391/"],
				" ). 이 경우에 비오틴을 섭취하면 도움이 될 수 있습니다. 하지만 비오틴이 결핍되지 않은 사람들이 비오틴을 섭취한다고해서 모발이 더 잘자라거나 머릿결이 개선되지는 않았습니다.",
			],
			[
				"임신중입니다. 엽산이 도움이 된다던데\n사실인가요? 도움이 된다면 얼마나 먹어야 하나요?",
				"엽산(B9)은 세포 분열에 중요한 역할을 하며 적절한 섭취는 심장 질환의 위험을 줄이고 특정 암 발병 위험을 낮출 수 있습니다. 또한 임산부가 섭취할 경우 RL기형아 출산의 위험을 줄입니다. 엽산은 또한 어린이의 백혈병 및 기타 선천적 질환의 가능성을 감소시킬 수 있습니다. 노르웨이의 한 연구에 따르면 엽산(400mcg/day)을 섭취하는 노르웨이 산모는 그렇지 않은 산모보다 자폐 스펙트럼 장애(ASD) 또는 언어발달 장애가 있는 자녀를 출산할 가능성이 각각 39% 및 45% 낮았습니다( ",
				["Suren, JAMA 2013 ; Roth JAMA 2011 ; Levine, JAMA Psy 2018", "https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2667432?resultClick=1"],
				" ).\n\n적절한 엽산 섭취는 태아에게 도움이 되지만, 고용량 엽산 섭취는 권장하지 않습니다. 스페인의 한 연구에 따르면 임신 초기에 하루에 1,000mcg 이상의 엽산을 섭취한 산모의 아이들의 인지 발달 수준 이 400mcg~999mcg의 엽산을 복용한 산모의 아이들보다 낮습니다.",
			],
			[
				"나이아신(B3)을 고용량으로 복용해도 되나요?",
				"나이아신(B3)을 고용량으로 복용하면 콜레스테롤 수치를 개선할 수 있지만 부작용(예: 피부 홍조)과 간 독성을 유발할 수도 있습니다. 나이아신의 다른 형태인 나이아신아마이드는 홍조를 일으키지 않지만 콜레스테롤 수치를 개선해주지 않습니다. 나이아신의 또 다른 형태인 이노시톨 헥사니코티네이트는 콜레스테롤 수치를 낮추면서 홍조를 일으킬 가능성이 더 적습니다.",
			],
		],
		"종합비타민" : [
			[
				"종합비타민을 먹고 나면 속이 안좋아요.",
				"일부 사람들은 종합 비타민제를 복용한 후 메스꺼움을 경험할 수 있습니다. 철분이나 아연과 같은 미네랄 성분은 일부 사람들에게 위장 장애 또는 메스꺼움을 유발할 수 있으므로 이러한 성분이 포함되지 않은 종합 비타민제 복용을 고려하세요. 철분 보충이 필요한 경우 위장 장애를 일으킬 가능성이 적은형태의 철분을 제공하는 종합 비타민을 찾거나 이러한 형태 중 하나를 제공하는 별도의 철분 영양제를 섭취하세요. 음식과 함께 종합 비타민을 섭취하는 것도 소화장애를 줄이는 데 도움이 될 수 있습니다.",
			],
			[
				"루테인이나 CoQ10처럼 부가적인 성분이 포함되어 있는 종합비타민을 더 비싼 가격을 주고 살 가치가 있을까요?",
				"이러한 부가적인 성분이 아예 도움이 되지 않는다고는 할 수 없겠으나, 적절한 복용량이 아닌 경우에는 겉치레에 불과합니다. 루테인, CoQ10과 같이 비타민이나 미네랄이 닌 성분을 원하신다면 별도의 보충제를 통해 더 저렴한 비용으로 적절한 복용량을 섭취할 수 있을 것입니다.",
			],
			[
				"종합비타민을 복용하면 무슨 효과가 있나요?",
				"종합비타민을 복용하면 특정 암과 심혈관 질환의 발병률을 감소시킬 수 있습니다. 이 연구에 따르면 위약을 복용한 사람에 비해 상대적으로 소량의 종합 비타민제를 매일 복용하는 그룹에서 이전에 암 진단을 받은 사람들은 평균적으로 27%, 암의 가족력이 없는 사람들은 14%, 암 가족력이 있는 사람들은 발병률이 8% 낮아진 것으로 나타났습니다( ",
				["Gaziano, JAMA 2012", "http://jama.jamanetwork.com/article.aspx?articleid=1380451"],
				" ).\n\n또한 미국의 한 연구에 따르면 최소 3년 동안 종합 비타민/복합 미네랄 보충제를 복용한 사람들은 종합 비타민을 섭취하지 않은 사람들에 비해 향후 20년 동안 심혈관 질환으로 사망할 확률이 35% 낮았습니다.흥미롭게도, 미네랄이 부족한 종합 비타민제를 사용한 사람이나 연구 초기에 종합 비타민제를 복용한 지 3년 미만인 사람 사이에서는 명백한 이점이 발생하지 않았습니다( ",
				["Bailey, J Nutr 2015", "http://jn.nutrition.org/content/early/2015/01/07/jn.114.204743.abstract"],
				" ).\n\n",
				"유방암 에 걸린 50~79세 여성에 대한 연구에 따르면 종합 비타민제를 사용한 사람들은 평균 7년 동안 사용하지 않은 사람에 비해 질병으로 사망할 확률이 30% 낮았습니다( ",
				["Wassertheil-Smoller, Breast Canc Res Treat 2013", "http://link.springer.com/article/10.1007/s10549-013-2712-x"],
				" ). 연령, 인종 및 기타 보조제 사용과 같은 다른 요인을 조정해도 이 수치는 유의미했습니다.",
			],
			[
				"지용성 비타민의 단위가 IU가 아니라 mcg으로 표기되어 있어서 헷갈려요.",
				'영양제에 포함된 비타민 A의 양은 일반적으로 IU로 표시됩니다. 하지만 라벨에는 비타민 A 함량이 마이크로그램(mcg)으로 표시되어 있을 수도 있습니다. 1IU의 비타민 A에 해당하는 마이크로그램은 비타민 A의 형태에 따라 다릅니다. "레티놀" 형태의 경우 0.3mcg는 1IU와 같습니다. "레티닐 아세테이트" 형태의 경우 3.44mcg는 1IU와 같습니다. "레티닐 팔미테이트" 형태의 경우 0.55마이크로그램은 1IU와 같습니다.',
			],
		],
		"비타민 C" : [
			[
				"비타민 C가 감기예방에 도움이 되나요?",
				"영양제를 통해 매일 비타민 C를 섭취하면 감기에 걸릴 위험을 줄일 수 있지만, 감기에 이미 걸린 후라면 도움이 되지 않습니다. 44개 연구를 분석한 결과 비타민 C(매일 1000mg)를 복용한 사람들의 감기 증상 지속 기간 이 성인 의 경우 약 8%, 어린이의 경우 14% 감소했습니다. 이는 특정 상황에서 더 드라마틱한 효과를 나타내는데, 마라톤 달리기와 같은 단기적이고 심한 육체적 스트레스 를 받는 사람들은 육체활동 며칠 전에 비타민 C를 복용하면 감기에 걸릴 위험이 52% 낮아집니다( ",
				["Hemila, Cochrane Database Syst Rev 2013", "https://www.ncbi.nlm.nih.gov/pubmed/23440782"],
				" ).",
			],
			[
				"비타민 C를 섭취하면 또 어떤점이 좋은가요?",
				"식후 혈당, 혈압을 낮출 수 있고 통풍 또한 예방할 수 있습니다. 제2형 당뇨병 을 앓고 있는 과체중 또는 비만 성인을 대상으로 한 연구 에서는 4개월 동안 매일 2회 500mg의 비타민 C를 섭취하면 혈압(수축기 평균 7mmHg 및 이완기 평균 5mmHg)이 낮아질 뿐만 아니라 위약과 비교했을 때 식후 혈중 포도당의 양은 36% 감소했으며 매일 포도당 수치가 상승한 기간은 2.8시간 감소했습니다( ",
				["Mason, Diab Obes Metab 2019", "https://onlinelibrary.wiley.com/doi/10.1111/dom.13571"],
				" ).\n\n비타민 C를 섭취하면 통풍 위험이 감소합니다. 비타민 C 1,000~1,500mg 섭취한 사람들의 통풍 위험이 각각 34% 및 45% 감소했습니다( ",
				["Choi, Arch Intern Med 2009", "https://www.ncbi.nlm.nih.gov/pubmed/19273781?dopt=Abstract"],
				" ). 그렇다면 많이 먹을수록 통풍 위험이 더 많이 줄어들까요? 그렇지는 않습니다. 2008년의 한 연구에 따르면 비타민 C를 더 많이 섭취해도 통풍 위험이 더 이상 감소하지는 않았습니다( ",
				["Gao, J Rhematol 2008", "https://www.ncbi.nlm.nih.gov/pubmed/18464304?dopt=Abstract"],
				" ).",
			],
			[
				"비타민 C는 얼마나 섭취해야 하나요?",
				"감기나 통풍의 위험을 줄이거나 혈압을 낮추기 위해 고용량을 복용하는 경우 일반적인 복용량은 하루에 두 번 500mg 또는 하루에 최대 2,000mg입니다.",
			],
			[
				"비타민 C를 고용량으로 섭취할 때\n부작용은 없나요?",
				"비타민 C를 하루에 1,000mg 이상을 섭취하면 신장 결석의 위험이 증가할 수 있기 때문에 충분한 양의 수분을 섭취해야 합니다. 설사는 성인의 경우 2,000mg 이상, 어린이의 경우 더 적은 양의 비타민C 섭취로도 발생할 수 있습니다.",
			],
			[
				"어떤 형태의 비타민 C가 가장 좋은가요?",
				"비타민 C는 산이기 때문에 캡슐이나 정제로 제조된 제품이 분말, 액체, 츄어블 또는 젤리형태보다 치아에 더 안전할 수 있습니다.",
			],
			[
				"중성화 비타민은 무엇이 다른가요?",
				"중성화 비타민(Ester-C)은 칼슘과 결합된 비산성 형태의 비타민 C 입니다. 그렇기 때문에 일반 비타민 C를 섭취했을 때 속쓰림이 심한 사람들은 중성화 비타민이 대안이 될 수 있습니다. 또한 임상 연구에 따르면 Ester-C로 1,000mg의 비타민 C를 섭취했을 때 일반 비타민C보다 백혈구 내 비타민 C 농도가 더 오랜시간 유지되었습니다. 일반 비타민C에 비해 8시간 및 24시간 후 백혈구 내 비타민 농도가 기준치보다 유의미하게 높았습니다. 일반 비타민C는 투여 후 4시간 후에 최고치로 나타나고 시간이 지날수록 감소했습니다( ",
				["Mitmesser, SpringerPlus 2016", "https://springerplus.springeropen.com/articles/10.1186/s40064-016-2605-7"],
				" ).",
			],
			[
				"하루에 한번 비타민C를 고용량으로 섭취하는 것이 좋은가요, 여러번에 걸쳐 나누어 섭취하는 것이 좋은가요?",
				"비타민 C는 수용성으로 소변을 볼 때마다 우리 몸에 쓰이고 남은 비타민이 배출됩니다. 따라서 체내 비타민 C 농도를 일정하게 유지하고 생체이용률을 높이려면 하루에 여러 번 작은 용량을 섭취하는 것이 한번에 고용량을 섭취하는 것보다 낫습니다( ",
				["Carr, Nutrients 2013", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3847730/"],
				" ). 하지만 하루에 여러 번 비타민을 섭취하는 것이 번거롭기 때문에 이런 경우에는 서방형 제제를 고려해볼 수 있습니다. 비타민C를 서방형으로 섭취하면 성분이 천천히 지속적으로 방출되기 때문에 고용량으로 섭취했을 때 발생하는 소화 문제를 줄이고 체내 비타민 C 농도를 일정하게 유지할 수 있습니다.",
			],
		],
	};

	useEffect(() => {
		const randomNumber = Math.floor(Math.random() * 6 + 1)
		setRandomImage(images[randomNumber])
	}, [])

	return (
		<BackgroundScreen2>
			<View style={styles.container}>
				<View style={styles.titlecontainer}>
					<Ionicons
						name="arrow-back"
						size={48}
						color="black"
						onPress={() => {
							navigation.goBack();
						}}
					/>
					<Text style={{...styles.nutrient, fontFamily: "웰컴체_Bold"}}>
						{route.params.nutrient}
					</Text>
					<View style={styles.empty} />
				</View>
				<ScrollView style={styles.height}>
					<View style={styles.qnacontainer}>
						{datas[route.params.nutrient].map((data, idx) => 
							<AiQna key={idx} title={data[0]} contents={data.slice(1)}/>
						)}
					</View>
					<View style={styles.imagecontainer}>
						<Image
							source={randomImage}
							style={styles.image}
						/>
					</View>
				</ScrollView>
			</View>
		</BackgroundScreen2>
	)
};

const styles = StyleSheet.create({
	container: {
		position: "relative",
	},
	titlecontainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10,
	},
	empty: {
		width: 48,
	},
	height: {
		marginBottom: 65,
	},
	nutrient: {
		fontSize: 24,
	},
	qnacontainer: {
		alignItems: "center",
		marginBottom: 55,
	},
	imagecontainer: {
		width: "100%",
		alignItems: "flex-end",
	},
	image: {
		width: "50%",
		height: 120,
		resizeMode: "contain",
		marginTop: -60,
		marginRight: -30,
	},
});