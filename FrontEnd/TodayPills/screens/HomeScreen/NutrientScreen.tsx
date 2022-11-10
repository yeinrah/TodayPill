import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import DetailedPillCard from "../../components/Cards/DetailedPillCard";
import Card from "../../components/UI/Card";
import BackgroundScreen from "../BackgroundScreen";
import { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchAllSupplements } from "../../API/supplementAPI";
import { useFocusEffect } from "@react-navigation/native";

const NutrientScreen = ({ navigation, route }: any) => {
  const { nutId, nutrient } = route.params;
  const [userId, setUserId] = useState(0);
  const [pills, setPills] = useState([]);

  const getAllSupplements = async () => {
    const currentUserId = await AsyncStorage.getItem("@storage_UserId");
    setUserId(parseInt(currentUserId));
    const allSupplements = await fetchAllSupplements();
    const supplements = allSupplements.filter((i) => i.category === nutrient);
    setPills(supplements);
  };

  useFocusEffect(
    useCallback(() => {
      getAllSupplements();
    }, [userId])
  );

  return (
    <BackgroundScreen>
      <Card>
        <View>
          <Text style={styles.text}>{nutrient}</Text>
          <View style={styles.buttonOuterContainer}>
            <Pressable
              android_ripple={{ color: "#4E736F" }}
              style={styles.buttonInnerContainer}
              onPress={async () => {
                await AsyncStorage.setItem("@storage_nowNutrient", nutrient);
                navigation.navigate("NutrientDetailScreen", {
                  nutrient: [nutrient],
                });
              }}
            >
              <Text style={styles.title}>영양제 추천받기</Text>
            </Pressable>
          </View>
          <ScrollView>
            {pills.map((pill, idx) => (
              <DetailedPillCard
                key={idx}
                userId={userId}
                supplementId={pill.supplementId}
                image={pill.image}
                brand={pill.brand}
                supplementName={pill.supplementName}
                like={pill.like}
                note={pill.note}
              />
            ))}
            <View style={styles.height} />
          </ScrollView>
        </View>
      </Card>
    </BackgroundScreen>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 30,
  },
  buttonOuterContainer: {
    borderRadius: 10,
    width: "30%",
    marginLeft: 20,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 10,
  },
  buttonInnerContainer: {
    paddingVertical: 7,
    backgroundColor: "#8EE8DE",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  height: {
    height: 25,
  },
});

export default NutrientScreen;
