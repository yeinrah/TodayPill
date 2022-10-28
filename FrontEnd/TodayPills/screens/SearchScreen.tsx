import { StyleSheet, Text, View } from "react-native";
import Card from "../components/UI/Card";

import { RootTabScreenProps } from "../types";
import BackgroundScreen from "./BackgroundScreen";

export default function SearchScreen({ navigation }: any) {
  return (
    <BackgroundScreen>
      <Card>
        <View style={styles.container}>
          <Text style={styles.title}>내가 섭취할 영양제 검색 스크린</Text>
        </View>
      </Card>
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
});
