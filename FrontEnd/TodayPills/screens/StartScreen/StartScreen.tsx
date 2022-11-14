import { Button, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackgroundScreen from "../BackgroundScreen";
import { useState } from "react";
import CustomBtn from "../../components/UI/CustomBtn";
import BackgroundScreen2 from "../BackgroundScreen2";
import { boldWelcome } from "../../components/Data/fontFamilyObject";

const StartScreen = ({ navigation }: any) => {
  const [clikedStart, setClickedStart] = useState(false);
  return (
    <BackgroundScreen2>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={{ ...styles.subTitle, ...boldWelcome }}>
            내게 맞는 영양제 추천
          </Text>
          <View style={styles.mainTitle}>
            <Text style={{ ...styles.text1, ...boldWelcome }}>오늘의 </Text>
            <Text style={{ ...styles.text2, ...boldWelcome }}>영양제</Text>
          </View>
        </View>
        {!clikedStart && (
          <View style={styles.btnGroup}>
            <CustomBtn
              buttonColor={"#FFCE31"}
              title={"카카오 시작하기"}
              titleColor={"#fff"}
              fontSize={20}
              buttonWidth={"200%"}
              onPress={async () => {
                // let temp = await AsyncStorage.setItem("@storage_User", "정서");
                // console.log(temp);
                //   console.log(navigation, "a");
                setClickedStart(true);
                // navigation.replace("KakaoScreen");
                //   navigation.goBack();
              }}
            />
            <CustomBtn
              buttonColor={"#E881B1"}
              title={"돌아가기"}
              titleColor={"#fff"}
              fontSize={20}
              buttonWidth={"200%"}
              onPress={async () => {
                // let temp = await AsyncStorage.setItem("@storage_User", "");
                // console.log(temp);s
                //   console.log(navigation, "a");
                setClickedStart(false);
                // navigation.replace("LoginScreen");
                //   navigation.goBack();
              }}
            />
          </View>
        )}
        {clikedStart && (
          <View style={styles.btnGroup}>
            <CustomBtn
              buttonColor={"#FFCE31"}
              title={"카카오 로그인"}
              titleColor={"#fff"}
              fontSize={20}
              buttonWidth={"200%"}
              onPress={async () => {
                // let temp = await AsyncStorage.setItem("@storage_User", "정서");
                // console.log(temp);
                //   console.log(navigation, "a");
                navigation.replace("KakaoScreen");
                //   navigation.goBack();
              }}
            />
          </View>
        )}
      </View>
    </BackgroundScreen2>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginLeft: 30,
  },
  subTitle: {
    fontSize: 30,
  },
  mainTitle: {
    flexDirection: "row",
    paddingRight: 70,
    marginTop: 10,
  },
  text1: {
    fontSize: 50,

    // fontWeight: "bold",
    color: "#E2C3DC",
  },
  text2: {
    fontSize: 50,
    // fontWeight: "bold",
    color: "#C4F1EA",
  },
  btnGroup: { position: "absolute", bottom: 30, alignItems: "center" },
});
export default StartScreen;
