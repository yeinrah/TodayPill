import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SimplePillCard from "../Cards/SimplePillCard";
import PillItem from "../Pills/PillItem";

const MainPill = () => {
  const [mainPills, setMainPills] = useState([
    {
      image:
        "http://www.ckdhc.com/upload/images/2022/09/23/4780647029480112efc3f69ab03891713bc1d2a29134a323adf20e5619dbf5d9",
      brand: "종근당건강",
      pill: "락토핏 생유산균 코어",
    },
    {
      image: "https://cdn.pillyze.io/products/v1/10k/f7ac75f0-10992/1000",

      brand: "닥터스베스트",
      pill: "킬레이트 마그네슘",
    },
    {
      image: "https://dimg.donga.com/wps/NEWS/IMAGE/2014/09/27/66754815.1.jpg",

      brand: "고려은단",
      pill: "비타민C 1000",
    },
    {
      image:
        "https://contents.lotteon.com/itemimage/LO/14/19/59/10/62/_1/41/95/91/06/3/LO1419591062_1419591063_1.jpg",
      brand: "종근당건강",
      pill: "칼슘 앤 마그네슘",
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>오늘 많은 이용자들이 본 영양제</Text>
      <View style={styles.cardsContainer}>
        {mainPills.map((pill, idx) => (
          <PillItem
            key={idx}
            image={pill.image}
            brand={pill.brand}
            pill={pill.pill}
          />
          //   <SimplePillCard
          //     key={idx}
          //     image={mainPill.image}
          //     brand={mainPill.brand}
          //     pill={mainPill.pill}
          //   />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 15,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 5,
    marginBottom: 10,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    marginTop: 10,
    paddingHorizontal: 5,
    backgroundColor: "#ECF6F4",
    borderRadius: 10,
    elevation: 5,
  },
});

export default MainPill;
