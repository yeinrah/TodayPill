import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Button,
  ScrollView,
} from "react-native";

export default function MyPickPills() {
  return (
    <View style={styles.likeContainer}>
      <Text style={styles.name}>나의 Pick</Text>
      <View style={styles.pickPillsContainer}>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  likeContainer: {
    // // flex: 2,
    // width: "100%",
    // // height: "30%",
    // height: 150,
    // alignItems: "center",
    // justifyContent: "center",
  },
  pickPillsContainer: {},
  name: {
    fontSize: 24,
    fontWeight: "900",
  },
});
