import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import SimpleNutrientCard from "../Cards/SimpleNutrientCard";
import NutrientImage from "../Data/NutrientImage";

const MainNutrient = ({ navigation }: any) => {
    const [mainNutrients, setMainNutrients] = useState([
       {image: require("../../assets/images/nutrients/1.png"), nutrient: "비타민 C"}, 
       {image: require("../../assets/images/nutrients/2.png"), nutrient: "오메가 3"}, 
       {image: require("../../assets/images/nutrients/3.png"), nutrient: "유산균"}, 
       {image: require("../../assets/images/nutrients/4.png"), nutrient: "마그네슘"}, 
       {image: require("../../assets/images/nutrients/5.png"), nutrient: "비타민 D"}, 
       {image: require("../../assets/images/nutrients/6.png"), nutrient: "프로폴리스"}
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                모든 성분
            </Text>
            <View style={styles.cardscontainer}>
                {Object.entries(NutrientImage).map((mainNutrient, idx) =>
                    <Pressable
                        key={idx}
                        onPress={() => navigation.navigate("NutrientScreen", { nutrient: mainNutrient[0] })}>
                        <SimpleNutrientCard
                            image={mainNutrient[1]}
                            nutrient={mainNutrient[0]}
                        />
                    </Pressable>
                )}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 15,
        paddingBottom: 15,
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