import { StyleSheet, ImageBackground, View, Text, Image } from "react-native";
import { IBackground } from "../types";

export default function AiBackgroundScreen({ children }: IBackground) {
  return (
		<ImageBackground
			source={require("../assets/images/background3.png")}
			resizeMode="cover"
			style={styles.rootScreen}
		>
			<View style={styles.logoContainer}>
				<View style={styles.imageContainer}>
					<Image
						style={styles.image}
						source={require("../assets/images/logo3.png")}
					/>
				</View>
			</View>
			<View style={styles.personcontainer}>
				<Image
					source={require("../assets/images/ai/face1.png")}
					style={styles.person}
				/>
			</View>
			<View style={styles.children}>{children}</View>
		</ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
		position: "relative",
  },
  logoContainer: {
    height: "20%",
    paddingTop: 70,
    paddingHorizontal: 30,
  },
  imageContainer: {
    width: 220,
    height: 60,
  },
  image: {
    width: "100%",
    height: "100%",
  },
	personcontainer: {
		position: "absolute",
		bottom: 65,
		right: 10,
		width: "40%",
	},
	person: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
  children: {
    flex: 4,
  },
});