import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  ToastAndroid,
} from "react-native";
import BackgroundScreen from "../BackgroundScreen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import AnswerSurvey from "../../components/Cards/AnswerSurvey";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import BackgroundScreen2 from "../BackgroundScreen2";

const SurveyScreen = ({ navigation }: any) => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [nowStage, setNowStage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [answerSheet, setAnswerSheet] = useState<any>({
    smoking: false,
    pregnant: false,
    menopause: false,
    allergy: "",
    drink: 0,
    symptom: "",
    disease: "",
    medicine: "",
    outdoor_activity: 0,
    toughActivity: false,
    balanced_meal: false,
    lack: "",
    is_ok_big_pill: false,
    preferred_brand: "",
    problem: "",
  });
  const surveyData = [
    [
      "pregnant",
      "임신 여부를 알려주세요",
      "임산부에 맞는 영양성분이 추천됩니다.",
      ["YES", "NO"],
    ],
    [
      "menopause",
      "폐경기를 지나셨나요?",
      "그에 따른 영양성분이 추천됩니다.",
      ["YES", "NO"],
    ],
    [
      "smoking",
      "흡연 여부를 알려주세요",
      "흡연자는 비흡연자보다 일부 영양소가 결핍될 확률이 더 높습니다.",
      ["YES", "NO"],
    ],
    [
      "drink",
      "음주 습관에 대해 알려주세요",
      "알려주세요",
      ["안함", "한달에 1~2회", "일주일에 1~2회", "일주일에 3회"],
    ],
    [
      "allergy",
      "알러지가 있나요?",
      "입력해주세요.",
      [
        "해당없음",
        "꽃가루",
        "벌",
        "고양이",
        "비염",
        "허브",
        "생선",
        "계란",
        "기타",
      ],
    ],
    [
      "symptom",
      "다음 중 해당 하는 증상이 있나요?",
      "중복 선택 가능합니다",
      [
        "해당없음",
        "속쓰림",
        "변비",
        "설사",
        "소화장애",
        "요통",
        "편두통",
        "과민성 대장군 증후군",
        "아토피 피부염",
        "비듬",
        "야간 다리 경련",
        "구내염",
      ],
    ],
    [
      "disease",
      "다음 중 해당하는 질환을 앓고 계신다면 선택해주세요.",
      "중복 선택 가능합니다",
      [
        "해당없음",
        "빈혈",
        "갑상선 질환",
        "신장 질환",
        "당뇨병",
        "통풍",
        "고혈압",
        "고지혈증",
        "치주염",
        "심부전",
        "기타",
      ],
    ],
    [
      "medicine",
      "다음 중 복용중인 약이 있으시다면 선택해주세요",
      "중복선택 가능합니다",
      [
        "해당없음",
        "피임약",
        "제산제",
        "혈압약",
        "이뇨제",
        "부정맥(소타롤)",
        "항경련제(가바펜틴)",
        "갑상선(레보티록신)",
        "항생제",
      ],
    ],
    [
      "toughActivity",
      "평소 격렬한 신체 활동을 하는 편인가요?",
      "근육통을 줄일 수 있는 알아봐드릴게요",
      ["YES", "NO"],
    ],
    [
      "outdoor_activity",
      "충분한 양의 햇빛을 쬐고 계신가요?",
      "일주일에 4회이상 하루 20분이면 충분하다고 말할 수 있어요.",
      ["충분하다", "보통이다", "불충분하다", "안 쬔다"],
    ],
    [
      "balanced_meal",
      "평소 균형잡힌 식사를 하시나요?",
      "알려주세요",
      ["YES", "NO"],
      // ["채소", "생선", "육류", "과일"],
    ],
    [
      "lack",
      "평소 먹는 음식을 알려주세요",
      "복수 선택 가능합니다.",
      ["채소", "생선", "육류", "과일"],
    ],
    ["is_ok_big_pill", "알약이 커도 괜찮을까요?", "알려주세요", ["YES.", "NO"]],
    [
      "preferred_brand",
      "선호하는 영양제 브랜드가 있나요?",
      "중복 선택 가능합니다",
      [
        "해당없음",
        "solgar",
        "california gold nutrition",
        "natural factors",
        "life extension",
        "기타",
      ],
    ],
    [
      "problem",
      "해결하고자 하는 문제가 있나요?",
      "중복 선택 가능합니다",
      ["해당없음", "피로감", "눈건강", "피부건강", "소화불량", "기타"],
    ],
    [],
  ];
  const checkGender = async () => {
    let nowGender = await AsyncStorage.getItem("@storage_UserGender");
    if (nowGender === "남성") {
      setNowStage(2);
    } else {
      setSelectedItem(1);
    }
  };
  // useEffect(() => {
  //   checkGender();
  // }, []);
  useFocusEffect(
    useCallback(() => {
      checkGender();
    }, [])
  );
  useFocusEffect(
    useCallback(() => {
      if (nowStage === surveyData.length - 1) {
        navigation.navigate("SurveyLoadingScreen", {
          answerSheet: answerSheet,
        });
      }
    }, [answerSheet])
  );
  // useEffect(() => {
  //   if (nowStage === surveyData.length - 1) {
  //     console.log(answerSheet);
  //     navigation.navigate("SurveyLoadingScreen", { answerSheet: answerSheet });
  //   }
  // }, [answerSheet]);
  return (
    <BackgroundScreen2>
      <View style={styles.container}>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <>
            <Ionicons
              name="arrow-back"
              size={48}
              color="black"
              style={styles.icon}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <View style={styles.textcontainer}>
              <Text style={[styles.text, styles.largetext]}>
                {surveyData[nowStage][1]}
              </Text>
              <Text style={[styles.text, styles.smalltext]}>
                {surveyData[nowStage][2]}
              </Text>
            </View>
            <ScrollView>
              <AnswerSurvey
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                nowStage={nowStage}
                surveyData={surveyData}
              />
            </ScrollView>
            <View style={styles.buttoncontainer}>
              <View style={styles.buttonOuterContainer}>
                <Pressable
                  android_ripple={{ color: "#4E736F" }}
                  style={styles.buttonInnerContainer}
                  onPress={async () => {
                    let uid = "";
                    uid = await AsyncStorage.getItem("@storage_UserId");
                    setNowStage(nowStage + 1);
                    let answer: boolean | number | string;
                    //균형잡힌 식사 관련 질문
                    if (nowStage === 10 && selectedItem === 0) {
                      setNowStage(nowStage + 2);
                    }
                    //복수선택
                    if (
                      nowStage === 4 ||
                      nowStage === 5 ||
                      nowStage === 6 ||
                      nowStage === 7 ||
                      nowStage === 11 ||
                      nowStage === 13 ||
                      nowStage === 14
                    ) {
                      answer = selectedItem;
                      if (answer === 1 || !answer) {
                        setNowStage(nowStage);
                        ToastAndroid.show("선택 해주세요", ToastAndroid.SHORT);
                      }
                    } else if (surveyData[nowStage][3]) {
                      selectedItem == 0 ? (answer = true) : (answer = false);
                      if (nowStage === 7) {
                        answer = selectedItem;
                      }
                    } else answer = selectedItem;
                    if (nowStage === surveyData.length - 2 && answer !== 1)
                      setIsLoading(true);
                    setAnswerSheet({
                      userId: uid,
                      ...answerSheet,
                      [`${surveyData[nowStage][0]}`]: answer,
                    });
                    console.log(answerSheet);
                    // if (nowStage == 6) setSelectedItem(0);
                    // else setSelectedItem(1);
                  }}
                >
                  <Text style={styles.title}>다 음</Text>
                </Pressable>
              </View>
            </View>
          </>
        )}
      </View>
    </BackgroundScreen2>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-around",
    // alignItems: "center",
  },
  icon: {
    marginLeft: 10,
    marginBottom: 10,
  },
  textcontainer: {
    marginLeft: 30,
    marginRight: 40,
    marginBottom: 30,
    height: "15%",
  },
  text: {
    fontWeight: "bold",
    color: "black",
  },
  largetext: {
    fontSize: 24,
  },
  smalltext: {
    fontSize: 15,
    marginTop: 10,
  },
  itemcontainer: {
    width: "100%",
    alignItems: "center",
  },
  itemoutercontainer: {
    borderRadius: 10,
    width: "80%",
    height: 80,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 10,
  },
  iteminnercontainer: {
    paddingVertical: 25,
    backgroundColor: "#E5E5E5",
  },
  iteminnercontainerClicked: {
    paddingVertical: 25,
    backgroundColor: "rgba(142,232,222,0.95)",
  },
  itemflex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemtitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 25,
  },
  buttoncontainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  buttonOuterContainer: {
    borderRadius: 10,
    width: "80%",
    height: 50,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 10,
  },
  buttonInnerContainer: {
    paddingVertical: 10,
    backgroundColor: "#E881B1",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  icon1: {
    marginRight: 20,
  },
});

export default SurveyScreen;
