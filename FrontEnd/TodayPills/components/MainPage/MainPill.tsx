import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SimplePillCard from "../Cards/SimplePillCard";

const MainPill = () => {
    const [mainPills, setMainPills] = useState([
        {image: require("../.././assets/images/pills/sample1.png"), brand: "종근당건강", pill: "락토핏 생유산균 코어"},
        {image: require("../.././assets/images/pills/sample2.png"), brand: "닥터스베스트", pill: "킬레이트 마그네슘"},
        {image: require("../.././assets/images/pills/sample3.png"), brand: "고려은단", pill: "비타민C 1000"},
        {image: require("../.././assets/images/pills/sample4.png"), brand: "종근당건강", pill: "칼슘 앤 마그네슘"}
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                오늘 많은 이용자들이 본 영양제
            </Text>
            <View style={styles.cardscontainer}>
                {mainPills.map((mainPill, idx) => 
                    <SimplePillCard key={idx} image={mainPill.image} brand={mainPill.brand} pill={mainPill.pill}/>
                )}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 15,
    },
    text: {
        fontSize: 17,
        fontWeight: "bold",
        marginLeft: 5,
        marginBottom: 10,
    },
    cardscontainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#ECF6F4",
        borderRadius : 10,
        elevation: 5,
    },
})

export default MainPill;