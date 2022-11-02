import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useState } from "react";
import { primary } from "../../../constants/Colors";

export interface WeekDayProps {
  day: string;
  idx: number;
}

export default function WeekDay({ day, idx }: WeekDayProps) {
  const [isPressed, setIsPressed] = useState(false);
  const pressDayHandler = () => {
    setIsPressed(true);
  };
  const unpressDayHandler = () => {
    setIsPressed(false);
  };
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
        <Text style={styles.text}>{day}</Text>
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
    paddingVertical: 7,
    overflow: "hidden",

    // minHeight: 200,
    // marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});
