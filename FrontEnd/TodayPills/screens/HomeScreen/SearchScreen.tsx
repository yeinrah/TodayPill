import { ScrollView, StyleSheet, View } from "react-native";
import BackgroundScreen from "../BackgroundScreen";
import Card from "../../components/UI/Card";
import SearchBar from "../../components/TopBar/SearchBar";
import DetailedPillCard from "../../components/Cards/DetailedPillCard";

export default function SearchScreen({ navigation }: any) {
  return (
    <BackgroundScreen>
      <Card>
        <View style={styles.container}>
          <SearchBar navigation={navigation} />
          <ScrollView>
            <DetailedPillCard />
            <DetailedPillCard />
            <DetailedPillCard />
            <DetailedPillCard />
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