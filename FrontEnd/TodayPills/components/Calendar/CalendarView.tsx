import { StyleSheet, View, Text } from "react-native";
import { Calendar, LocaleConfig, Agenda } from "react-native-calendars";
import { accent, primary, secondary } from "../../constants/Colors";
import { useState, useMemo } from "react";

export interface CalendarViewProps {
  onChangeDate: (date: string) => void;
  todayString: string;
}

export default function CalendarView({
  onChangeDate,
  todayString,
}: CalendarViewProps) {
  // console.log(todayString);

  const customTheme = {
    "stylesheet.calendar.header": {
      // headerContainer: {
      //   flexDirection: "row",
      //   backgroundColor: "#eee",
      //   borderRadius: 12,
      // },
      dayTextAtIndex0: {
        color: primary,
      },
      dayTextAtIndex6: {
        color: accent,
      },
    },
    // backgroundColor: "rgba(211, 60, 180, 0.2)",
    // calendarBackground: "rgba(226, 195, 220, 0.2)",
    // calendarBackground: primary,
    // textSectionTitleColor: '#b6c1cd',
    // textSectionTitleDisabledColor: '#d9e1e8',
    // selectedDayBackgroundColor: "#E2C3DC",
    selectedDayBackgroundColor: "transparent",
    selectedDayTextColor: "black",
    // todayTextColor: primary,
    // dayTextColor: '#2d4150',
    // textDisabledColor: '#d9e1e8',
    // dotColor: '#00adf5',
    // selectedDotColor: '#ffffff',
    arrowColor: secondary,
    // disabledArrowColor: '#d9e1e8',
    // monthTextColor: accent,
    // indicatorColor: 'blue',
    // textDayFontFamily: 'monospace',
    // textMonthFontFamily: 'monospace',
    // textDayHeaderFontFamily: 'monospace',
    // textDayFontWeight: '300',
    textMonthFontWeight: "bold",
    // textDayHeaderFontWeight: '300',
    // textDayFontSize: 16,
    // textMonthFontSize: 16,
    // textDayHeaderFontSize: 16
  };
  LocaleConfig.locales.kr = {
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    monthNamesShort: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    dayNames: ["일", "월", "화", "수", "목", "금", "토"],
    dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  };
  LocaleConfig.defaultLocale = "kr";

  const [daySelected, setDaySelected] = useState(todayString);
  const [taken, setTaken] = useState([]);
  const dayPressHandler = (day: any) => {
    console.log("selected day", day);
    onChangeDate(day.dateString);
    setDaySelected(day.dateString);
  };
  const [items, setItems] = useState({});
  const running = { key: "running", color: "blue" };
  const cycling = { key: "cycling", color: "green" };
  const walking = { key: "walking", color: "orange" };
  const todayDot = { key: "today", color: primary };
  // const g = { key: "g", color: "black" };
  // const k = { key: "k", color: "red" };

  const marked = useMemo(
    () => ({
      "2022-10-01": {
        dots: [running, walking],
      },
      "2022-10-02": {
        dots: [running, walking, cycling],
      },
      [todayString]: {
        dots: [todayDot],
      },
      [daySelected]: {
        selected: true,
        selectedColor: accent,
        selectedTextColor: "white",
      },

      // [taken]: {
      //   selected: true,
      //   selectedColor: accent,
      //   selectedTextColor: "white",
      // },
    }),
    [daySelected, taken]
  );
  // const marked = {
  //   "2022-10-10": { marked: true },
  //   "2022-10-12": { selected: true },
  //   todayString: { selected: true },
  // };
  return (
    <View style={styles.calendarContainer}>
      <Calendar
        // style={styles.calendar}
        style={{
          width: "100%",
          borderRadius: 10,
          paddingHorizontal: 15,
          paddingVertical: 8,
          // margin: 12,
          elevation: 5,
          // borderWidth: 2,
          borderColor: primary,
          // backgroundColor: "rgba(226, 195, 220)",
        }}
        // initialDate={todayString}
        theme={customTheme}
        markingType="multi-dot"
        onDayPress={dayPressHandler}
        monthFormat={"yyyy년 MM월"}
        markedDates={marked}
      />
      {/* <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={"2022-07-07"}
        refreshControl={null}
        showClosingKnob={true}
        refreshing={false}
        renderItem={renderItem}
      /> */}
    </View>
  );
}

// 샘플 캘린더!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ---------------------------------------------------------------------------
// function CustomCalendar(props) {
//   const initDate = '2022-12-01';
//   const [selected, setSelected] = useState(initDate);
//   const marked = useMemo(() => ({
//     [selected]: {
//       selected: true,
//       selectedColor: '#222222',
//       selectedTextColor: 'yellow',
//     }
//   }), [selected]);
//   return (
//     <Calendar
//       initialDate={initDate}
//       markedDates={marked}
//       onDayPress={(day) => {
//         setSelected(day.dateString);
//         props.onDaySelect && props.onDaySelect(day);
//       }}
//       {...props}
//     />
//   );
// }

// function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <CustomCalendar onDaySelect={(day) => console.log(`Date selected: ${day.dateString}`)}/>
//     </SafeAreaView>
//   );
// };

const styles = StyleSheet.create({
  calendarContainer: {
    width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  calendar: {
    width: "100%",
    // height: 300,
    // backgroundColor: "rgba(226, 195, 220, 0.2);",
    // borderRadius: 20,

    // borderBottomWidth: 1,
    // borderBottomColor: "#e0e0e0",
  },
});
