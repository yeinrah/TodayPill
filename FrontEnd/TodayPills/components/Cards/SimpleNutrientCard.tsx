import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";

interface NutrientProps {
  image: ImageSourcePropType;
  nutId: number;
  nutrient: string;
}

const SimpleNutrientCard = (props: NutrientProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image source={props.image} style={styles.image} />
      </View>
      <Text style={styles.text}>{props.nutrient}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 90,
    borderRadius: 25,
    backgroundColor: "white",
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  imagecontainer: {
    width: 60,
    height: 60,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default SimpleNutrientCard;
