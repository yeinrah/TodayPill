import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, View, Text } from "react-native";

// import EditScreenInfo from "../components/EditScreenInfo";
// import { Text, View } from "../components/Themed";

import { RootTabScreenProps } from "../types";
import BackgroundScreen from "./BackgroundScreen";
import Card from "../components/UI/Card";
import SearchBar from "../components/TopBar/SearchBar";
import MainPill from "../components/MainPage/MainPill";
import MainNutrient from "../components/MainPage/MainNutrient";
import DetailedPillCard from "../components/Cards/DetailedPillCard";

export default function MyPillsScreen({ navigation }: any) {
  return (
    <BackgroundScreen>
      <Card>
        <View style={styles.container}>
          <SearchBar />
          <MainPill />
          <MainNutrient />
        </View>
      </Card>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
