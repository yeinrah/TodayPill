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

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [userInfo, setUserInfo] = useState("");
  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem("@storage_Key", value);
    } catch (e) {
      // saving error
    }
  };
  const loadData = async () => {
    try {
      let userStorage = await AsyncStorage.getItem("@storage_User");
      if (userStorage) setUserInfo(userStorage);
      console.log(userStorage, "name");
      console.log(userInfo, "userInfo");
    } catch (e) {
      console.log("error", e);
    }
  };
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
            {/* <Navigation colorScheme={colorScheme} /> */}
            <StatusBar />
            {/* <Button
              title="로그인"
              onPress={async () => {
                let temp = await AsyncStorage.setItem("@storage_User", "정서");
                console.log(temp);
              }}
            />
            <Button
              title="로그아웃"
              onPress={async () => {
                let temp = await AsyncStorage.setItem("@storage_User", "");
                console.log("logout");
                setUserInfo("");
              }}
            /> */}
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
