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
import PillItem, { PillProps } from "../Pills/PillItem";

const dummyPills: PillProps[] = [
  {
    // image: require("../../assets/images/pills/sample1.png"),
    image:
      "http://www.ckdhc.com/upload/images/2022/09/23/4780647029480112efc3f69ab03891713bc1d2a29134a323adf20e5619dbf5d9",
    brand: "종근당건강",
    pill: "락토핏 생유산균 코어",
  },
  {
    image: "https://cdn.pillyze.io/products/v1/10k/f7ac75f0-10992/1000",
    // image: require("../../assets/images/pills/sample2.png"),
    brand: "닥터스베스트",
    pill: "킬레이트 마그네슘",
  },
  {
    image: "https://dimg.donga.com/wps/NEWS/IMAGE/2014/09/27/66754815.1.jpg",
    // image: require("../../assets/images/pills/sample3.png"),
    brand: "고려은단",
    pill: "비타민C 1000",
  },
  {
    image:
      "https://contents.lotteon.com/itemimage/LO/14/19/59/10/62/_1/41/95/91/06/3/LO1419591062_1419591063_1.jpg",
    // image: require("../../assets/images/pills/sample4.png"),
    brand: "종근당건강",
    pill: "칼슘 앤 마그네슘",
  },
  {
    image:
      "https://contents.lotteon.com/itemimage/LO/14/19/59/10/62/_1/41/95/91/06/3/LO1419591062_1419591063_1.jpg",
    // image: require("../../assets/images/pills/sample4.png"),
    brand: "종근당건강",
    pill: "칼슘 앤 마그네슘",
  },
  {
    image:
      "https://contents.lotteon.com/itemimage/LO/14/19/59/10/62/_1/41/95/91/06/3/LO1419591062_1419591063_1.jpg",
    // image: require("../../assets/images/pills/sample4.png"),
    brand: "종근당건강",
    pill: "칼슘 앤 마그네슘",
  },
];

export default function MyPickPills() {
  const [pickedPills, setPickedPills] = useState([]);

  return (
    <View style={styles.likeContainer}>
      <Text style={styles.name}>나의 Pick</Text>
      <View style={styles.outerContainer}>
        <ScrollView style={styles.cardscontainer} horizontal={true}>
          {dummyPills.map((pill, idx) => (
            <PillItem
              key={idx}
              image={pill.image}
              brand={pill.brand}
              pill={pill.pill}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  likeContainer: {
    marginVertical: 10,
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
  outerContainer: {
    marginHorizontal: 5,

    marginVertical: 5,
    // overflow: "hidden",
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 5,
    marginBottom: 10,
  },
  cardscontainer: {
    flexDirection: "row",
    // justifyContent: "space-around",
    paddingVertical: 10,
    marginTop: 10,
    paddingHorizontal: 5,
    backgroundColor: "#ECF6F4",
    borderRadius: 10,
    elevation: 5,
  },
});
