import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";

// import EditScreenInfo from "../components/EditScreenInfo";
// import { Text, View } from "../components/Themed";

import { RootStackScreenProps } from "../types";
import BackgroundScreen from "./BackgroundScreen";
import Card from "../components/UI/Card";
import GoBackBtn from "../components/UI/GoBackBtn";
import { useState } from "react";
import { accent, primary } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import RoutineDetailList from "../components/Calendar/Routine/RoutineDetailList";
import ModifyRoutineItem from "../components/Calendar/Routine/ModifyRoutineItem";

export default function ModifyRoutineScreen({ navigation, route }: any) {
  // RootStackScreenProps<"MyPills">
  const [pillId, setPillId] = useState(route.pillId);

  // const addRoutinePillHandler = () => {
  //   navigation.navigate("Search", { userId: 1 });
  // };

  return (
    <BackgroundScreen>
      <Card>
        <View style={styles.container}>
          <View style={styles.backBtn}>
            <GoBackBtn onPress={() => navigation.pop()} size={33} />
          </View>
          <View style={styles.myPillsContainer}>
            <View style={styles.titleContainer}>
              <View>
                <Text style={styles.text}>영양제 섭취 수정</Text>
                {/* <Text style={styles.text}>{pillId}</Text> */}
              </View>
            </View>
            <ModifyRoutineItem />
          </View>
        </View>
      </Card>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 20,
    marginTop: 10,
    marginBottom: 80,
    marginHorizontal: 20,
  },
  backBtn: {
    marginTop: 10,
  },
  myPillsContainer: {
    marginVertical: 10,
  },
  titleContainer: {
    margin: 10,
  },

  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
