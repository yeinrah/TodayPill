import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import BackgroundScreen from "../BackgroundScreen";
import { Ionicons } from "@expo/vector-icons";
import CustomBtn from "../../components/UI/CustomBtn";
import { accent } from "../../constants/Colors";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HealthScreeningCheck } from "../../API/userAPI";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
const HealthScreeningDetailScreen = ({ navigation }) => {
  const [name, setName] = useState("김정서");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
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
            <View style={styles.textcontainer}>
              <Text style={[styles.text, styles.largetext]}>
                건강 검진 결과 분석을 위해
              </Text>
              <Text style={[styles.text, styles.largetext]}>
                본인 정보를 입력해주세요
              </Text>
              {/* <Text style={[styles.text, styles.smalltext]}>
            흡연할 경우 조심해야 할 성분이 있어요
          </Text> */}
            </View>
            <View style={styles.inputTextContainer}>
              <View style={styles.textBox}>
                <Text>이름</Text>
                <TextInput
                  style={styles.inputText}
                  placeholder="김정서"
                  value="김정서"
                />
              </View>
              <View style={styles.textBox}>
                <Text>생년원일</Text>
                <TextInput
                  style={styles.inputText}
                  placeholder="19960621"
                  onChangeText={(text) => {
                    console.log(text);
                    setBirth(text);
                  }}
                />
              </View>
              <View style={styles.textBox}>
                <Text>핸드폰 번호</Text>
                <TextInput
                  style={styles.inputText}
                  placeholder="01038819667(-제외)"
                  onChangeText={(text) => {
                    console.log(text);
                    setPhone(text);
                  }}
                />
              </View>
            </View>
            <View style={styles.customBtnView}>
              <CustomBtn
                buttonColor={accent}
                title={"확인"}
                titleColor={"#fff"}
                fontSize={20}
                buttonWidth={"70%"}
                onPress={async () => {
                  setIsLoading(true);
                  try {
                    await AsyncStorage.setItem("@storage_userName", name);
                    await AsyncStorage.setItem("@storage_userBirth", birth);
                    await AsyncStorage.setItem("@storage_userPhone", phone);
                    const email = await AsyncStorage.getItem(
                      "@storage_UserEmail"
                    );
                    const result = await HealthScreeningCheck(
                      birth,
                      email,
                      phone,
                      name
                    );
                    setIsLoading(false);
                    navigation.navigate("FirstAddSurvey");
                  } catch {
                    ToastAndroid.show(
                      "인증에 실패 하였습니다.",
                      ToastAndroid.SHORT
                    );
                    setIsLoading(false);
                    navigation.navigate("HealthScreeningDetailScreen");
                  }
                }}
              />
            </View>
          </ScrollView>
        </BackgroundScreen>
      )}
    </>
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
  largetext: {
    fontSize: 24,
  },
  greytext: {
    color: "black",
    fontSize: 30,
  },
  inputTextContainer: {
    padding: 40,
  },
  textBox: { marginBottom: 40 },
  inputText: {
    fontSize: 30,
    borderBottomWidth: 1,
  },
  customBtnView: {
    alignItems: "center",
  },
});
export default HealthScreeningDetailScreen;
