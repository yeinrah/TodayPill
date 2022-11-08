import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { fetchMyPicks } from "../../API/likeAPI";
import { fetchAllSupplements } from "../../API/supplementAPI";
import PillItem, { PillProps } from "../Pills/PillItem";

export default function MyPickPills() {
  const [pickedPills, setPickedPills] = useState([]);
  const [userId, setUserId] = useState(0);
  const [disLiked, setDisLiked] = useState(false);

  const getMyPicks = async () => {
    const currentUserId = await AsyncStorage.getItem("@storage_UserId");
    setUserId(parseInt(currentUserId));
    const myPicks = await fetchMyPicks(parseInt(currentUserId));
    setPickedPills(myPicks);
  };
  const dislikeHandler = () => {
    setDisLiked((disliked) => !disliked);
  };

  useFocusEffect(
    useCallback(() => {
      getMyPicks();

      // return () => {

      // };
    }, [userId, disLiked])
  );

  // useEffect(() => {
  // getMyPicks();
  // }, []);

  return (
    <View style={styles.likeContainer}>
      <View style={styles.myPickContainer}>
        <View style={styles.heartContainer}>
          <Image
            // source={require("../../assets/images/hearton.png")}
            source={require("../../assets/images/heartOn1.png")}
            style={styles.heart}
          />
        </View>
        <Text style={styles.name}>나의 Pick</Text>
      </View>

      <View style={styles.outerContainer}>
        <ScrollView style={styles.cardsContainer} horizontal={true}>
          {pickedPills.length === 0 ? (
            <View style={styles.textContainer}>
              <Text style={styles.emptyText}>
                하트를 눌러 영양제를 찜해보세요!
              </Text>
            </View>
          ) : (
            pickedPills.map((pill, idx) => (
              <PillItem
                key={pill.supplementId}
                pillId={pill.supplementId}
                userId={userId}
                image={pill.image}
                brand={pill.brand}
                pill={pill.name}
                onPressChange={dislikeHandler}
              />
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  likeContainer: {
    marginVertical: 10,
    // // flex: 2,
    // width: "100%",
    // // height: "30%",
    // height: 150,
    // alignItems: "center",
    // justifyContent: "center",
  },

  myPickContainer: {
    flexDirection: "row",
  },
  heartContainer: {
    // width: 50,
    // height: 50,
    // paddingBottom: 10,
    // marginBottom: 5,
    // position: "absolute",
    // bottom: 0,
    // right: -5,
  },
  heart: {
    width: 45,
    height: 45,
    // paddingBottom: 20,
    // width: "100%",
    // height: "100%",
    // resizeMode: "contain",
  },
  name: {
    fontSize: 24,
    fontWeight: "900",
    marginTop: 5,
  },
  outerContainer: {
    marginHorizontal: 5,

    marginVertical: 5,
    // overflow: "hidden",
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 5,
    marginBottom: 10,
  },

  textContainer: {
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  emptyText: {
    fontSize: 18,
    color: "#B7B7B7",
    // fontWeight: "bold",
    // marginLeft: 5,
    // marginBottom: 10,
  },
  cardsContainer: {
    flexDirection: "row",
    // justifyContent: "space-around",
    minHeight: 100,
    paddingVertical: 10,
    marginTop: 10,
    paddingHorizontal: 5,
    backgroundColor: "#ECF6F4",
    borderRadius: 10,
    elevation: 5,
  },
});
