import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Button,
  ScrollView,
} from "react-native";
import PillItem, { PillProps } from "../../Pills/PillItem";
import RecomItem from "./RecomItem";

const dummyNutritions = ["비타민 D", "오메가 3", "유산균"];

export default function RecomNutritions() {
  // const [pickedPills, setPickedPills] = useState([]);

  return (
    <View style={styles.likeContainer}>
      <Text style={styles.name}>추천 영양성분</Text>
      <View>
        <View style={styles.cardscontainer}>
          {dummyNutritions.map((nut, idx) => (
            <RecomItem nutName={nut} idx={idx} />

            // <View style={styles.outerContainer}>
            //   <View key={idx} style={styles.nutContainer}>
            //     <Text style={styles.nutrition}>{nut}</Text>
            //   </View>
            // </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  likeContainer: {
    marginHorizontal: 15,
    marginTop: 10,
    // backgroundColor: "red",
    // marginVertical: 10,
    // // flex: 2,
    // width: "100%",
    // // height: "30%",
    // height: 150,
    // alignItems: "center",
    // justifyContent: "center",
  },
  pickPillsContainer: {},
  name: {
    fontSize: 24,
    fontWeight: "900",
  },

  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 5,
    marginBottom: 10,
  },
  cardscontainer: {
    // justifyContent: "space-around",
    padding: 10,
    marginTop: 10,
    // backgroundColor: "#ECF6F4",
    // borderRadius: 10,
    // elevation: 5,
  },
  outerContainer: {
    backgroundColor: "rgba(226, 195, 220, 0.26)",
  },
  nutContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    // elevation: 10,
    borderRadius: 20,
  },
  nutrition: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
