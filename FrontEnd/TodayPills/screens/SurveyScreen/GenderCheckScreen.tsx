import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import BackgroundScreen from "../BackgroundScreen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { changeGender } from "../../API/userAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GenderCheckScreen = ({ navigation }: any) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [nowGender, setNowGender] = useState("");
  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <Ionicons
          name="arrow-back"
          size={48}
          color="black"
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.textcontainer}>
          <Text style={[styles.text, styles.largetext]}>
            성별을 알려주세요.
          </Text>
          <Text style={[styles.text, styles.smalltext]}>
            성별에 기반한 설문이 준비되어 있습니다.
          </Text>
        </View>
        <ScrollView>
          <View style={styles.itemcontainer}>
            <View style={styles.itemoutercontainer}>
              <Pressable
                android_ripple={{ color: "#4E736F" }}
                style={
                  selectedItem === 1
                    ? styles.iteminnercontainerClicked
                    : styles.iteminnercontainer
                }
                onPress={() => {
                  setNowGender("남성");
                  setSelectedItem(1);
                }}
              >
                <View style={styles.itemflex}>
                  <Text style={styles.itemtitle}>남성</Text>
                  <AntDesign
                    name="checkcircleo"
                    size={24}
                    color="black"
                    style={styles.icon1}
                  />
                </View>
              </Pressable>
            </View>
          </View>
          <View style={styles.itemcontainer}>
            <View style={styles.itemoutercontainer}>
              <Pressable
                android_ripple={{ color: "#4E736F" }}
                style={
                  selectedItem === 2
                    ? styles.iteminnercontainerClicked
                    : styles.iteminnercontainer
                }
                onPress={() => {
                  setSelectedItem(2);
                  setNowGender("여성");
                }}
              >
                <View style={styles.itemflex}>
                  <Text style={styles.itemtitle}>여성</Text>
                  <AntDesign
                    name="checkcircleo"
                    size={24}
                    color="black"
                    style={styles.icon1}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttoncontainer}>
          <View style={styles.buttonOuterContainer}>
            <Pressable
              android_ripple={{ color: "#4E736F" }}
              style={styles.buttonInnerContainer}
              onPress={async () => {
                // console.log(await AsyncStorage.getItem("2s"))
                changeGender(
                  await AsyncStorage.getItem("@storage_UserEmail"),
                  nowGender
                );
                await AsyncStorage.setItem("@storage_UserGender", nowGender);
                navigation.navigate("HealthScreeningCheckScreen");
              }}
            >
              <Text style={styles.title}>다 음</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </BackgroundScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-around",
    // alignItems: "center",
  },
  icon: {
    marginLeft: 10,
    marginBottom: 10,
  },
  textcontainer: {
    marginLeft: 30,
    height: "15%",
  },
  text: {
    fontWeight: "bold",
    color: "black",
  },
  largetext: {
    fontSize: 24,
  },
  smalltext: {
    fontSize: 15,
    marginTop: 10,
  },
  itemcontainer: {
    width: "100%",
    alignItems: "center",
  },
  itemoutercontainer: {
    borderRadius: 10,
    width: "80%",
    height: 80,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 10,
  },
  iteminnercontainer: {
    paddingVertical: 25,
    backgroundColor: "#E5E5E5",
  },
  iteminnercontainerClicked: {
    paddingVertical: 25,
    backgroundColor: "rgba(142,232,222,0.95)",
  },
  itemflex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemtitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 25,
  },
  buttoncontainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  buttonOuterContainer: {
    borderRadius: 10,
    width: "80%",
    height: 50,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 10,
  },
  buttonInnerContainer: {
    paddingVertical: 10,
    backgroundColor: "#E881B1",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  icon1: {
    marginRight: 20,
  },
});
export default GenderCheckScreen;
