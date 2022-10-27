import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SimpleNutrientCard from "../Cards/SimpleNutrientCard";

const MainNutrient = () => {
    const [mainNutrients, setMainNutrients] = useState([
       {image: require("../../assets/images/nutrients/sample1.png"), nutrient: "비타민 C"}, 
       {image: require("../../assets/images/nutrients/sample2.png"), nutrient: "오메가-3"}, 
       {image: require("../../assets/images/nutrients/sample3.png"), nutrient: "유산균"}, 
       {image: require("../../assets/images/nutrients/sample4.png"), nutrient: "마그네슘"}, 
       {image: require("../../assets/images/nutrients/sample5.png"), nutrient: "비타민 D"}, 
       {image: require("../../assets/images/nutrients/sample6.png"), nutrient: "히알루론산"}
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                모든 성분
            </Text>
            <View style={styles.cardscontainer}>
                {mainNutrients.map((mainNutrient, idx) =>
                    <SimpleNutrientCard key={idx} image={mainNutrient.image} nutrient={mainNutrient.nutrient} />
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
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
});

export default MainNutrient;