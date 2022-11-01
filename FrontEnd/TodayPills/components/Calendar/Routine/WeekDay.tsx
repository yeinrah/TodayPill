import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useState } from "react";

export interface WeekDayProps {
  day: string;
}

export default function WeekDay({ day }: WeekDayProps) {
  return <View style={styles.pillRoutineContainer}></View>;
}

const styles = StyleSheet.create({
  pillRoutineContainer: {
    // minHeight: 200,
    // marginTop: 10,
  },
});
