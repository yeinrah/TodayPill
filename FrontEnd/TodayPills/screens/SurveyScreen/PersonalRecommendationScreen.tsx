import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getUserInfoByEmail } from "../../API/userAPI";
import NutrientImage from "../../components/Data/NutrientImage";
import CustomBtn from "../../components/UI/CustomBtn";
import { accent } from "../../constants/Colors";
import BackgroundScreen from "../BackgroundScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PersonalRecommendationScreen = ({ navigation }: any) => {
  const [myNutrient, setMyNutrient] = useState([
    "비타민c",
    "비타민a",
    "비타민d",
  ]);
  // const [nutrientImage, setNutrientImage] = useState<string[]>(NutrientImage);
  const [name, setName] = useState("");
  // const str = require("../../assets/images/nutrients/sample1.png");
  const getMyName = async () => {
    const nowName = await AsyncStorage.getItem("@storage_UserNickName");
    setName(nowName);
  };
  const getMyList = async () => {
    const email = await AsyncStorage.getItem("@storage_UserEmail");
    const userInfo = await getUserInfoByEmail(email);
    console.log(email, "email");
    console.log(userInfo, "userInfo");
    setMyNutrient([
      userInfo.recommendOne,
      userInfo.recommendTwo,
      userInfo.recommendThree,
    ]);
  };
  useEffect(() => {
    getMyList();
    getMyName();
  }, []);
  return (
    <BackgroundScreen>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text>
            <Text style={styles.title}>{name + "  "}</Text>
            <Text style={styles.contentText}>님의 맞춤 솔루션</Text>
          </Text>
        </View>
        {/* <View style={styles.clickBox}>
          <Text style={styles.clickText}>click me</Text>
        </View> */}
        <View style={styles.textGroup}>
          <Text style={styles.shape}>
            {myNutrient.map((item, index) => (
              <Text
                key={index}
                onPress={async () => {
                  await AsyncStorage.setItem("@storage_nowNutrient", item);
                  navigation.navigate("NutrientDetailScreen", {
                    nutrient: [item],
                  });
                }}
              >
                <Image source={NutrientImage[index]} style={styles.image} />
                <View style={styles.tagStyle}>
                  <MaterialCommunityIcons
                    style={styles.tagStyle}
                    name="cursor-pointer"
                    size={24}
                    color="black"
                  />
                </View>
              </Text>
            ))}
          </Text>
        </View>
        <View style={styles.pillBox}>
          <ImageBackground
            source={require("../../assets/images/pillbag.png")}
            style={styles.inPillDetail}
          >
            <View style={styles.inTextContainer}>
              <Text>
                <Text style={styles.inTitle}>{name}</Text>
                <Text>님의 추천 영양성분</Text>
              </Text>
            </View>
            <View style={styles.listGroup}>
              {myNutrient.map((item, index) => (
                <Text key={index} style={styles.listText}>
                  {"\u2022" + item}
                </Text>
              ))}
            </View>
          </ImageBackground>
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
  textContainer: { alignItems: "center", fontSize: 20 },
  inTextContainer: { alignItems: "center", fontSize: 10, marginTop: 20 },
  title: { fontWeight: "bold", fontSize: 22 },
  contentText: { fontSize: 15 },
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
  shape: {
    height: 70,
  },
  image: {
    marginVertical: 5,
    marginHorizontal: 10,
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  clickBox: {
    alignItems: "center",
    borderWidth: 1,
  },
  clickText: {
    borderWidth: 1,
  },
  tagStyle: { top: 20, right: 30, fontSize: 30 },
});
export default PersonalRecommendationScreen;
