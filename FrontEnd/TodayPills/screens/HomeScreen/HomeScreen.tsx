import { ScrollView, StyleSheet, View } from "react-native";
import BackgroundScreen from "../BackgroundScreen";
import Card from "../../components/UI/Card";
import SearchBar from "../../components/TopBar/SearchBar";
import MainPill from "../../components/MainPage/MainPill";
import MainNutrient from "../../components/MainPage/MainNutrient";

export default function HomeScreen({ navigation }: any) {
  return (
    <BackgroundScreen>
      <Card>
        <View style={styles.container}>
          <SearchBar navigation={navigation} />
          <ScrollView>
            <MainPill />
            <MainNutrient navigation={navigation} />
          </ScrollView>
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