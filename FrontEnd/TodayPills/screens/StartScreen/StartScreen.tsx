import { Button, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackgroundScreen from "../BackgroundScreen";
import { useState } from "react";

const StartScreen = ({ navigation }: any) => {
  const [clikedStart, setClickedStart] = useState(false);
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
            <Button
              title="시작하기"
              onPress={async () => {
                let temp = await AsyncStorage.setItem("@storage_User", "정서");
                console.log(temp);
                //   console.log(navigation, "a");
                setClickedStart(true);
                //   navigation.goBack();
              }}
            />
            <Button
              title="돌아가기"
              onPress={async () => {
                let temp = await AsyncStorage.setItem("@storage_User", "정서");
                console.log(temp);
                //   console.log(navigation, "a");
                navigation.replace("LoginScreen");
                //   navigation.goBack();
              }}
            />
          </View>
        )}
        {clikedStart && (
          <View style={styles.btnGroup}>
            <Button
              title="카카오 시작"
              onPress={async () => {
                let temp = await AsyncStorage.setItem("@storage_User", "정서");
                console.log(temp);
                //   console.log(navigation, "a");
                navigation.replace("LoginScreen");
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
  btnGroup: { position: "absolute", bottom: 30 },
});
export default StartScreen;
