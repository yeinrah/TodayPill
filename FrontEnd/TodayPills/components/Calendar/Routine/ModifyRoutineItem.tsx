import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Switch,
  Modal,
  Button,
  Alert,
} from "react-native";

import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import { accent, primary, secondary } from "../../../constants/Colors";
import PillCard from "../../UI/PillCard";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
// import BottomSheet from "reanimated-bottom-sheet";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import CustomBtn from "../../UI/CustomBtn";
import WeekDayList from "./WeekDayList";
import * as Notifications from "expo-notifications";
import { useFocusEffect } from "@react-navigation/native";
import { fetchSupplementDetail } from "../../../API/supplementAPI";
import {
  addMyRoutineSupplement,
  fetchAllRoutineSupplements,
  updateMyRoutineSupplement,
} from "../../../API/routineAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PushNotifications from "./PushNotifications";
// import Notifications from "../../../utils/Notifications";

export default function ModifyRoutineItem({
  navigation,
  pillId,
  updateOrNot,
  prevRoutineDetail,
}: any) {
  const [userId, setUserId] = useState(0);
  const [selectedRoutineDays, setSelectedRoutineDays] = useState("");
  const [takenDaysName, setTakenDaysName] = useState("");
  const [isDaySubmitted, setIsDaySubmitted] = useState(false);

  const [supplementDetail, setSupplementDetail] = useState({
    name: "",
    brand: "",
    image: "",
    ingredients: "",
    bestTime: "",
    requiredCount: "",
  });
  const [pillCnt, setPillCnt] = useState(1);
  const [isAlarmEnabled, setIsAlarmEnabled] = useState(false);
  const [takenTime, setTakenTime] = useState("");
  const [isAM, setIsAM] = useState(true);

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const submitModifyRoutineHandler = async () => {
    if (!isDaySubmitted) {
      return Alert.alert(
        "섭취 요일",
        "섭취 요일을 선택 후 완료 버튼을 클릭해주세요!"
      );
    }

    let submitTakenTime = takenTime;
    if (!isAM) {
      const PMHour = parseInt(takenTime.slice(0, 2)) + 12;
      submitTakenTime = `${PMHour}:${takenTime.slice(3, 5)}`;
    }
    // console.log(
    //   userId,
    //   pillId,
    //   selectedRoutineDays,
    //   isAlarmEnabled,
    //   pillCnt,
    //   submitTakenTime
    // );

    updateOrNot === "true"
      ? await updateMyRoutineSupplement(
          userId,
          prevRoutineDetail.routineId,
          pillId,
          selectedRoutineDays,
          isAlarmEnabled,
          pillCnt,
          submitTakenTime
        )
      : await addMyRoutineSupplement(
          userId,
          pillId,
          selectedRoutineDays,
          isAlarmEnabled,
          pillCnt,
          submitTakenTime
        );
    navigation.navigate("MyPills", { userId });
    console.warn("제출함!!!!!!!!!!!!!!!!!!!!");
  };

  const getSupplementDetail = async () => {
    const currentUserId = await AsyncStorage.getItem("@storage_UserId");
    setUserId(parseInt(currentUserId));
    const eachSupplementDetail = await fetchSupplementDetail(pillId);
    // if (eachSupplementDetail.bestTime.slice(0,2))
    if (updateOrNot === "false") {
      console.warn(updateOrNot);
      setTakenTime(timeConvert(eachSupplementDetail.bestTime));
      // setPillCnt(1);
    } else {
      setIsAlarmEnabled(prevRoutineDetail.pushAlarm);
      setPillCnt(prevRoutineDetail.tablets);
      setTakenTime(timeConvert(prevRoutineDetail.time));
    }
    // setTakenTime(eachSupplementDetail.bestTime);

    setSupplementDetail(eachSupplementDetail);
  };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const onChangeDaysName = (changedName: string) => {
    setTakenDaysName(changedName);
    // setIsDaySubmitted(false);
  };

  const handleTimeConfirm = (date: Date) => {
    // console.warn("A date has been picked: ", date);
    let hour = date.getHours();
    let minute = date.getMinutes().toString();
    if (hour > 12) {
      hour -= 12;
      setIsAM(false);
    } else if (hour == 12) {
      setIsAM(false);
    } else {
      setIsAM(true);
    }
    let hourString = hour.toString();

    if (minute.length === 1) {
      minute = "0" + minute;
    }
    if (hourString.length === 1) {
      hourString = "0" + hourString;
    }

    setTakenTime(`${hourString}:${minute}`);
    hideDatePicker();
  };

  const timeConvert = (timeString: string) => {
    let hour = parseInt(timeString.slice(0, 2));

    const minute = timeString.slice(3, 5);

    if (hour > 12) {
      hour -= 12;
      setIsAM(false);
    } else if (hour == 12) {
      setIsAM(false);
    } else {
      setIsAM(true);
    }
    return `${hour}:${minute}`;
    // setTakenTime(`${hour}:${minute}`);
  };
  // useCallback(() => {
  //   if (!updateOrNot) {
  //     console.log(updateOrNot);

  //     timeConvert(supplementDetail.bestTime);
  //   }
  // }, []);

  useFocusEffect(
    useCallback(() => {
      // getMyAllRoutineSupplements();
      getSupplementDetail();

      // if (updateOrNot === "true") {
      //   setPillCnt(prevRoutineDetail.tablets);
      //   setTakenTime(timeConvert(prevRoutineDetail.time));
      // }
      // return () => {

      // };
    }, [pillId])
  );

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
                source={{ uri: supplementDetail.image }}
                style={styles.pillImage}
              />
            </View>
          </View>
          <View style={styles.pillDetailContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>제품명</Text>
              {/* <Text style={styles.pillName}>{routineItem.pillName}</Text> */}
              <Text style={styles.pillName}>{supplementDetail.name}</Text>
              <View style={styles.separator} />
            </View>
            <View style={styles.cntContainer}>
              <Text style={styles.name}>섭취 개수</Text>
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
        <PillCard height={200} width={"90%"} bgColor={"#edfbf9"}>
          <View style={styles.takenTimeInnerContainer}>
            <View style={styles.dayAlarmOuterContainer}>
              <View style={styles.dayOuterContainer}>
                <View style={styles.dayAlarmContainer}>
                  <Text style={styles.name}>섭취 요일</Text>

                  {/* <Text style={styles.dayAndTimeName}>{takenDaysName}</Text> */}
                  {isDaySubmitted ? (
                    <Text style={styles.dayAndTimeName}>{takenDaysName}</Text>
                  ) : null}
                </View>

                <Text style={styles.dayExplText}>
                  아래 요일을 클릭하여 섭취 요일을 선택해주세요.
                </Text>
              </View>

              <View style={styles.dayListContainer}>
                <WeekDayList
                  addRoutineDaysHandler={setSelectedRoutineDays}
                  onChangeDaysName={onChangeDaysName}
                  getSubmitted={setIsDaySubmitted}
                />
              </View>
            </View>

            <View style={{ alignItems: "center" }}>
              <View style={[styles.separator, { width: "90%" }]} />
            </View>
            <View style={styles.dayAlarmSecondContainer}>
              <Text style={styles.name}>섭취 시간</Text>

              <Pressable onPress={showDatePicker} style={styles.directionRow}>
                <Text style={styles.dayAndTimeName}>
                  {/* {supplementDetail.bestTime} {isAM ? "AM" : "PM"} */}
                  <Text
                    style={isAM ? { color: primary } : { color: "#309388" }}
                  >
                    {isAM ? "AM" : "PM"}
                  </Text>{" "}
                  {takenTime}
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
                  onConfirm={handleTimeConfirm}
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
        <PushNotifications
          addAlarmHandler={setIsAlarmEnabled}
          isAlarm={isAlarmEnabled}
        />
        <View>
          <View style={styles.chooseBtn}>
            <CustomBtn
              buttonColor={accent}
              title={"수정 완료"}
              titleColor={"#fff"}
              buttonWidth={"90%"}
              fontSize={20}
              onPress={submitModifyRoutineHandler}
            />
          </View>
        </View>
      </View>
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
  takenTimeInnerContainer: {
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
    fontSize: 17,
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
  dayExplText: {
    fontSize: 10,
    color: "#FF78A3",
    paddingHorizontal: 15,
  },
  dayAlarmOuterContainer: {
    flex: 6,
  },
  dayOuterContainer: {
    flex: 3,
    // backgroundColor: "yellow",
  },
  dayAlarmContainer: {
    flex: 1,
    paddingHorizontal: 17,
    // backgroundColor: "blue",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dayAlarmSecondContainer: {
    paddingHorizontal: 13,
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dayListContainer: {
    flex: 5,
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
  // bottomOuterContainer: {
  //   height: 150,
  // },
  bottomContainer: {
    flex: 1,

    // margin: 14,
  },
  contentContainer: {
    flex: 1,
    // alignItems: "center",
  },

  chooseBtn: {
    flex: 1,
    alignItems: "center",
  },
});
