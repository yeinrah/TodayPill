import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";

const AnswerSurvey = ({
  selectedItem,
  setSelectedItem,
  nowStage,
  surveyData,
}) => {
  const [multiSelceted, setMultiSelected] = useState("");
  return (
    <>
      {surveyData[nowStage][3] &&
        surveyData[nowStage][3].map((item: string, index: number) => {
          return (
            <View style={styles.itemcontainer} key={index}>
              <View style={styles.itemoutercontainer}>
                {nowStage !== 9 && (
                  <Pressable
                    android_ripple={{ color: "#4E736F" }}
                    style={
                      selectedItem === index
                        ? styles.iteminnercontainerClicked
                        : styles.iteminnercontainer
                    }
                    onPress={() => setSelectedItem(index)}
                  >
                    <View style={styles.itemflex}>
                      <Text style={styles.itemtitle}>{item}</Text>
                      <AntDesign
                        name="checkcircleo"
                        size={24}
                        color="black"
                        style={styles.icon1}
                      />
                    </View>
                  </Pressable>
                )}
                {nowStage === 9 && (
                  <Pressable
                    android_ripple={{ color: "#4E736F" }}
                    style={
                      multiSelceted.indexOf(item) >= 0
                        ? styles.iteminnercontainerClicked
                        : styles.iteminnercontainer
                    }
                    onPress={() => {
                      setMultiSelected(multiSelceted + item);
                      setSelectedItem(multiSelceted + item);
                    }}
                  >
                    <View style={styles.itemflex}>
                      <Text style={styles.itemtitle}>{item}</Text>
                      <AntDesign
                        name="checkcircleo"
                        size={24}
                        color="black"
                        style={styles.icon1}
                      />
                    </View>
                  </Pressable>
                )}
              </View>
            </View>
          );
        })}
      {!surveyData[nowStage][3] && (
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            placeholder="입력"
            onChangeText={(text) => {
              setSelectedItem(text);
            }}
            value={selectedItem}
          />
        </View>
      )}
    </>
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
  textInputView: {
    alignItems: "center",
    marginTop: 100,
  },
  textInput: {
    fontSize: 50,
  },
});
export default AnswerSurvey;
