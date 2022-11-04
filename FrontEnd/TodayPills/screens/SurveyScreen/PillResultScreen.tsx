import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DetailedPillCard from "../../components/Cards/DetailedPillCard";
import CustomBtn from "../../components/UI/CustomBtn";
import { accent } from "../../constants/Colors";
import BackgroundScreen from "../BackgroundScreen";

const PillResultScreen = ({ navigation }: any) => {
  const [myName, setMyName] = useState("");
  const [nowMyNutrient, setNowMyNutrient] = useState("");
  const getMyName = async () => {
    const name = await AsyncStorage.getItem("@storage_UserNickName");
    console.log(name, "this is my name");
    setMyName(name);
  };
  const getMyNowNutrient = async () => {
    const nutrient = await AsyncStorage.getItem("@storage_nowNutrient");
    setNowMyNutrient(nutrient);
  };
  useEffect(() => {
    getMyName();
    getMyNowNutrient();
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
            navigation.goBack();
          }}
        />
        <View style={styles.titleGroup}>
          <Text style={styles.title}>
            {myName} 님의 {nowMyNutrient} 추천
          </Text>
        </View>
        <View>
          <DetailedPillCard />
          <DetailedPillCard />
          <DetailedPillCard />
        </View>
        <View style={styles.btn}>
          <CustomBtn
            buttonColor={accent}
            title={"홈으로 가기"}
            titleColor={"#fff"}
            buttonWidth={"70%"}
            onPress={() => navigation.navigate("MainScreen")}
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
    marginTop: 50,
  },
});

export default PillResultScreen;