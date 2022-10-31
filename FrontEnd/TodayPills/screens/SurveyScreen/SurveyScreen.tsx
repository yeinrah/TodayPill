import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import BackgroundScreen from "../BackgroundScreen";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

const SurveyScreen = ({ navigation }: any) => {
    const [selectedItem, setSelectedItem] = useState(0);

    return (
        <BackgroundScreen>
            <View style={styles.container}>
                <Ionicons
                    name="arrow-back"
                    size={48}
                    color="black"
                    style={styles.icon}
                />
                <View style={styles.textcontainer}>
                    <Text style={[styles.text, styles.largetext]}>
                        흡연 여부를 알려주세요
                    </Text>
                    <Text style={[styles.text, styles.smalltext]}>
                        흡연할 경우 조심해야 할 성분이 있어요
                    </Text>
                </View>
                <ScrollView>
                    <View style={styles.itemcontainer}>
                        <View style={styles.itemoutercontainer}>
                            <Pressable
                                android_ripple={{ color: "#4E736F" }}
                                style={styles.iteminnercontainer}
                                onPress={() => console.log("hi")}
                            >
                                <View style={styles.itemflex}>
                                    <Text style={styles.itemtitle}>
                                        비흡연
                                    </Text>
                                    <AntDesign
                                        name="checkcircleo"
                                        size={24}
                                        color="black"
                                    />
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.itemcontainer}>
                        <View style={styles.itemoutercontainer}>
                            <Pressable
                                android_ripple={{ color: "#4E736F" }}
                                style={styles.iteminnercontainer}
                                onPress={() => console.log("hi")}
                            >
                                <Text style={styles.itemtitle}>
                                    흡연
                                </Text>
                                <AntDesign
                                    name="checkcircleo"
                                    size={24}
                                    color="black"
                                />
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.buttoncontainer}>
                    <View style={styles.buttonOuterContainer}>
                        <Pressable
                            android_ripple={{ color: "#4E736F" }}
                            style={styles.buttonInnerContainer}
                            onPress={() => console.log("hi")}
                        >
                            <Text style={styles.title}>
                                다 음
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </BackgroundScreen>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "space-around",
        // alignItems: "center",
    },
    icon: {
        marginLeft: 10,
        marginBottom: 10,
    },
    textcontainer: {
        marginLeft: 30,
        height: "15%",
    },
    text: {
        fontWeight: "bold",
        color: "black",
    },
    largetext: {
        fontSize: 24,
    },
    smalltext: {
        fontSize: 15,
        marginTop: 10,
    },
    itemcontainer: {
        width: "100%",
        alignItems: "center",
    },
    itemoutercontainer: {
        borderRadius: 10,
        width: "80%",
        height: 80,
        overflow: "hidden",
        marginVertical: 10,
        elevation: 10,
    },
    iteminnercontainer: {
        paddingVertical: 25,
        backgroundColor: "#E5E5E5",
    },
    itemflex: {
        flexDirection: "row",
        alignItems: "center",
    },
    itemtitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 25,
    },
    buttoncontainer: {
        width: "100%",
        alignItems: "center",
        marginVertical: 20,
    },
    buttonOuterContainer: {
        borderRadius: 10,
        width: "80%",
        height: 50,
        overflow: "hidden",
        marginVertical: 10,
        elevation: 10,
    },
    buttonInnerContainer: {
        paddingVertical: 10,
        backgroundColor: "#E881B1",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
});

export default SurveyScreen;