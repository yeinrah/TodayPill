import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import BackgroundScreen from "../BackgroundScreen";

const LoginSuccessScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const getMyName = async () => {
    const nowName = await AsyncStorage.getItem("@storage_UserNickName");
    console.log(nowName);
    setName(nowName);
  };
  useEffect(() => {
    getMyName();
  }, []);
  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/youngyang/normal.png")}
          />
        </View>
        <View style={styles.textcontainer}>
          <Text style={[styles.text, styles.greetingtext, styles.blacktext]}>
            반가워요!
          </Text>
          <View style={styles.flexrow}>
            <Text style={[styles.text, styles.nametext, styles.whitetext]}>
              {name}&nbsp;
            </Text>
            <Text style={[styles.text, styles.nametext, styles.blacktext]}>
              님
            </Text>
          </View>
        </View>
        <View style={styles.buttonOuterContainer}>
          <Pressable
            android_ripple={{ color: "#4E736F" }}
            style={styles.buttonInnerContainer}
            onPress={() => navigation.navigate("HealthScreeningCheckScreen")}
          >
            <Text style={styles.title}>다음</Text>
          </Pressable>
        </View>
      </View>
    </BackgroundScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  imagecontainer: {
    width: 100,
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginTop: 20,
  },
  textcontainer: {
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  greetingtext: {
    fontSize: 30,
    marginBottom: 10,
  },
  nametext: {
    fontSize: 40,
  },
  blacktext: {
    color: "black",
  },
  whitetext: {
    color: "white",
  },
  flexrow: {
    flexDirection: "row",
  },
  buttonOuterContainer: {
    borderRadius: 20,
    width: "80%",
    marginLeft: 20,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 10,
  },
  buttonInnerContainer: {
    paddingVertical: 7,
    backgroundColor: "#E881B1",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

export default LoginSuccessScreen;
