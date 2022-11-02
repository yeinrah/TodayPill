import { StyleSheet, View, ActivityIndicator } from "react-native";
import { accent } from "../../constants/Colors";
import { IBackground } from "../../types";

export default function LoadingSpinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={accent} />
    </View>
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
