import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Button,
  ScrollView,
} from "react-native";
import MyPickPills from "../components/MyPage/MyPickPills";
import Card from "../components/UI/Card";
import CustomBtn from "../components/UI/CustomBtn";
import { primary, secondary } from "../constants/Colors";

// import EditScreenInfo from "../components/EditScreenInfo";
// import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import BackgroundScreen from "./BackgroundScreen";

export default function MyPageScreen({
  navigation,
}: RootTabScreenProps<"MyPage">) {
  return (
    <BackgroundScreen>
      <Card>
        <ScrollView style={styles.scrollView}>
          <View style={styles.myInfoContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>정서님</Text>
              <Button title="수정" />
            </View>
            <View style={styles.ageContainer}>
              <Text style={styles.age}>만 26세 남성</Text>
            </View>
          </View>
          <View style={styles.nutrBtnContainer}>
            <View style={styles.nutrBtn}>
              <CustomBtn
                buttonColor={"#8EE8DE"}
                title={"내가 섭취중인 영양제"}
                titleColor={"#fff"}
                buttonWidth={"70%"}
                onPress={() => console.log("btn 클릭")}
              />
              {/* <Text style={styles.name}>내가 섭취 중인 영양제</Text> */}
            </View>
          </View>

          <View style={styles.myLikeContainer}>
            <MyPickPills />
          </View>
          <View style={styles.nutrisContainer}>
            <Text style={styles.name}>추천 영양성분</Text>
          </View>
          <View style={styles.btnContainer}>
            <Text style={styles.name}>영양성분 추천 다시 받기!</Text>
          </View>
        </ScrollView>
        {/* <View
            style={styles.separator}
            darkColor="rgba(255,255,255,0.1)"
            lightColor="#eee"
          /> */}
        {/* <EditScreenInfo path="/screens/HomeScreen.tsx" /> */}
      </Card>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    // backgroundColor: "red",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 10,
    // padding: 20,
  },

  myInfoContainer: {
    // flex: 1,
    width: "100%",
    height: 90,
    // backgroundColor: "yellow",
    // height: 600,
    // borderTopWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 20,
  },
  nameContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    // padding: 10,
  },
  ageContainer: {
    width: "100%",
    // padding: 10,
  },
  nutrBtnContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  nutrBtn: {
    width: "90%",
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: "#B7B7B7",
    // alignItems: "center",
    // justifyContent: "center",
  },
  myLikeContainer: {
    // flex: 2,
    width: "100%",
    // height: "30%",
    height: 150,
    paddingVertical: 10,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  nutrisContainer: {
    // flex: 5,
    width: "100%",
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    // flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "900",
  },
  age: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#B7B7B7",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
// });
