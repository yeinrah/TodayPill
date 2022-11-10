import { StyleSheet, View, Text, Image, Pressable } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { accent, primary, secondary } from "../../../constants/Colors";
import PillCard from "../../UI/PillCard";
import { getDayOfWeekString } from "../../functions/getDayOfWeekString";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types";

export interface RoutineDetailProps {
  key: number;
  time: string;
  days: Array<number>;
  image: string;
  brand: string;
  name: string;
  cnt: number;
}

export default function RoutineItemDetail({
  time,
  days,
  image,
  brand,
  name,
  cnt,
}: RoutineDetailProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [takenDaysStr, setTakenDaysStr] = useState("");
  let takenDays = "";

  const modifyRoutineHandler = () => {
    // --------------------------------------------###############################
    // 진짜 supplementId 추가하긱!!!!!!!!!!!!!!!
    navigation.navigate("ModifyRoutine", { pillId: 1, update: "true" });
  };

  // useFocusEffect 쓰기!!!!!!!!!!!!!!!!!!!!!!!

  useEffect(() => {
    if (days.length === 7) {
      takenDays = "매일";
    } else {
      for (let eachDay of days) {
        takenDays += getDayOfWeekString(eachDay) + " ";
        // setTakenDays(getDayOfWeekString(eachDay) + " ");
      }
    }
    setTakenDaysStr(takenDays);
  }, []);

  return (
    <View style={styles.outerContainer}>
      <PillCard height={85} width={"90%"} bgColor={"white"}>
        <Pressable
          android_ripple={{ color: "#4E736F" }}
          style={styles.cardContainer}
          onPress={modifyRoutineHandler}
        >
          <View style={styles.routineContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.pillImage} />
            </View>
            <View style={styles.pillDetailContainer}>
              <View>
                <Text style={styles.brand}>{brand}</Text>
                <Text style={styles.name}>{name}</Text>
              </View>
              <View style={styles.dayTimeContainer}>
                <Text style={styles.days}>{takenDaysStr}</Text>
                <View style={styles.timeContainer}>
                  <Text style={styles.time}>{time}</Text>
                </View>
              </View>
            </View>
            <View style={styles.rightSideContainer}>
              <FontAwesome name="trash-o" size={22} color="#B7B7B7" />
              <View style={styles.cntContainer}>
                <Text style={styles.cnt}>{cnt}정</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </PillCard>

      {/* <Text style={styles.takenDate}></Text>
      <View style={styles.pillRoutineContainer}>
     
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 5,
  },
  // buttonOuterContainer: {
  //   flex: 1,
  //   borderRadius: 30,

  //   margin: 4,
  //   overflow: "hidden",
  //   marginVertical: 10,
  //   elevation: 5,
  // },
  cardContainer: {
    flex: 1,
    // overflow: "hidden",
    // flex: 1,
    // backgroundColor: "#edfbf9",
    // backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
    // borderWidth: 2,
    // elevation: 4,
    // height: 75,
    // marginHorizontal: 30,
    // marginVertical: 10,
    // borderRadius: 10,
  },
  routineContainer: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "space-around",
    padding: 10,
  },
  imageContainer: {
    width: "20%",
    height: "100%",
  },
  pillImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  pillDetailContainer: {
    width: "55%",
    marginHorizontal: 18,
    paddingVertical: 5,
    // height: "80%",
    justifyContent: "space-between",
  },

  brand: {
    color: "#B7B7B7",
    fontSize: 8,
    fontWeight: "bold",
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
  },
  cntContainer: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: "#B7B7B7",
    borderRadius: 20,
  },
  cnt: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    paddingHorizontal: 3,
  },
  dayTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 7,
  },
  days: {
    marginLeft: 2,
    marginTop: 5,
    marginBottom: 2,
    fontSize: 11,
    fontWeight: "900",
    color: "rgba(0, 0, 0, 0.5)",
    // paddingHorizontal: 25,
  },

  timeContainer: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginHorizontal: 6,
    borderRadius: 5,
    // width: "25%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(235, 196, 217, 0.5)",
  },
  time: {
    fontSize: 12,
    // fontWeight: "900",
    color: "#FF78A3",
    // paddingHorizontal: 25,
  },
  rightSideContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 2,
  },
});
