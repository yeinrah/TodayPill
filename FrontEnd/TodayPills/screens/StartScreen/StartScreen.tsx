import { Button, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackgroundScreen from "../BackgroundScreen";
import { useCallback, useState } from "react";
import CustomBtn from "../../components/UI/CustomBtn";
import { useFocusEffect } from "@react-navigation/native";

const StartScreen = ({ navigation }: any) => {
  const [clikedStart, setClickedStart] = useState(false);
  const checkLogin = async () => {
    if ((await AsyncStorage.getItem("@storage_User")) != null) {
      navigation.replace("MainScreen");
      console.log("startscreen");
    }
  };
  useFocusEffect(
    useCallback(() => {
      checkLogin();
    }, [])
  );
  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <Text style={styles.subTitle}>내게 맞는 영양제 추천</Text>
        <View style={styles.mainTitle}>
          <Text style={styles.text1}>오늘의 </Text>
          <Text style={styles.text2}>영양제</Text>
        </View>
        {!clikedStart && (
          <View style={styles.btnGroup}>
            <CustomBtn
              buttonColor={"#000000"}
              title={"카카오 시작하기"}
              titleColor={"#fff"}
              buttonWidth={"200%"}
              onPress={async () => {
                let temp = await AsyncStorage.setItem("@storage_User", "정서");
                console.log(temp);
                //   console.log(navigation, "a");
                setClickedStart(true);
                // navigation.replace("KakaoScreen");
                //   navigation.goBack();
              }}
            />
            <CustomBtn
              buttonColor={"#000000"}
              title={"돌아가기"}
              titleColor={"#fff"}
              buttonWidth={"200%"}
              onPress={async () => {
                let temp = await AsyncStorage.setItem("@storage_User", null);
                console.log(temp);
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
              buttonColor={"#000000"}
              title={"카카오 로그인"}
              titleColor={"#fff"}
              buttonWidth={"200%"}
              onPress={async () => {
                let temp = await AsyncStorage.setItem("@storage_User", "정서");
                console.log(temp);
                //   console.log(navigation, "a");
                navigation.replace("KakaoScreen");
                //   navigation.goBack();
              }}
            />
          </View>
        )}
      </View>
    </BackgroundScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: { fontSize: 30, paddingRight: 210, marginLeft: 30 },
  mainTitle: {
    flexDirection: "row",
    paddingRight: 70,
    marginLeft: 30,
  },
  text1: { fontSize: 50, fontWeight: "bold", color: "#E2C3DC" },
  text2: { fontSize: 50, fontWeight: "bold", color: "#C4F1EA" },
  btnGroup: { position: "absolute", bottom: 30, alignItems: "center" },
});
export default StartScreen;
