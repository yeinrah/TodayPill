import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import StartScreen from "./screens/StartScreen/StartScreen";
import { useFocusEffect } from "@react-navigation/native";
import * as Notifications from "expo-notifications";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [userInfo, setUserInfo] = useState("");
  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem("@storage_User", value);
    } catch (e) {
      // saving error
    }
  };
  const loadData = async () => {
    try {
      let userStorage = await AsyncStorage.getItem("@storage_UserId");
      if (userStorage) {
        setUserInfo(userStorage);
        return true;
      }
      console.log(userStorage, "name");
      console.log(userInfo, "userInfo");
      return false;
    } catch (e) {
      console.log("error", e);
    }
  };
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
  // useEffect(() => {
  //   console.log("main start");
  //   loadData();
  // }, []);
  // useFocusEffect(
  //   useCallback(() => {
  //     loadData();
  //   }, [])
  // );
  // useFocusEffect(
  //   useCallback(() => {
  //     console.log("???");
  //   }, [])
  // );
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} LoginCheck={loadData} />
        {userInfo && (
          <>
            <StatusBar />
          </>
        )}
      </SafeAreaProvider>
    );
  }
}
// const styles = StyleSheet.create({
//   rootScreen: {
//     flex: 1,
//   },
//   backgroundImage: {
//     opacity: 0.15,
//   },
// });
