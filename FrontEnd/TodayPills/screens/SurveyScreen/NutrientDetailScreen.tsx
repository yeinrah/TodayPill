import { StyleSheet, Text, View, Pressable, ImageBackground } from "react-native";
import BackgroundScreen from "../BackgroundScreen";
import { Ionicons } from '@expo/vector-icons';

const NutrientDetailScreen = () => {
    return (
        <BackgroundScreen>
            <View style={styles.container}>
                <Ionicons
                    name="arrow-back"
                    size={48}
                    color="black"
                    style={styles.icon}
                />
                <View style={styles.nutrienttextcontainer}>
                    <Text style={[styles.nutrienttext, styles.boldtext]}>
                        마그네슘
                    </Text>
                    <Text style={styles.nutrienttext}>
                        은?
                    </Text>
                </View>
                <View style={styles.aligncenter}>
                    <View style={styles.descriptioncontainer}>
                        <ImageBackground
                            source={require("../../assets/images/pillbag.png")}
                            style={styles.image}
                        >
                            <Text style={styles.descriptiontext}>
                                마그네슘에도 여러종류가 있다는 것을 알고 계시나요?{"\n"}
                                흡수율을 높이고 위장장애 발생률을 줄인 킬레이트형 마그네슘을 만나보세요!
                            </Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.recommendcontainer}>
                        <View style={styles.recommendtextcontainer}>
                            <Text style={[styles.recommendtext, styles.boldtext]}>
                                권민지&nbsp;
                            </Text>
                            <Text style={styles.recommendtext}>
                                님께 맞는&nbsp;
                            </Text>
                            <Text style={[styles.recommendtext, styles.boldtext]}>
                                마그네슘
                            </Text>
                            <Text style={styles.recommendtext}>
                                을 추천받으시겠어요?
                            </Text>
                        </View>
                        <View style={styles.buttonOuterContainer}>
                            <Pressable
                                android_ripple={{ color: "#4E736F" }}
                                style={styles.buttonInnerContainer}
                                onPress={() => console.log("hi")}
                            >
                                <Text style={styles.title}>
                                    추천 받기
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </BackgroundScreen>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        marginLeft: 10,
        marginBottom: 10,
    },
    nutrienttextcontainer: {
        flexDirection: "row",
        marginLeft: 30,
    },
    nutrienttext: {
        fontSize: 25,
    },
    aligncenter: {
        alignItems: "center",
        justifyContent: "space-between",
        height: "70%",
    },
    boldtext: {
        fontWeight: "bold",
    },
    descriptioncontainer: {
        width: "80%",
        alignItems: "center",
        marginTop: 30,
    },
    image: {
        width: "100%",
        alignItems: "center",
    },
    descriptiontext: {
        fontSize: 20,
        width: "70%",
        marginTop: 40,
        marginBottom: 40,
    },
    recommendcontainer: {
        width: "100%",
        alignItems: "center",
    },
    recommendtextcontainer: {
        flexDirection: "row",
        marginBottom: 15,
    },
    recommendtext: {
        fontSize: 15,
    },
    buttonOuterContainer: {
        borderRadius: 20,
        width: "80%",
        overflow: "hidden",
        marginVertical: 10,
        elevation: 10,
    },
    buttonInnerContainer: {
        paddingVertical: 7,
        backgroundColor: "#8EE8DE",
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
});

export default NutrientDetailScreen;