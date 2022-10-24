import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, View, Text } from "react-native";
import { primary, secondary } from "../constants/Colors";

// import EditScreenInfo from "../components/EditScreenInfo";
// import { Text, View } from "../components/Themed";

import { RootTabScreenProps } from "../types";

type IBackground = {
  children?: JSX.Element;
};

export default function BackgroundScreen({ children }: IBackground) {
  return (
    <LinearGradient
      colors={[primary, secondary]}
      // colors={["#E2C3DC", "#CEEAE6"]}
      // start={{ x: 0.0, y: 0.25 }}
      // end={{ x: 0.5, y: 1.0 }}
      // locations={[0, 0.5, 0.6]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../assets/images/background2.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // title: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: "80%",
  // },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
