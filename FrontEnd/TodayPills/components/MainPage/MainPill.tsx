import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { fetchAllSupplements } from "../../API/supplementAPI";
import SimplePillCard from "../Cards/SimplePillCard";
import PillItem from "../Pills/PillItem";

const MainPill = () => {
  const [userId, setUserId] = useState(0);
  const [mainPills, setMainPills] = useState([
    // {
    //   image:
    //     "http://www.ckdhc.com/upload/images/2022/09/23/4780647029480112efc3f69ab03891713bc1d2a29134a323adf20e5619dbf5d9",
    //   brand: "종근당건강",
    //   name: "락토핏 생유산균 코어",
    // },
    // {
    //   image: "https://cdn.pillyze.io/products/v1/10k/f7ac75f0-10992/1000",
    //   brand: "닥터스베스트",
    //   name: "킬레이트 마그네슘",
    // },
    // {
    //   image: "https://dimg.donga.com/wps/NEWS/IMAGE/2014/09/27/66754815.1.jpg",
    //   brand: "고려은단",
    //   name: "비타민C 1000",
    // },
    // {
    //   image:
    //     "https://contents.lotteon.com/itemimage/LO/14/19/59/10/62/_1/41/95/91/06/3/LO1419591062_1419591063_1.jpg",
    //   brand: "종근당건강",
    //   name: "칼슘 앤 마그네슘",
    // },
  ]);

  const getAllSupplements = async () => {
    const currentUserId = await AsyncStorage.getItem("@storage_UserId");
    setUserId(parseInt(currentUserId));
    const allSupplements = await fetchAllSupplements();
    setMainPills(allSupplements);
    // const userId = await AsyncStorage.getItem("@storage_UserId");
  };

  useEffect(() => {
    getAllSupplements();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>오늘 많은 이용자들이 본 영양제</Text>

      <View style={styles.outerContainer}>
        <ScrollView style={styles.cardsContainer} horizontal={true}>
          {mainPills.map((pill, idx) => (
            <PillItem
              key={pill.supplementId}
              userId={userId}
              pillId={pill.supplementId}
              image={pill.image}
              brand={pill.brand}
              pill={pill.name}
            />
          ))}
        </ScrollView>
      </View>
      {/* <View style={styles.cardsContainer}>
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
      </View> */}
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

  outerContainer: {
    marginHorizontal: 5,

    marginVertical: 5,
    // overflow: "hidden",
  },
  cardsContainer: {
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

export default MainPill;
