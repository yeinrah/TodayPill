import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Switch,
  Modal,
} from "react-native";

import { useState } from "react";
import { accent, primary, secondary } from "../../../constants/Colors";
import PillCard from "../../UI/PillCard";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Entypo, AntDesign } from "@expo/vector-icons";
import CustomModal from "../../UI/CustomModal";

const dummyRoutine = {
  time: "17:30",
  days: [5, 6],
  brand: "나우푸드",
  pillName: "비타민 C 1000",
  imgUrl:
    "https://contents.lotteon.com/itemimage/LO/14/19/59/10/62/_1/41/95/91/06/3/LO1419591062_1419591063_1.jpg",
  cnt: 1,
};

export default function ModifyRoutineItem() {
  const [routineItem, setRoutineItem] = useState(dummyRoutine);
  const [pillCnt, setPillCnt] = useState(routineItem.cnt);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isAM, setIsAM] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [takenTime, setTakenTime] = useState("08:00");

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date: Date) => {
    console.warn("A date has been picked: ", date);
    let hour = date.getHours();
    let minute = date.getMinutes().toString();
    if (hour > 12) {
      hour -= 12;
      setIsAM(false);
    } else if (hour == 12) {
      setIsAM(false);
    }

    if (minute.length === 1) {
      minute = "0" + minute;
    }

    setTakenTime(`${hour}: ${minute}`);
    hideDatePicker();
  };

  const alarmToggleSwitch = () =>
    setIsEnabled((previousState) => !previousState);

  const decreaseHandler = () => {
    setPillCnt((pillCnt) => (pillCnt > 1 ? pillCnt - 1 : 1));
  };
  const increaseHandler = () => {
    setPillCnt((pillCnt) => (pillCnt < 20 ? pillCnt + 1 : 20));
  };
  return (
    <ScrollView style={styles.outerContainer}>
      <PillCard height={400} width={"90%"} bgColor={"#edfbf9"}>
        <View style={styles.cardInnerContainer}>
          <View style={styles.imageOuterContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: routineItem.imgUrl }}
                style={styles.pillImage}
              />
            </View>
          </View>
          <View style={styles.pillDetailContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>제품명</Text>
              <Text style={styles.pillName}>{routineItem.pillName}</Text>
              <View style={styles.separator} />
            </View>
            <View style={styles.cntContainer}>
              <Text style={styles.name}>섭취 횟수</Text>
              <View style={styles.modifyCnt}>
                <Pressable onPress={decreaseHandler}>
                  <Entypo name="circle-with-minus" size={27} color={accent} />
                </Pressable>
                <Text style={styles.cnt}>{pillCnt}</Text>
                <Pressable onPress={increaseHandler}>
                  <Entypo name="circle-with-plus" size={27} color={accent} />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </PillCard>

      <View>
        <PillCard height={150} width={"90%"} bgColor={"#edfbf9"}>
          <View style={styles.takenTimeInnerContainer}>
            <View style={styles.dayAlarmContainer}>
              <Text style={styles.name}>섭취 요일</Text>

              <Pressable
                onPress={() => setModalVisible(true)}
                style={styles.directionRow}
              >
                <Text style={styles.dayAndTimeName}>매일</Text>
                <AntDesign name="right" size={24} color="black" />
                <View>
                  <CustomModal
                    modalVisible={modalVisible}
                    modalCloseHandler={() => setModalVisible(false)}
                  >
                    <View style={styles.modalContainer}>
                      <Text>모달!!!!!!!!!!!!!!!</Text>
                    </View>
                  </CustomModal>
                </View>
              </Pressable>
            </View>

            <View style={{ alignItems: "center" }}>
              <View style={[styles.separator, { width: "90%" }]} />
            </View>
            <View style={styles.dayAlarmContainer}>
              <Text style={styles.name}>섭취 시간</Text>

              <Pressable onPress={showDatePicker} style={styles.directionRow}>
                <Text style={styles.dayAndTimeName}>
                  {takenTime} {isAM ? "AM" : "PM"}
                  {/* dayTimePicker 쓰기 */}
                </Text>
                <DateTimePickerModal
                  // is24Hour={true}
                  positiveButtonLabel="확인"
                  negativeButtonLabel="취소"
                  // positiveButtonLabel="Negative"
                  isVisible={isDatePickerVisible}
                  mode="time"
                  // display="clock"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}

                  // isDarkModeEnabled={true}
                />
                <AntDesign name="right" size={24} color="black" />
              </Pressable>
            </View>
          </View>
        </PillCard>
      </View>

      <View>
        <PillCard height={130} width={"90%"} bgColor={"#edfbf9"}>
          <View style={styles.takenTimeInnerContainer}>
            <View style={styles.switchAlarmContainer}>
              <Text style={styles.pushAlarmName}>푸시 알람</Text>
              <Switch
                // style={{ height: "50%" }}
                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                trackColor={{ false: "#767577", true: accent }}
                thumbColor={isEnabled ? "white" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={alarmToggleSwitch}
                value={isEnabled}
              />
            </View>
            <View style={styles.alarmExplanation}>
              <Text style={styles.alarmExplText}>
                푸시 알람을 켜두시면 등록하신 시간에 맞춰 알림을 받을 수 있어요
                !
              </Text>
            </View>
          </View>
        </PillCard>
      </View>
      {/* <Text style={styles.takenDate}></Text>
      <View style={styles.pillRoutineContainer}>
     
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: 15,
  },

  cardInnerContainer: {
    flex: 1,
  },
  imageOuterContainer: {
    alignItems: "center",
    flex: 3,
    marginVertical: 20,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
  },
  pillImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  pillDetailContainer: {
    flex: 2,
    // width: "55%",
    marginHorizontal: 20,
    // // height: "80%",
    // justifyContent: "space-between",
  },
  nameContainer: {
    flex: 1,
  },
  cntContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingTop: 20,
    // marginTop: 10,

    paddingHorizontal: 5,
  },
  modifyCnt: {
    flexDirection: "row",
  },

  name: {
    fontSize: 15,
    // fontWeight: "bold",
  },
  pillName: {
    marginVertical: 7,
    fontSize: 23,
    fontWeight: "bold",
  },
  separator: {
    // marginVertical: 10,
    backgroundColor: "#B7B7B7",
    height: 1,
    width: "100%",
  },
  cnt: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginTop: -3,
  },
  time: {
    fontSize: 15,
    fontWeight: "900",
    color: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 25,
  },

  takenTimeInnerContainer: {
    flex: 1,
    // backgroundColor: "red",
  },
  switchAlarmContainer: {
    flex: 1,
    flexDirection: "row",

    paddingHorizontal: 20,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pushAlarmName: {
    // marginVertical: 7,
    fontSize: 21,
    fontWeight: "bold",
  },
  alarmExplanation: {
    flex: 1,
    paddingHorizontal: 20,
    // paddingBottom: 30,
    alignItems: "center",
  },
  alarmExplText: {
    fontSize: 13,
    color: "#FF78A3",
  },
  dayAlarmOuterContainer: {
    flex: 1,
  },
  dayAlarmContainer: {
    paddingHorizontal: 13,
    flex: 1,
    height: "100%",
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  directionRow: {
    // backgroundColor: "red",
    flexDirection: "row",
  },
  dayAndTimeName: {
    fontWeight: "900",
    fontSize: 18,
  },

  modalContainer: {
    height: 150,
    width: 250,
  },
});
