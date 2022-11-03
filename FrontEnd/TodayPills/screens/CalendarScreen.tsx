// import EditScreenInfo from "../components/EditScreenInfo";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import CalendarView from "../components/Calendar/CalendarView";
import DayPillSchedule from "../components/Calendar/Routine/DayPillSchedule";
import Card from "../components/UI/Card";
import { RootTabScreenProps } from "../types";
import { useState } from "react";
import BackgroundScreen from "./BackgroundScreen";
import LoadingSpinner from "../components/UI/LoadingSpinner";
// import { getDeviceToken } from "../utils/Notifications";

export default function CalendarScreen({
  navigation,
}: RootTabScreenProps<"Calendar">) {
  const [isLoading, setisLoading] = useState(true);

  const today = new Date();
  const todayString = today.toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(todayString);
  const dateChangeHandler = (date: string) => {
    // getDeviceToken();
    console.log(date, "date 받음");
    setSelectedDate(date);
  };
  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }
  return (
    <BackgroundScreen>
      <Card>
        <ScrollView style={styles.scrollView}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              <Text style={styles.name}>정서 </Text>님의 캘린더
            </Text>
            {/* <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          /> */}
            {/* <EditScreenInfo path="/screens/HomeScreen.tsx" /> */}
          </View>
          <View style={styles.calendarOuterContainer}>
            <View style={styles.calendarContainer}>
              <CalendarView
                onChangeDate={dateChangeHandler}
                todayString={todayString}
              />
            </View>
          </View>
          <View>
            <DayPillSchedule selectedDate={selectedDate} />
          </View>
        </ScrollView>
      </Card>
      {/* <View style={styles.titleContainer}></View> */}
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  outerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    // height: 0,
    paddingTop: 10,
    paddingBottom: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  calendarOuterContainer: {
    height: 400,
    // backgroundColor: "red",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  calendarContainer: {
    height: "100%",
    // backgroundColor: "red",
    width: "90%",
  },
  title: {
    fontSize: 15,
    textAlign: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
