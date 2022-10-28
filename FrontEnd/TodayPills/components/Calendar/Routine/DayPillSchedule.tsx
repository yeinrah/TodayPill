import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteZero } from "../../functions/deleteZero";
import { getDayOfWeek } from "../../functions/getDayOfWeek";
import { useState } from "react";
import RoutineItem from "./RoutineItem";
import { accent, primary, secondary } from "../../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

export interface PillScheduleProps {
  selectedDate: string;
}

const dummyRoutine = [
  {
    time: "07:30",
    brand: "나우푸드",
    pillName: "칼슘&마그네슘",
    imgUrl:
      "https://contents.lotteon.com/itemimage/LO/14/19/59/10/62/_1/41/95/91/06/3/LO1419591062_1419591063_1.jpg",
    cnt: 1,
  },
  {
    time: "11:30",
    brand: "고려은단",
    pillName: "비타민 C",
    imgUrl: "https://dimg.donga.com/wps/NEWS/IMAGE/2014/09/27/66754815.1.jpg",
    cnt: 1,
  },
  {
    time: "17:30",
    brand: "나우푸드",
    pillName: "오메가 3",
    imgUrl:
      "https://contents.lotteon.com/itemimage/LO/14/19/59/10/62/_1/41/95/91/06/3/LO1419591062_1419591063_1.jpg",
    cnt: 1,
  },
];

export default function DayPillSchedule({ selectedDate }: PillScheduleProps) {
  const navigation = useNavigation<any>();
  const [pillRoutine, setPillRoutine] = useState(dummyRoutine);
  const dayOfWeek = getDayOfWeek(selectedDate);
  const dayString = `${deleteZero(selectedDate.slice(5, 7))}월 ${deleteZero(
    selectedDate.slice(8, 10)
  )}일 ${dayOfWeek}요일`;

  const addRoutineHandler = () => {
    navigation.navigate("MyPills", { userId: 1 });
  };

  return (
    <View style={styles.container}>
      <View style={styles.eachDateContainer}>
        <View style={styles.takenDateContainer}>
          <Text style={styles.takenDate}>{dayString}</Text>
        </View>
        <Pressable onPress={addRoutineHandler}>
          <MaterialCommunityIcons
            name="pencil-circle"
            size={35}
            color={primary}
          />
        </Pressable>
      </View>
      <View style={styles.pillRoutineContainer}>
        {pillRoutine.map((rout, idx) => (
          <RoutineItem
            key={idx}
            time={rout.time}
            brand={rout.brand}
            name={rout.pillName}
            image={rout.imgUrl}
            cnt={rout.cnt}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    // alignItems: "center",
    // justifyContent: "center",
    // borderWidth: 2,
    // backgroundColor: "red",
    // minHeight: 200,
  },
  eachDateContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  takenDateContainer: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 30,
    // backgroundColor: "#FFEFFC",
    backgroundColor: accent,
  },
  takenDate: {
    fontSize: 24,
    fontWeight: "900",
    color: "white",
    // color: accent,
    // paddingHorizontal: 25,
  },
  pillRoutineContainer: {
    minHeight: 200,
    marginTop: 10,
  },
});
