import { View, TextInput, StyleSheet, Alert, Keyboard } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";

const SearchBar = ({ navigation, word, isMain }: any) => {
  const [keyword, setKeyword] = useState(word);
  const textinput = useRef();
  const Search = () => {
    if (keyword) {
      const realKeyword = keyword.trim();
      if (isMain) {
        navigation.navigate("SearchScreen", { word: realKeyword, isMain: true });
      } else {
        navigation.navigate("Search", { word: realKeyword, isMain: false });
      }
    } else {
      Alert.alert("", "검색어를 입력하세요.", [
        {
          text: "확인",
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder="어떤 영양제를 찾으세요?"
        onChangeText={(word) => setKeyword(word)}
        onSubmitEditing={() => Search()}
        value={keyword}
        returnKeyType="search"
        ref={textinput}
      />
      {keyword ? (
        <Feather
          name="x"
          size={24}
          style={styles.clearicon}
          onPress={() => {
            setKeyword("");
            textinput.current.clear();
          }}
        />
      ) : null}
      <Ionicons
        name="search"
        size={30}
        style={styles.searchicon}
        onPress={() => {
          Search();
          Keyboard.dismiss();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    position: "relative",
    marginVertical: 15,
  },
  textinput: {
    height: 36,
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 40,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 20,
    paddingRight: 66,
    elevation: 10,
    backgroundColor: "white",
  },
  clearicon: {
    position: "absolute",
    right: 70,
  },
  searchicon: {
    position: "absolute",
    right: 40,
    color: "#E2C3DC",
  },
});

export default SearchBar;
