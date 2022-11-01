import { StyleSheet, Text, View, Pressable } from "react-native";
import BackgroundScreen from "../BackgroundScreen";

const SurveyStartScreen = ({ navigation }: any) => {
  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <View style={styles.textcontainer}>
          <View style={styles.flexrow}>
            <Text style={[styles.text, styles.whitetext]}>고은민&nbsp;</Text>
            <Text style={[styles.text, styles.blacktext]}>님의</Text>
          </View>
          <Text style={[styles.text, styles.blacktext]}>
            건강 설문을 기반으로
          </Text>
          <Text style={[styles.text, styles.blacktext]}>
            필요한 영양 성분을
          </Text>
          <Text style={[styles.text, styles.blacktext]}>추천해드릴게요!</Text>
        </View>
        <View style={styles.buttonOuterContainer}>
          <Pressable
            android_ripple={{ color: "#4E736F" }}
            style={styles.buttonInnerContainer}
            onPress={() => navigation.navigate("SurveyScreen")}
          >
            <Text style={styles.title}>설문하기</Text>
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
  textcontainer: {
    alignItems: "center",
  },
  flexrow: {
    flexDirection: "row",
  },
  text: {
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    fontSize: 30,
  },
  blacktext: {
    color: "black",
  },
  whitetext: {
    color: "white",
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

export default SurveyStartScreen;
