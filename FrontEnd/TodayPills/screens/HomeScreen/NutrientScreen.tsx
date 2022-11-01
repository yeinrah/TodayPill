import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import DetailedPillCard from "../../components/Cards/DetailedPillCard";
import Card from "../../components/UI/Card";
import BackgroundScreen from "../BackgroundScreen";

const NutrientScreen = ({ navigation }: any) => {
    return (
        <BackgroundScreen>
            <Card>
                <View>
                    <Text style={styles.text}>
                        비타민 C
                    </Text>
                    <View style={styles.buttonOuterContainer}>
                        <Pressable
                            android_ripple={{ color: "#4E736F" }}
                            style={styles.buttonInnerContainer}
                            onPress={() => console.log("hi")}
                        >
                            <Text style={styles.title}>
                                영양제 추천받기
                            </Text>
                        </Pressable>
                    </View>
                    <ScrollView>
                        <DetailedPillCard />
                        <DetailedPillCard />
                        <DetailedPillCard />
                        <DetailedPillCard />
                    </ScrollView>
                </View>
            </Card>
        </BackgroundScreen>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 30,
    },
    buttonOuterContainer: {
        borderRadius: 10,
        width: "30%",
        marginLeft: 20,
        overflow: "hidden",
        marginVertical: 10,
        elevation: 10,
    },
    buttonInnerContainer: {
        paddingVertical: 7,
        backgroundColor: "#8EE8DE",
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
});

export default NutrientScreen;