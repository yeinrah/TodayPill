import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useState } from "react";
import { accent, primary, secondary } from "../../../constants/Colors";
import RoutineItemDetail from "./RoutineItemDetail";

// export interface PillScheduleProps {
//   selectedDate: string;
// }

const dummyRoutineDetail = [
  {
    time: "07:30",
    days: [0, 1, 2, 3, 4, 5, 6],
    brand: "나우푸드",
    pillName: "칼슘&마그네슘",
    imgUrl:
      "https://contents.lotteon.com/itemimage/LO/14/19/59/10/62/_1/41/95/91/06/3/LO1419591062_1419591063_1.jpg",
    cnt: 1,
  },
  {
    time: "11:30",
    days: [0, 2, 4, 6],
    brand: "고려은단",
    pillName: "비타민 C",
    imgUrl: "https://dimg.donga.com/wps/NEWS/IMAGE/2014/09/27/66754815.1.jpg",
    cnt: 1,
  },
  {
    time: "17:30",
    days: [5, 6],
    brand: "나우푸드",
    pillName: "오메가 3",
    imgUrl:
      "https://contents.lotteon.com/itemimage/LO/14/19/59/10/62/_1/41/95/91/06/3/LO1419591062_1419591063_1.jpg",
    cnt: 1,
  },
];

export default function RoutineDetailList() {
  const [pillRoutineDetail, setPillRoutineDetail] =
    useState(dummyRoutineDetail);

  return (
    <View style={styles.pillRoutineContainer}>
      {pillRoutineDetail.map((rout, idx) => (
        <RoutineItemDetail
          key={idx}
          time={rout.time}
          days={rout.days}
          brand={rout.brand}
          name={rout.pillName}
          image={rout.imgUrl}
          cnt={rout.cnt}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  pillRoutineContainer: {
    // minHeight: 200,
    // marginTop: 10,
  },
});
