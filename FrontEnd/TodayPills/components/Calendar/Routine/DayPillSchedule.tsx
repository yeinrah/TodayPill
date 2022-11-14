import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { deleteZero } from "../../functions/deleteZero";
import { getDayOfWeek } from "../../functions/getDayOfWeek";
import { useState, useCallback } from "react";
import RoutineItem from "./RoutineItem";
import { accent, primary, secondary } from "../../../constants/Colors";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { fetchAllRoutineSupplements } from "../../../API/routineAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchEachMyRoutine } from "../../../API/calendarAPI";
import { useRecoilState } from "recoil";
import { pillRoutineCheckChangeState } from "../../../Recoil/atoms/calendar";

export interface PillScheduleProps {
  selectedDate: string;
}

const days = ["no", "월", "화", "수", "목", "금", "토", "일"];
export default function DayPillSchedule({ selectedDate }: PillScheduleProps) {
  const [isCheckedChange, setIsCheckedChange] = useRecoilState(
    pillRoutineCheckChangeState
  );
  const navigation = useNavigation<any>();
  // console.log(selectedDate, "캘린더 날짜");
  const [userId, setUserId] = useState(0);
  const [dayId, setDayId] = useState(0);
  const [dayStrOfWeek, setDayStrOfWeek] = useState("");
  const [pillRoutine, setPillRoutine] = useState([]);
  const [pillRoutineCheck, setPillRoutineCheck] = useState([]);
  // const [isCheckedChange, setIsCheckedChange] = useState(false);
  const dayString = `${deleteZero(selectedDate.slice(5, 7))}월 ${deleteZero(
    selectedDate.slice(8, 10)
  )}일 ${dayStrOfWeek}요일`;
  // )}일 ${dayOfWeek}요일`;

  // [
  //   {
  //     day: "3",
  //     deletedSince: '"2022-11-10"',
  //     pushAlarm: true,
  //     routineId: 4,
  //     supplementId: 222,
  //     tablets: 7,
  //     time: "19:39",
  //     userId: 2,
  //   },
  //   {
  //     day: "3, 4",
  //     deletedSince: null,
  //     pushAlarm: true,
  //     routineId: 5,
  //     supplementId: 28,
  //     tablets: 3,
  //     time: "03:40",
  //     userId: 2,
  //   },
  // ];

  // const changeCheckHandler = () => {
  //   setIsCheckedChange((isChanged) => !isChanged);
  // };
  const addRoutineHandler = () => {
    // 밑에 userId 변경!!
    navigation.navigate("MyPills", { userId: userId });
  };
  const getMyEachRoutine = async () => {
    const currentUserId = await AsyncStorage.getItem("@storage_UserId");
    setUserId(parseInt(currentUserId));

    const dayOfWeek = getDayOfWeek(selectedDate);
    setDayStrOfWeek(dayOfWeek);
    setDayId(days.indexOf(dayOfWeek));
    const eachMyRoutine = await fetchEachMyRoutine(
      userId,
      selectedDate,
      days.indexOf(dayOfWeek)
    );
    setPillRoutine(eachMyRoutine);

    // setPillRoutineCheck(eachMyRoutine.calendarList);

    // const visibleRoutineList = eachMyRoutine.filter((eachRoutine: any) => {
    //   return !eachRoutine.deletedSince;
    // });
    // setPillRoutine(visibleRoutineList);
    // setSupplementDetail(eachSupplementDetail);
  };

  useFocusEffect(
    useCallback(() => {
      const dayOfWeek = getDayOfWeek(selectedDate);
      // setDayStrOfWeek(dayOfWeek);
      // setDayId(days.indexOf(dayOfWeek));

      getMyEachRoutine();
      // }, [userId, isCheckedChange, selectedDate, dayId, dayStrOfWeek])
    }, [userId, selectedDate, isCheckedChange])
  );

  // [{"addedSince": "2022-11-11", "day": "1, 2, 3, 4, 5", "deletedSince": null,
  //  "pushAlarm": false, "routineId": 10, "supplementId": 1, "tablets": 2, "taken": false, "time": "08:30", "userId": 2}]

  return (
    <View style={styles.container}>
      <View style={styles.eachDateContainer}>
        <View style={styles.takenDateContainer}>
          <Text style={styles.takenDate}>{dayString}</Text>
        </View>
        <Pressable onPress={addRoutineHandler}>
          <MaterialCommunityIcons
            name="pencil-circle"
            size={35}
            color={primary}
          />
        </Pressable>
      </View>
      <View style={styles.pillRoutineContainer}>
        {pillRoutine.map((rout, idx) => (
          <RoutineItem
            key={idx}
            time={rout.time}
            routineId={rout.routineId}
            pillId={rout.supplementId}
            selectedDate={selectedDate}
            cnt={rout.tablets}
            taken={rout.taken}
            calendarId={rout.calendarId}
            // changeCheckHandler={changeCheckHandler}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    // alignItems: "center",
    // justifyContent: "center",
    // borderWidth: 2,
    // backgroundColor: "red",
    // minHeight: 200,
  },
  eachDateContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  takenDateContainer: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 30,
    // backgroundColor: "#FFEFFC",
    backgroundColor: accent,
  },
  takenDate: {
    fontSize: 24,
    fontWeight: "900",
    color: "white",
    // color: accent,
    // paddingHorizontal: 25,
  },
  pillRoutineContainer: {
    minHeight: 200,
    marginTop: 10,
  },
});
