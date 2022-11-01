import { View, TextInput, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textinput}
                placeholder="어떤 영양제를 찾으세요?"
            />
            <Ionicons
                name="search"
                size={30}
                style={styles.searchicon}
                onPress={() => navigation.navigate("SearchScreen")}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        position: "relative",
        marginTop: 15,
    },
    textinput: {
        height: 36,
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 40,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 20,
        paddingRight: 40,
        elevation: 10,
        backgroundColor: "white",
    },
    searchicon: {
        position: "absolute",
        right: 40,
        color: "#E2C3DC",
    },
});

export default SearchBar;