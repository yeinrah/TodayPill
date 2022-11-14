import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useState, useCallback } from "react";
import WeekDay from "./WeekDay";
import { accent, primary, secondary } from "../../../constants/Colors";
import CustomBtn from "../../UI/CustomBtn";
import { useFocusEffect } from "@react-navigation/native";
import { getDaysName } from "../../functions/getDaysName";
import { boldWelcome } from "../../Data/fontFamilyObject";

const weekDays = ["월", "화", "수", "목", "금", "토", "일"];

export default function WeekDayList(props: any) {
  const daysSet = new Set();
  const [selectedDays, setSelectedDays] = useState(daysSet);

  const [isSelectCompleted, setIsSelectCompleted] = useState(false);
  // isSelectCompleted ? props.getSubmitted(true) : props.getSubmitted(false);

  const submitDays = [...selectedDays].sort();
  const submitDaysNames = submitDays.map(
    (eachDayId: number) => weekDays[eachDayId - 1]
  );
  const finalSubmitDaysNames = getDaysName(submitDaysNames);
  // let finalSubmitDaysNames: string = submitDaysNames.join(", ");
  // if (submitDaysNames.length === 7) {
  //   finalSubmitDaysNames = "매일";
  // } else if (finalSubmitDaysNames === "월, 화, 수, 목, 금") {
  //   finalSubmitDaysNames = "주중";
  // } else if (finalSubmitDaysNames === "토, 일") {
  //   finalSubmitDaysNames = "주말";
  // }

  props.addRoutineDaysHandler(submitDays.join(", "));
  // props.onChangeDaysName(finalSubmitDaysNames);

  const daySelectHandler = (dayId: number) => {
    setSelectedDays((selectedDays) => selectedDays.add(dayId));
    // props.getSubmitted(false);
    setIsSelectCompleted(false);
  };

  const deleteDayHandler = (dayId: number) => {
    setSelectedDays((selectedDays) => {
      selectedDays.delete(dayId);
      return selectedDays;
    });
  };
  useFocusEffect(
    useCallback(() => {
      // return () => {
      // };
    }, [])
  );

  props.onChangeDaysName(finalSubmitDaysNames);

  const daySelectCompleteHandler = () => {
    setIsSelectCompleted(true);
    props.getSubmitted(true);
  };

  const submitChangeHandler = () => {
    props.getSubmitted(false);
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
            submitChangeHandler={submitChangeHandler}
            isDaysSelectCompleted={isSelectCompleted}
          />
        ))}
      </View>
      <View style={styles.btn}>
        {/* <Text>{submitDays.join(", ")}</Text> */}
        <Pressable
          onPress={daySelectCompleteHandler}
          // style={styles.btnContainer}
        >
          {({ pressed }) => (
            <Text
              style={{
                ...styles.confirmText,
                color: pressed ? "black" : accent,
                ...boldWelcome,
              }}
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
    letterSpacing: 1,
    // fontWeight: "900",
  },
});
