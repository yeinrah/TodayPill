import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Button,
  ScrollView,
} from "react-native";
import Card from "../components/UI/Card";
import { primary } from "../constants/Colors";

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
        <View style={styles.myInfoContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>정서님</Text>
            <Button title="수정" />
          </View>
          <View style={styles.ageContainer}>
            <Text style={styles.age}>만 26세 남성</Text>
          </View>
        </View>

        <View style={styles.myLikeContainer}>
          <Text style={styles.name}>나의 Pick</Text>
        </View>
        <View style={styles.nutrisContainer}>
          <Text style={styles.name}>추천 영양성분</Text>
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.name}>영양성분 추천 다시 받기!</Text>
        </View>
        {/* <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          /> */}
        {/* <EditScreenInfo path="/screens/HomeScreen.tsx" /> */}
      </Card>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  myInfoContainer: {
    flex: 1,
    width: "80%",
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
  myLikeContainer: {
    flex: 2,
    width: "100%",
    borderTopWidth: 2,
    borderTopColor: primary,
    alignItems: "center",
    justifyContent: "center",
  },
  nutrisContainer: {
    flex: 5,
    width: "100%",
    borderTopWidth: 2,
    borderTopColor: primary,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flex: 1,
    width: "100%",
    borderTopWidth: 2,
    borderTopColor: primary,
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
