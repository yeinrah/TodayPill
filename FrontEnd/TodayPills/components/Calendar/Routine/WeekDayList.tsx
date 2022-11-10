import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useState, useCallback } from "react";
import WeekDay from "./WeekDay";
import { accent, primary, secondary } from "../../../constants/Colors";
import CustomBtn from "../../UI/CustomBtn";
import { useFocusEffect } from "@react-navigation/native";

const weekDays = ["월", "화", "수", "목", "금", "토", "일"];

export default function WeekDayList(props: any) {
  const daysSet = new Set();
  const [selectedDays, setSelectedDays] = useState(daysSet);
  // const [selectedDays, setSelectedDays] = useState([]);
  const [submittedDays, setSubmittedDays] = useState([]);

  const [isSelectCompleted, setIsSelectCompleted] = useState(false);
  // if (isSelectCompleted) {
  //   setSubmittedDays([...selectedDays]);
  // }

  console.log(submittedDays, "submitted");
  console.log(selectedDays, "selected");

  const submitDays = [...selectedDays].sort();
  props.addRoutineDaysHandler(submitDays.join(", "));
  const daySelectHandler = (dayId: number) => {
    setSelectedDays((selectedDays) => selectedDays.add(dayId));
    // setSelectedDays((selectedDays) => [...selectedDays, dayId]);
    // setSubmittedDays([...selectedDays]);
    // setSubmittedDays(submitDays);
    setIsSelectCompleted(false);
    // props.addRoutineDaysHandler(submitDays.join(", "));

    // setSelectedDays([]);
    // setSelectedDays((selectedDays) => selectedDays.push(dayId));
  };

  const deleteDayHandler = (dayId: number) => {
    setSelectedDays((selectedDays) => {
      selectedDays.delete(dayId);
      return selectedDays;
    });
    // props.addRoutineDaysHandler(submitDays.join(", "));
    // setSubmittedDays(submitDays);
  };
  useFocusEffect(
    useCallback(() => {
      // return () => {
      // };
    }, [])
  );

  const daySelectCompleteHandler = () => {
    console.warn("요일 수정 완료");
    setIsSelectCompleted(true);
  };
  return (
    <View style={styles.outerContainer}>
      <View style={styles.dayListContainer}>
        {weekDays.map((day, idx) => (
          <WeekDay
            key={idx}
            day={day}
            dayId={idx + 1}
            daySelectHandler={daySelectHandler}
            deleteDayHandler={deleteDayHandler}
            isDaysSelectCompleted={isSelectCompleted}
          />
        ))}
      </View>
      <View style={styles.btn}>
        <Text>{submitDays.join(", ")}</Text>
        <Pressable
          onPress={daySelectCompleteHandler}
          // style={styles.btnContainer}
        >
          {({ pressed }) => (
            <Text
              style={[
                styles.confirmText,
                { color: pressed ? "black" : accent },
              ]}
            >
              완료
              {/* {pressed ? 'Pressed!' : 'Press Me'} */}
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    // backgroundColor: "red",
  },
  dayListContainer: {
    flex: 7,
    flexDirection: "row",

    marginHorizontal: 10,

    // marginBottom: 4,
    alignItems: "center",
    justifyContent: "space-between",
    // minHeight: 200,
    // marginTop: 10,
  },
  btn: {
    flex: 2,
    // backgroundColor: "red",
    paddingHorizontal: 20,
    paddingBottom: 10,
    // marginBottom: 5,
    flexDirection: "row-reverse",
    alignItems: "center",
  },

  confirmText: {
    fontSize: 15,
    fontWeight: "900",
  },
});
