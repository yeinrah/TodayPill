import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useCallback } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { getUserInfoByEmail } from "../../../API/userAPI";
import PillItem, { PillProps } from "../../Pills/PillItem";
import RecomItem from "./RecomItem";

export default function RecomNutritions() {
  const [myNutritions, setMyNutritions] = useState([]);
  const [userId, setUserId] = useState(0);
  const getRecomNut = async () => {
    // const currentUserId = await AsyncStorage.getItem("@storage_UserId");
    // setUserId(parseInt(currentUserId));
    const myEmail = await AsyncStorage.getItem("@storage_UserEmail");
    const userInfo = await getUserInfoByEmail(myEmail);
    setMyNutritions(userInfo.recommendNutrients);
    // setMyNutritions(myNutrients);
  };
  // const [pickedPills, setPickedPills] = useState([]);
  useFocusEffect(
    useCallback(() => {
      getRecomNut();

      // return () => {

      // };
    }, [userId])
  );
  return (
    <View style={styles.likeContainer}>
      <View style={styles.myPickContainer}>
        <Image
          // source={require("../../assets/images/hearton.png")}
          source={require("../../../assets/images/likeIcon.png")}
          style={styles.pill}
        />

        <Text style={styles.name}>추천 영양성분</Text>
      </View>

      <View>
        <View style={styles.cardscontainer}>
          {myNutritions.map((nut, idx) => (
            <RecomItem nutName={nut} key={idx} id={idx} />

            // <View style={styles.outerContainer}>
            //   <View key={idx} style={styles.nutContainer}>
            //     <Text style={styles.nutrition}>{nut}</Text>
            //   </View>
            // </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  likeContainer: {
    marginHorizontal: 15,
    marginTop: 10,
    // backgroundColor: "red",
    // marginVertical: 10,
    // // flex: 2,
    // width: "100%",
    // // height: "30%",
    // height: 150,
    // alignItems: "center",
    // justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "900",
    marginTop: 5,
  },
  myPickContainer: {
    flexDirection: "row",
  },
  pill: {
    width: 45,
    height: 45,
    // paddingBottom: 20,
    // width: "100%",
    // height: "100%",
    // resizeMode: "contain",
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 5,
    marginBottom: 10,
  },
  cardscontainer: {
    // justifyContent: "space-around",
    padding: 10,
    marginTop: 10,
    // backgroundColor: "#ECF6F4",
    // borderRadius: 10,
    // elevation: 5,
  },
  outerContainer: {
    backgroundColor: "rgba(226, 195, 220, 0.26)",
  },
  nutContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    // elevation: 10,
    borderRadius: 20,
  },
  nutrition: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
