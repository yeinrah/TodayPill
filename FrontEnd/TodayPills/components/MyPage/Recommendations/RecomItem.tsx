import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Button,
  ScrollView,
} from "react-native";

export interface RecomItemProps {
  nutName: string;
  idx: number;
}

export default function RecomItem({ nutName, idx }: RecomItemProps) {
  // const [pickedPills, setPickedPills] = useState([]);

  return (
    <View key={idx} style={styles.outerContainer}>
      <View style={styles.nutContainer}>
        <FontAwesome5 name="pills" size={22} color="#8EE8DE" />
        <Text style={styles.nutrition}>{nutName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {},
  nutContainer: {
    // width: "90%",
    flexDirection: "row",
    backgroundColor: "#FFEFFC",
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 5,
  },
  nutrition: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
    // color: "white",
  },
  // name: {},
});
