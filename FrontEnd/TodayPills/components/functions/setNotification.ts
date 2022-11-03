import * as Notifications from "expo-notifications";

// identifier(string) : 푸시 알림 이름(알림 취소할 때 필요함, 다른 알림과 같은 이름 써도 됨)
// title(string) : 푸시 알림 제목(알림에 크게 뜸)
// body(string) : 푸시 알림 내용(알림에 작게 뜸)
// weekday(int) : 푸시 알림 요일(0: 매일, 1: 일요일, 2: 월요일, ..., 7: 토요일)
// hour(int) : 푸시 알림 시간(0, 1, 2, ..., 23)
// minute(int) : 푸시 알림 분(0, 1, 2, ..., 59)
export const setNotification = (identifier, title, body, weekday, hour, minute) => {
    Notifications.scheduleNotificationAsync({
        identifier: identifier,
        content: {
            title: title,
            body: body,
        },
        trigger: weekday === 0 ? {
            hour: hour,
            minute: minute,
            repeats: true,
        } : {
            weekday: weekday,
            hour: hour,
            minute: minute,
            repeats: true,
        },
    });
};