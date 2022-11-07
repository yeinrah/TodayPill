import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import BackgroundScreen from "../BackgroundScreen";

const HealthScreeningCheckScreen = ({ navigation }: any) => {
  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <View style={styles.textcontainer}>
          <Text style={[styles.text, styles.greytext]}>건강 검진 결과를</Text>
          <Text style={[styles.text, styles.greytext]}>기반으로 필요한</Text>
          <Text style={[styles.text, styles.greytext]}>영양 성분을</Text>
          <Text style={[styles.text, styles.greytext]}>추천해드릴게요!</Text>
        </View>
        <View style={styles.questioncontainer}>
          <Text style={[styles.text, styles.whitetext]}>
            건강 검진을 받으신 적이 있나요?
          </Text>
          <View style={styles.buttoncontainer}>
            <View style={styles.buttonOuterContainer}>
              <Pressable
                android_ripple={{ color: "#4E736F" }}
                style={[styles.buttonInnerContainer, styles.pinkbutton]}
                onPress={() =>
                  navigation.navigate("HealthScreeningDetailScreen")
                }
              >
                <Text style={styles.title}>네</Text>
              </Pressable>
            </View>
            <View style={styles.buttonOuterContainer}>
              <Pressable
                android_ripple={{ color: "#4E736F" }}
                style={[styles.buttonInnerContainer, styles.greybutton]}
                onPress={() => navigation.navigate("SurveyStartScreen")}
              >
                <Text style={styles.title}>아니요</Text>
              </Pressable>
            </View>
          </View>
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
  textcontainer: {
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  greytext: {
    color: "black",
    fontSize: 30,
  },
  whitetext: {
    color: "white",
    fontSize: 24,
  },
  questioncontainer: {
    alignItems: "center",
  },
  buttoncontainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  buttonOuterContainer: {
    borderRadius: 25,
    width: "35%",
    overflow: "hidden",
    marginVertical: 10,
    elevation: 10,
  },
  buttonInnerContainer: {
    paddingVertical: 7,
  },
  pinkbutton: {
    backgroundColor: "#E881B1",
  },
  greybutton: {
    backgroundColor: "#B7B7B7",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

export default HealthScreeningCheckScreen;
