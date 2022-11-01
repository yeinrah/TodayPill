import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomBtn from "../../components/UI/CustomBtn";
import { accent } from "../../constants/Colors";
import BackgroundScreen from "../BackgroundScreen";

const PersonalRecommendationScreen = () => {
  const [myNutrient, setMyNutrient] = useState([
    "비타민c",
    "비타민a",
    "비타민d",
  ]);
  const getMyList = async () => {
    const email = AsyncStorage.getItem("@storage_userEmail");
  };
  useEffect(() => {}, []);
  return (
    <BackgroundScreen>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text>
            <Text style={styles.title}>권민지</Text>
            <Text>님의 맞춤 솔루션</Text>
          </Text>
        </View>
        <View style={styles.textGroup}>
          <Text>
            {myNutrient.map((item) => (
              <Text onPress={() => console.log("hi")}> {item} </Text>
            ))}
          </Text>
        </View>
        <View style={styles.pillBox}>
          <View style={styles.inPillDetail}>
            <View style={styles.inTextContainer}>
              <Text>
                <Text style={styles.inTitle}>권민지</Text>
                <Text>님의 추천 영양성분</Text>
              </Text>
            </View>
            <View style={styles.listGroup}>
              {myNutrient.map((item) => (
                <Text style={styles.listText}>{"\u2022" + item}</Text>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.btn}>
          <CustomBtn
            buttonColor={accent}
            title={"홈으로 가기"}
            titleColor={"#fff"}
            buttonWidth={"70%"}
          />
        </View>
      </ScrollView>
    </BackgroundScreen>
  );
};
const styles = StyleSheet.create({
  textContainer: { alignItems: "center", fontSize: 20 },
  inTextContainer: { alignItems: "center", fontSize: 10, marginTop: 20 },
  title: { fontWeight: "bold", fontSize: 30 },
  inTitle: { fontWeight: "bold", fontSize: 15 },
  btn: {
    alignItems: "center",
    marginTop: 50,
  },
  textGroup: {
    alignItems: "center",
    marginTop: 30,
  },
  pillDetail: {
    width: 200,
    height: 200,
    backgroundColor: "white",
  },
  inPillDetail: {
    width: 200,
    height: 200,
    backgroundColor: "grey",
    marginTop: 50,
  },
  pillBox: { alignItems: "center" },
  listGroup: { marginLeft: 25, marginTop: 30 },
  listText: { marginBottom: 10 },
});
export default PersonalRecommendationScreen;
