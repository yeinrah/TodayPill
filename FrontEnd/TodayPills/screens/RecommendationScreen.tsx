import { StyleSheet, Text, View } from "react-native";

// import EditScreenInfo from "../components/EditScreenInfo";
// import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import BackgroundScreen from "./BackgroundScreen";

export default function RecommendationScreen({
  navigation,
}: RootTabScreenProps<"Recommendation">) {
  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <Text style={styles.title}>영양제 추천</Text>
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
