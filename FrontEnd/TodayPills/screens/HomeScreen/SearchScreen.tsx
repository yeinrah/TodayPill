import { ScrollView, StyleSheet, View, Text } from "react-native";
import BackgroundScreen from "../BackgroundScreen";
import Card from "../../components/UI/Card";
import SearchBar from "../../components/TopBar/SearchBar";
import DetailedPillCard from "../../components/Cards/DetailedPillCard";
import { useEffect, useState } from "react";
import { getAllSupplements } from "../../API/supplementAPI";

export default function SearchScreen({ navigation, route }: any) {
  //searchResults: 검색어를 이름에 포함하는 영양제 배열
  const [searchResults, setSearchResults] = useState([]);
  const filterSupplements = async (word) => {
    const supplements = await getAllSupplements();
    const filteredSupplements = supplements.filter(supplement => 
      supplement.name.includes(word)
    );
    setSearchResults(filteredSupplements);
  }
  
  useEffect(() => {
    filterSupplements(route.params.word);
  }, [route.params.word])

  return (
    <BackgroundScreen>
      <Card>
        <View style={styles.container}>
          <SearchBar
            navigation={navigation}
            word={route.params.word}
          />
          <ScrollView>
            <DetailedPillCard />
            <DetailedPillCard />
            <DetailedPillCard />
            <DetailedPillCard />
            <View style={styles.height} />
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
  height: {
    height: 25,
  },
});