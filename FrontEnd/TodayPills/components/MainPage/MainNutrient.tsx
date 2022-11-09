import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import SimpleNutrientCard from "../Cards/SimpleNutrientCard";

const MainNutrient = ({ navigation }: any) => {
  const [mainNutrients, setMainNutrients] = useState([
    {
      nutId: 2,
      image: require("../../assets/images/nutrients/sample1.png"),
      nutrient: "비타민 C",
    },
    {
      nutId: 6,
      image: require("../../assets/images/nutrients/sample2.png"),
      nutrient: "오메가-3",
    },
    {
      nutId: 10,
      image: require("../../assets/images/nutrients/sample3.png"),
      nutrient: "유산균",
    },
    {
      nutId: 5,
      image: require("../../assets/images/nutrients/sample4.png"),
      nutrient: "마그네슘",
    },
    {
      nutId: 4,
      image: require("../../assets/images/nutrients/sample6.png"),
      nutrient: "종합비타민",
    },
    {
      nutId: 3,
      image: require("../../assets/images/nutrients/sample5.png"),
      nutrient: "비타민 D",
    },
    {
      nutId: 8,
      image: require("../../assets/images/nutrients/sample6.png"),
      nutrient: "루테인",
    },
    {
      nutId: 12,
      image: require("../../assets/images/nutrients/sample6.png"),
      nutrient: "철분",
    },
    {
      nutId: 11,
      image: require("../../assets/images/nutrients/sample6.png"),
      nutrient: "콜라겐",
    },
    // {
    //   image: require("../../assets/images/nutrients/sample6.png"),
    //   nutrient: "프로폴리스",
    // },
    // {
    //   image: require("../../assets/images/nutrients/sample6.png"),
    //   nutrient: "밀크시슬",
    // },
    // {
    //   image: require("../../assets/images/nutrients/sample6.png"),
    //   nutrient: "비타민 B",
    // },
    // {
    //   image: require("../../assets/images/nutrients/sample6.png"),
    //   nutrient: "아연",
    // },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>인기 성분</Text>
      <View style={styles.cardscontainer}>
        {mainNutrients.map((mainNutrient, idx) => (
          <Pressable
            key={idx}
            onPress={() =>
              navigation.navigate("NutrientScreen", {
                nutId: mainNutrient.nutId,
                nutrient: mainNutrient.nutrient,
              })
            }
          >
            <SimpleNutrientCard
              image={mainNutrient.image}
              nutId={mainNutrient.nutId}
              nutrient={mainNutrient.nutrient}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 15,
    paddingBottom: 15,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 5,
    marginBottom: 10,
  },
  cardscontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});

export default MainNutrient;
