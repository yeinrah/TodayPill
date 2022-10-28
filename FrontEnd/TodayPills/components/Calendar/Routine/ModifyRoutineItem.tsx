import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import { useState } from "react";
import { accent, primary, secondary } from "../../../constants/Colors";
import PillCard from "../../UI/PillCard";
import { Ionicons } from "@expo/vector-icons";
import { Entypo, AntDesign } from "@expo/vector-icons";

const dummyRoutine = {
  time: "17:30",
  days: [5, 6],
  brand: "나우푸드",
  pillName: "비타민 C 1000",
  imgUrl:
    "https://contents.lotteon.com/itemimage/LO/14/19/59/10/62/_1/41/95/91/06/3/LO1419591062_1419591063_1.jpg",
  cnt: 1,
};

export default function ModifyRoutineItem() {
  const [routineItem, setRoutineItem] = useState(dummyRoutine);
  const [pillCnt, setPillCnt] = useState(routineItem.cnt);

  const decreaseHandler = () => {
    setPillCnt((pillCnt) => (pillCnt > 1 ? pillCnt - 1 : 1));
  };
  const increaseHandler = () => {
    setPillCnt((pillCnt) => (pillCnt < 20 ? pillCnt + 1 : 20));
  };
  return (
    <ScrollView style={styles.outerContainer}>
      <PillCard height={400} width={"90%"} bgColor={"#edfbf9"}>
        <View style={styles.cardInnerContainer}>
          <View style={styles.imageOuterContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: routineItem.imgUrl }}
                style={styles.pillImage}
              />
            </View>
          </View>
          <View style={styles.pillDetailContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>제품명</Text>
              <Text style={styles.pillName}>{routineItem.pillName}</Text>
              <View style={styles.separator} />
            </View>
            <View style={styles.cntContainer}>
              <Text style={styles.name}>섭취 횟수</Text>
              <View style={styles.modifyCnt}>
                <Pressable onPress={decreaseHandler}>
                  <Entypo name="circle-with-minus" size={27} color={accent} />
                </Pressable>
                <Text style={styles.cnt}>{pillCnt}</Text>
                <Pressable onPress={increaseHandler}>
                  <Entypo name="circle-with-plus" size={27} color={accent} />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </PillCard>

      <View style={styles.takenTimeContainer}>
        <PillCard height={150} width={"90%"} bgColor={"#edfbf9"}>
          <View style={styles.takenTimeInnerContainer}>
            <View style={styles.dayAlarmContainer}>
              <Text style={styles.name}>섭취 요일</Text>

              <Pressable onPress={increaseHandler} style={styles.modifyDay}>
                <Text style={styles.dayName}>매일</Text>
                <AntDesign name="right" size={24} color="black" />
              </Pressable>
            </View>
            <View style={{ alignItems: "center" }}>
              <View style={[styles.separator, { width: "90%" }]} />
            </View>
            <View style={styles.dayAlarmContainer}>
              <Text style={styles.name}>섭취 시간</Text>

              <Pressable onPress={increaseHandler} style={styles.modifyDay}>
                <Text style={styles.cnt}>800</Text>
                <AntDesign name="right" size={24} color="black" />
              </Pressable>
            </View>
          </View>
        </PillCard>
      </View>

      <View style={styles.takenTimeContainer}>
        <PillCard height={150} width={"90%"} bgColor={"#edfbf9"}></PillCard>
      </View>
      {/* <Text style={styles.takenDate}></Text>
      <View style={styles.pillRoutineContainer}>
     
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 15,
  },

  cardInnerContainer: {
    flex: 1,
  },
  imageOuterContainer: {
    alignItems: "center",
    flex: 3,
    marginVertical: 20,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
  },
  pillImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  pillDetailContainer: {
    flex: 2,
    // width: "55%",
    marginHorizontal: 20,
    // // height: "80%",
    // justifyContent: "space-between",
  },
  nameContainer: {
    flex: 1,
  },
  cntContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingTop: 20,
    // marginTop: 10,

    paddingHorizontal: 5,
  },
  modifyCnt: {
    flexDirection: "row",
  },

  name: {
    fontSize: 15,
    // fontWeight: "bold",
  },
  pillName: {
    marginVertical: 7,
    fontSize: 23,
    fontWeight: "bold",
  },
  separator: {
    // marginVertical: 10,
    backgroundColor: "#B7B7B7",
    height: 1,
    width: "100%",
  },
  cnt: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginTop: -3,
  },
  time: {
    fontSize: 15,
    fontWeight: "900",
    color: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 25,
  },
  takenTimeContainer: {
    marginVertical: 10,
  },
  takenTimeInnerContainer: {
    flex: 1,
  },

  dayAlarmContainer: {
    paddingHorizontal: 13,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modifyDay: {
    flexDirection: "row",
  },
  dayName: {
    fontWeight: "900",
    fontSize: 15,
  },
});
