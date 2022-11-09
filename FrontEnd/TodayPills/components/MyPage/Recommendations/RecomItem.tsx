import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import pillIcons from "../../Data/pillIcons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface RecomItemProps {
  nutName: string;
  key: number;
  id: number;
}

export default function RecomItem({ nutName, id }: RecomItemProps) {
  // const [pickedPills, setPickedPills] = useState([]);
  const navigation = useNavigation<any>();
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={async () => {
          console.log(nutName);
          await AsyncStorage.setItem("@storage_nowNutrient", nutName);
          navigation.navigate("NutrientDetailScreen", {
            nutrient: [nutName],
          });
        }}
      >
        <View style={styles.nutContainer}>
          {/* <FontAwesome5 name="pills" size={22} color="#8EE8DE" /> */}
          <Image
            // source={require("../../assets/images/hearton.png")}
            source={pillIcons[id]}
            style={styles.icon}
          />
          <View style={styles.textContainer}>
            <Text style={styles.nutrition}>{nutName}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    height: 70,
  },
  nutContainer: {
    // width: "90%",
    flexDirection: "row",
    backgroundColor: "#FFEFFC",
    borderRadius: 20,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  nutrition: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
    // color: "white",
  },
  icon: {
    width: 40,
    height: 40,
  },
});
