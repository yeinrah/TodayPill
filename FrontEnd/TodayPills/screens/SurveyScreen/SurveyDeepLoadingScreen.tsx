import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { afterSecondSurvey } from "../../API/userAPI";
import BackgroundScreen from "../BackgroundScreen";

const SurveyDeepLoadingScreen = ({ navigation, route }: any) => {
  const [nowMyNutrient, setNowMyNutrient] = useState("");
  const [itemList, setItemList] = useState([]);
  const getMyNowNutrient = async () => {
    const nutrient = await AsyncStorage.getItem("@storage_nowNutrient");
    setNowMyNutrient(nutrient);
  };
  const getResult = async () => {
    console.log(route.params.answerSheet, "hah");
    let arr = await afterSecondSurvey(route.params.answerSheet);
    setItemList([...itemList, arr]);
  };
  useEffect(() => {
    getMyNowNutrient();
    console.log(route.params.answerSheet);
    // afterSecondSurvey(route.params.answerSheet).then((res) =>
    //   console.log(res, "haha")
    // );
    getResult();
  }, []);
  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <View style={styles.textcontainer}>
          <Text style={[styles.text, styles.greetingtext, styles.blacktext]}>
            {nowMyNutrient} 맞춤 추천 완료 !!
          </Text>
        </View>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/youngyang/normal.png")}
          />
        </View>
        <View style={styles.buttonOuterContainer}>
          <Pressable
            android_ripple={{ color: "#4E736F" }}
            style={styles.buttonInnerContainer}
            onPress={() =>
              navigation.navigate("PillResultScreen", {
                answerSheet: itemList,
              })
            }
          >
            <Text style={styles.title}>다음</Text>
          </Pressable>
        </View>
      </View>
    </BackgroundScreen>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  imagecontainer: {
    width: 100,
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textcontainer: {
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  greetingtext: {
    fontSize: 30,
    marginBottom: 10,
  },
  nametext: {
    fontSize: 40,
  },
  blacktext: {
    color: "black",
  },
  whitetext: {
    color: "white",
  },
  flexrow: {
    flexDirection: "row",
  },
  buttonOuterContainer: {
    borderRadius: 20,
    width: "80%",
    marginLeft: 20,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 10,
  },
  buttonInnerContainer: {
    paddingVertical: 7,
    backgroundColor: "#E881B1",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

export default SurveyDeepLoadingScreen;
