import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useState } from "react";
import WeekDay from "./WeekDay";

const weekDays = ["월", "화", "수", "목", "금", "토", "일"];

export default function WeekDayList() {
  return (
    <View style={styles.dayListContainer}>
      {weekDays.map((day, idx) => (
        <WeekDay key={idx} day={day} idx={idx} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dayListContainer: {
    flex: 1,
    flexDirection: "row",

    marginHorizontal: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    // minHeight: 200,
    // marginTop: 10,
  },
});
