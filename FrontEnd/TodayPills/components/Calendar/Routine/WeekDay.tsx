import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useState, useCallback } from "react";
import { primary } from "../../../constants/Colors";
import { useFocusEffect } from "@react-navigation/native";
import { boldWelcome } from "../../Data/fontFamilyObject";

export interface WeekDayProps {
  day: string;
  dayId: number;
  isDaysSelectCompleted: boolean;
  daySelectHandler: (dayId: number) => void;
  deleteDayHandler: (dayId: number) => void;
  submitChangeHandler: () => void;

  // daySelectHandler: (dayObj: object) => void;
}

export default function WeekDay({
  day,
  dayId,
  daySelectHandler,
  deleteDayHandler,
  isDaysSelectCompleted,
  submitChangeHandler,
}: WeekDayProps) {
  const [isPressed, setIsPressed] = useState(false);
  // const [dayObject, setDayObject] = useState({});
  // dayObject[dayId] = isPressed;
  // console.log(dayObject);
  if (isDaysSelectCompleted && isPressed) {
    daySelectHandler(dayId);
  }
  if (isDaysSelectCompleted && !isPressed) {
    deleteDayHandler(dayId);
  }

  const pressDayHandler = () => {
    submitChangeHandler;
    submitChangeHandler();
    setIsPressed(true);
    // changeDaySelectHandler(true);
  };
  const unpressDayHandler = () => {
    submitChangeHandler();
    setIsPressed(false);

    // changeDaySelectHandler(false);
    // daySelectHandler({ dayId: false });
  };
  useFocusEffect(
    useCallback(() => {
      return () => {
        // daySelectHandler(dayObject);
      };
    }, [])
  );

  return (
    // <Pressable
    // //       onPress={() => navigation.navigate("Modal")}
    // //       style={({ pressed }) => ({
    // //         opacity: pressed ? 0.5 : 1,
    // //       })}
    // //     >
    // //       <FontAwesome
    // //         name="info-circle"
    // //         size={25}
    // //         color={Colors[colorScheme].text}
    // //         style={{ marginRight: 15 }}
    // //       />
    // //     </Pressable>
    <Pressable
      onPress={isPressed ? unpressDayHandler : pressDayHandler}
      // android_ripple={{ color: "#A86A9C" }}
      style={styles.dayContainer}
    >
      <View
        style={[
          styles.btnContainer,
          { backgroundColor: isPressed ? primary : "#CCCCCC" },
        ]}
      >
        <Text style={{ ...styles.text, ...boldWelcome }}>{day}</Text>
      </View>

      {/* {({ pressed }) => (
        <View
          style={[
            styles.btnContainer,
            { backgroundColor: pressed ? primary : "#CCCCCC" },
          ]}
        >
          <Text style={styles.text}>{day}</Text>
        </View>
      )} */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  dayContainer: {},
  btnContainer: {
    borderRadius: 10,
    // backgroundColor: primary,
    paddingHorizontal: 10,
    paddingVertical: 8,
    overflow: "hidden",

    // minHeight: 200,
    // marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 17,
    // fontWeight: "bold",
  },
});
