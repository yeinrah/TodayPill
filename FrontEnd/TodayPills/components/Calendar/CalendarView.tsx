import { StyleSheet, View, Text } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

export default function CalendarView() {
  const customTheme = {
    backgroundColor: "rgba(226, 195, 220, 0.2)",
    // calendarBackground: "rgba(226, 195, 220, 0.2)",

    // textSectionTitleColor: '#b6c1cd',
    // textSectionTitleDisabledColor: '#d9e1e8',
    // selectedDayBackgroundColor: '#00adf5',
    // selectedDayTextColor: '#ffffff',
    // todayTextColor: '#00adf5',
    // dayTextColor: '#2d4150',
    // textDisabledColor: '#d9e1e8',
    // dotColor: '#00adf5',
    // selectedDotColor: '#ffffff',
    // arrowColor: 'orange',
    // disabledArrowColor: '#d9e1e8',
    // monthTextColor: 'blue',
    // indicatorColor: 'blue',
    // textDayFontFamily: 'monospace',
    // textMonthFontFamily: 'monospace',
    // textDayHeaderFontFamily: 'monospace',
    // textDayFontWeight: '300',
    // textMonthFontWeight: 'bold',
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

  return (
    <View style={styles.calendarContainer}>
      <Calendar style={styles.calendar} theme={customTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  calendar: {
    width: "100%",
    // backgroundColor: "rgba(226, 195, 220, 0.2);",
    // borderRadius: 20,

    // borderBottomWidth: 1,
    // borderBottomColor: "#e0e0e0",
  },
});
