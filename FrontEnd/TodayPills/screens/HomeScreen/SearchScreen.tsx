import { ScrollView, StyleSheet, View, Text } from "react-native";
import BackgroundScreen from "../BackgroundScreen";
import Card from "../../components/UI/Card";
import SearchBar from "../../components/TopBar/SearchBar";
import DetailedPillCard from "../../components/Cards/DetailedPillCard";
import { useEffect, useState, useCallback } from "react";
import { fetchAllSupplements } from "../../API/supplementAPI";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SearchScreen({ navigation, route }: any) {
  //searchResults: 검색어를 이름에 포함하는 영양제 배열
  const [searchResults, setSearchResults] = useState([]);
  const [userId, setUserId] = useState(0);
  const filterSupplements = async (word) => {
    const supplements = await fetchAllSupplements();
    const filteredSupplements = supplements.filter((supplement) =>
      supplement.supplementName.includes(word)
    );
    console.warn(filteredSupplements.length);
    setSearchResults(filteredSupplements);
  };
  const getUserId = async () => {
    const currentUserId = await AsyncStorage.getItem("@storage_UserId");
    setUserId(parseInt(currentUserId));
  };
  // useEffect(() => {
  //   filterSupplements(route.params.word);
  // }, [route.params.word]);
  useFocusEffect(
    useCallback(() => {
      getUserId();

      filterSupplements(route.params.word);

      // return () => {

      // };
    }, [route.params.word])
  );

  return (
    <BackgroundScreen>
      <Card>
        <View style={styles.container}>
          <SearchBar navigation={navigation} word={route.params.word} />
          <ScrollView>
            {searchResults.map((each, idx) => (
              <DetailedPillCard
                key={each.supplementId}
                supplementId={each.supplementId}
                userId={userId}
                image={each.image}
                brand={each.brand}
                supplementName={each.supplementName}
                // onPressDislike={dislikeHandler}
              />
            ))}

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
