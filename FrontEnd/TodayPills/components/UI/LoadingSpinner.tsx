import { StyleSheet, View, ActivityIndicator } from "react-native";
import { accent } from "../../constants/Colors";
import BackgroundScreen from "../../screens/BackgroundScreen";
import { IBackground } from "../../types";

export default function LoadingSpinner() {
  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={accent} />
      </View>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,

    // backgroundColor: "white",
  },
});
