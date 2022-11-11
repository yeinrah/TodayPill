import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { afterSecondSurvey } from "../../API/userAPI";
import DetailedPillCard from "../../components/Cards/DetailedPillCard";
import CustomBtn from "../../components/UI/CustomBtn";
import { accent } from "../../constants/Colors";
import BackgroundScreen from "../BackgroundScreen";

const PillResultScreen = ({ navigation, route }: any) => {
  const [myName, setMyName] = useState("");
  const [nowMyNutrient, setNowMyNutrient] = useState("");
  const [userId, setUserId] = useState(0);
  const [itemList, setItemList] = useState([]);
  const getMyName = async () => {
    const name = await AsyncStorage.getItem("@storage_UserNickName");
    setMyName(name);
  };
  const getMyNowNutrient = async () => {
    const nutrient = await AsyncStorage.getItem("@storage_nowNutrient");
    setNowMyNutrient(nutrient);
  };
  // const getUserId = async () => {
  //   let id = await AsyncStorage.getItem("@storage_UserId");
  //   setUserId(Number(id));
  // };
  // const getResult = async () => {
  //   await getUserId();
  //   let arr = afterSecondSurvey(route.params.answerSheet);
  //   setItemList([...itemList, arr]);
  //   return arr;
  // };
  useEffect(() => {
    getMyName();
    getMyNowNutrient();
    // console.log(route.params.answerSheet);
    // getResult();
  }, []);
  return (
    <BackgroundScreen>
      <ScrollView style={styles.container}>
        <Ionicons
          name="arrow-back"
          size={48}
          color="black"
          style={styles.icon}
          onPress={() => {
            // navigation.goBack();
            navigation.replace("PersonalRecommendationScreen");
          }}
        />
        <View style={styles.titleGroup}>
          <Text style={styles.title}>
            {myName} 님의 {nowMyNutrient} 추천
          </Text>
        </View>
        <View>
          {/* <DetailedPillCard /> */}
          {route.params.answerSheet[0] &&
            route.params.answerSheet[0].data.map((item, index) => {
              return (
                <DetailedPillCard
                  supplementId={item.supplementId}
                  supplementName={item.supplementName}
                  brand={item.brand}
                  note={item.note}
                  userId={userId}
                  image={item.image}
                  key={index}
                />
              );
            })}
        </View>
        <View style={styles.btn}>
          <CustomBtn
            buttonColor={accent}
            title={"영양제 추천 다시 받기!"}
            titleColor={"#fff"}
            fontSize={20}
            buttonWidth={"70%"}
            onPress={() => {
              navigation.navigate("PersonalRecommendationScreen");
            }}
          />
          <CustomBtn
            buttonColor={accent}
            title={"홈으로 가기"}
            titleColor={"#fff"}
            fontSize={20}
            buttonWidth={"70%"}
            onPress={() => {
              navigation.navigate("MainScreen");
            }}
          />
        </View>
      </ScrollView>
    </BackgroundScreen>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    marginLeft: 10,
    marginBottom: 10,
  },
  titleGroup: {
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
  btn: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
});

export default PillResultScreen;
