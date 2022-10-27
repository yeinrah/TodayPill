import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { accent, primary, secondary } from "../../constants/Colors";

export interface RoutineProps {
  key: number;
  time: string;
  image: string;
  brand: string;
  name: string;
  cnt: number;
}

export default function RoutineItem({
  time,
  image,
  brand,
  name,
  cnt,
}: RoutineProps) {
  const [isChecked, setIsChecked] = useState(false);
  // const [pillRoutine, setPillRoutine] = useState(dummyRoutine);
  const deleteCheckHandler = () => {
    setIsChecked(false);
  };
  const checkHandler = () => {
    setIsChecked(true);
  };
  return (
    <View style={styles.outerContainer}>
      <View>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.routineContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.pillImage} />
          </View>
          <View style={styles.pillDetailContainer}>
            <Text style={styles.brand}>{brand}</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.cnt}>{cnt}정</Text>
          </View>
          <View style={styles.check}>
            {isChecked ? (
              <Pressable onPress={deleteCheckHandler}>
                <AntDesign name="checkcircle" size={30} color={primary} />
              </Pressable>
            ) : (
              <Pressable onPress={checkHandler}>
                <AntDesign name="checkcircleo" size={30} color="#B7B7B7" />
              </Pressable>
            )}
          </View>
        </View>
      </View>
      {/* <Text style={styles.takenDate}></Text>
      <View style={styles.pillRoutineContainer}>
     
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#edfbf9",
    // backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
    // borderWidth: 2,
    elevation: 4,
    height: 75,
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
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
    // height: "80%",
    justifyContent: "space-between",
  },
  check: {
    // width: "20%",
    // height: "100%",
    justifyContent: "center",
  },
  brand: {
    color: "#B7B7B7",
    fontSize: 10,
    fontWeight: "bold",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
  },
  cnt: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 10,
    fontWeight: "bold",
    paddingHorizontal: 3,
  },
  time: {
    fontSize: 15,
    fontWeight: "900",
    color: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 25,
  },
  pillRoutineContainer: {
    minHeight: 200,
  },
});
