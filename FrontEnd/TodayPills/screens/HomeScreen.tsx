import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, View, Text } from "react-native";

// import EditScreenInfo from "../components/EditScreenInfo";
// import { Text, View } from "../components/Themed";

import { RootTabScreenProps } from "../types";
import BackgroundScreen from "./BackgroundScreen";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        {/* <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          /> */}
        {/* <EditScreenInfo path="/screens/HomeScreen.tsx" /> */}
      </View>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "orange",
//   },
//   background: {
//     position: "absolute",
//     left: 0,
//     right: 0,
//     top: 0,
//     height: 300,
//   },
//   button: {
//     padding: 15,
//     alignItems: "center",
//     borderRadius: 5,
//   },
//   text: {
//     backgroundColor: "transparent",
//     fontSize: 15,
//     color: "#fff",
//   },
// });
