import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import BackgroundScreen from "../BackgroundScreen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import AnswerSurvey from "../../components/Cards/AnswerSurvey";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SurveyQuestion from "../../components/Data/SurveyAdditionalEfficiency";
import SurveyFormula from "../../components/Data/SurveyFormula";

const SecondAddSurvey = ({ navigation }: any) => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [nowStage, setNowStage] = useState(0);
  const [answerSheet, setAnswerSheet] = useState<any>({
    lowerPriceLimit: 0,
    upperPriceLimit: 0,
    additionalEfficiency: "",
    formula: "",
    sustainedRelease: false,
  });
  const surveyData = [
    ["lowerPriceLimit", "원하는 최소 가격을 알려주세요", "이 가격은 넘자"],
    ["upperPriceLimit", "원하는 최대 가격을 알려주세요", "이 가격은 넘지말자"],
    [
      "additionalEfficiency",
      "추가로 원하는 효과가 있나요?",
      "선택해주세요",
      ["스트레스 완화", "기억력 증진", "혈액순환", "에너지 충전", "근육통"],
    ],
    [
      "formula",
      "원하는 약의 형태를 선택해주세요",
      "선택해주세요",
      ["캡슐형", "츄어블", "액체형", "파우더형"],
    ],
    ["sustainedRelease", "서방형제재를 원하세요?", "알려주세요", ["YSE", "NO"]],
    [],
  ];
  useEffect(() => {
    if (nowStage === surveyData.length - 1) {
      console.log(answerSheet);
      navigation.navigate("SurveyDeepLoadingScreen", {
        answerSheet: answerSheet,
      });
    }
  }, [answerSheet]);
  return (
    <BackgroundScreen>
      <View style={styles.container}>
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
                let uid = await AsyncStorage.getItem("@storage_UserId");
                let uemail = await AsyncStorage.getItem("@storage_UserEmail");
                setNowStage(nowStage + 1);
                let answer: boolean | number;
                if (nowStage === 2) {
                  answer = SurveyQuestion.get(selectedItem);
                } else if (nowStage === 3) {
                  answer = SurveyFormula.get(selectedItem);
                } else if (surveyData[nowStage][3]) {
                  selectedItem == 0 ? (answer = true) : (answer = false);
                } else answer = selectedItem;
                setAnswerSheet({
                  userId: uid,
                  email: uemail,
                  ...answerSheet,
                  [`${surveyData[nowStage][0]}`]: answer,
                });
                setSelectedItem(1);
              }}
            >
              <Text style={styles.title}>다 음</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </BackgroundScreen>
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
export default SecondAddSurvey;
