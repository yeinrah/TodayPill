import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import CustomBtn from "../UI/CustomBtn";

const AnswerSurvey = ({
  selectedItem,
  setSelectedItem,
  nowStage,
  surveyData,
}) => {
  const [multiSelceted, setMultiSelected] = useState("");
  const [optionClear, setOptionClear] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  useFocusEffect(
    useCallback(() => {
      if (surveyData[nowStage][3] && surveyData[nowStage][3].length > 2) {
        setOptionClear(false);
        setMultiSelected("");
        setSelectedItem("");
      } else setSelectedItem(1);
    }, [nowStage])
  );
  return (
    <>
      {surveyData[nowStage][3] &&
        surveyData[nowStage][3].map((item: string, index: number) => {
          return (
            <View style={styles.itemcontainer} key={index}>
              <View style={styles.itemoutercontainer}>
                {surveyData[nowStage][0] !== "allergy" &&
                  surveyData[nowStage][0] !== "lack" &&
                  surveyData[nowStage][0] !== "symptom" &&
                  surveyData[nowStage][0] !== "disease" &&
                  surveyData[nowStage][0] !== "medicine" &&
                  surveyData[nowStage][0] !== "preferred_brand" &&
                  surveyData[nowStage][0] !== "problem" &&
                  surveyData[nowStage][0] !== "additionalEfficacy" &&
                  surveyData[nowStage][0] !== "formula" && (
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
                {(surveyData[nowStage][0] !== "allergy" ||
                  surveyData[nowStage][0] !== "lack" ||
                  surveyData[nowStage][0] !== "symptom" ||
                  surveyData[nowStage][0] !== "disease" ||
                  surveyData[nowStage][0] !== "medicine" ||
                  surveyData[nowStage][0] !== "preferred_brand" ||
                  surveyData[nowStage][0] !== "problem" ||
                  surveyData[nowStage][0] !== "additionalEfficacy" ||
                  surveyData[nowStage][0] !== "formula") && (
                  <Pressable
                    android_ripple={{ color: "#4E736F" }}
                    style={
                      (multiSelceted.indexOf(item.replace(" ", "")) >= 0 &&
                        !optionClear) ||
                      (index == 0 && optionClear)
                        ? styles.iteminnercontainerClicked
                        : styles.iteminnercontainer
                    }
                    onPress={() => {
                      if (item == "해당없음") {
                        if (multiSelceted.indexOf(item) >= 0) {
                          setMultiSelected("");
                          setSelectedItem("");
                          setOptionClear(false);
                        } else {
                          setMultiSelected("해당없음");
                          setSelectedItem("해당없음");
                          setOptionClear(true);
                        }
                      } else if (
                        multiSelceted.indexOf(item.replace(" ", "")) >= 0
                      ) {
                        setMultiSelected(
                          multiSelceted.replace(item.replace(" ", ""), "")
                        );
                        setSelectedItem(
                          multiSelceted.replace(item.replace(" ", ""), "")
                        );
                      } else {
                        setOptionClear(false);
                        if (multiSelceted.indexOf("해당없음") >= 0) {
                          setMultiSelected(
                            multiSelceted.replace("해당없음", "") +
                              item.replace(" ", "")
                          );
                          setSelectedItem(
                            multiSelceted.replace("해당없음", "") +
                              item.replace(" ", "")
                          );
                        } else
                          setMultiSelected(
                            multiSelceted + " " + item.replace(" ", "")
                          );
                        setSelectedItem(
                          multiSelceted + " " + item.replace(" ", "")
                        );
                      }
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
          <View style={styles.priceView}>
            <TextInput
              style={styles.textInput}
              placeholder="최소"
              onChangeText={(min) => {
                setMinPrice(min);
                setSelectedItem(min + " " + maxPrice);
              }}
              value={minPrice}
              editable={false}
              selectTextOnFocus={false}
            />
            <Text style={styles.price}>원</Text>
          </View>
          <View style={styles.pricebtn}>
            <View style={styles.pbtn}>
              <CustomBtn
                buttonWidth={70}
                title={"100"}
                buttonColor={"green"}
                titleColor={"white"}
                onPress={() => {
                  let str = String(
                    Number(minPrice.replace(",", "")) + 100
                  ).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  setMinPrice(str);
                  setSelectedItem(
                    str.replace(",", "") + " " + maxPrice.replace(",", "")
                  );
                }}
              ></CustomBtn>
            </View>
            <View style={styles.pbtn}>
              <CustomBtn
                buttonWidth={70}
                title={"1000"}
                buttonColor={"green"}
                titleColor={"white"}
                onPress={() => {
                  let str = String(
                    Number(minPrice.replace(",", "")) + 1000
                  ).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  setMinPrice(str);
                  setSelectedItem(
                    str.replace(",", "") + " " + maxPrice.replace(",", "")
                  );
                }}
              ></CustomBtn>
            </View>
            <View style={styles.pbtn}>
              <CustomBtn
                buttonWidth={70}
                title={"10000"}
                buttonColor={"green"}
                titleColor={"white"}
                onPress={() => {
                  let str = String(
                    Number(minPrice.replace(",", "")) + 10000
                  ).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  setMinPrice(str);
                  setSelectedItem(
                    str.replace(",", "") + " " + maxPrice.replace(",", "")
                  );
                }}
              ></CustomBtn>
            </View>
          </View>
          <Text style={styles.textInput}>~</Text>
          <View style={styles.priceView}>
            <TextInput
              style={styles.textInput}
              placeholder="최대"
              onChangeText={(max) => {
                // setSelectedItem(max);
                setMaxPrice(max);
                setSelectedItem(minPrice + " " + max);
              }}
              value={maxPrice}
              editable={false}
              selectTextOnFocus={false}
            />
            <Text style={styles.price}>원</Text>
          </View>
          <View style={styles.pricebtn}>
            <View style={styles.pbtn}>
              <CustomBtn
                buttonWidth={70}
                title={"100"}
                buttonColor={"green"}
                titleColor={"white"}
                onPress={() => {
                  let str = String(
                    Number(maxPrice.replace(",", "")) + 100
                  ).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  setMaxPrice(str);
                  setSelectedItem(
                    minPrice.replace(",", "") + " " + str.replace(",", "")
                  );
                }}
              ></CustomBtn>
            </View>
            <View style={styles.pbtn}>
              <CustomBtn
                buttonWidth={70}
                title={"1000"}
                buttonColor={"green"}
                titleColor={"white"}
                onPress={() => {
                  let str = String(
                    Number(maxPrice.replace(",", "")) + 1000
                  ).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  setMaxPrice(str);
                  setSelectedItem(
                    minPrice.replace(",", "") + " " + str.replace(",", "")
                  );
                }}
              ></CustomBtn>
            </View>
            <View style={styles.pbtn}>
              <CustomBtn
                buttonWidth={70}
                title={"10000"}
                buttonColor={"green"}
                titleColor={"white"}
                onPress={() => {
                  let str = String(
                    Number(maxPrice.replace(",", "")) + 10000
                  ).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  setMaxPrice(str);
                  setSelectedItem(
                    minPrice.replace(",", "") + " " + str.replace(",", "")
                  );
                }}
              ></CustomBtn>
            </View>
          </View>
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
    marginTop: 40,
  },
  textInput: { fontSize: 40, color: "black" },
  price: { marginTop: 8, marginLeft: 5, fontSize: 30 },
  priceView: {
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 0,
    paddingBottom: 0,
  },
  pricebtn: {
    flexDirection: "row",
  },
  pbtn: {
    margin: 2,
  },
  priceBtnDetail: {
    backgroundColor: "grey",
  },
});
export default AnswerSurvey;
