import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BackgroundScreen2 from "../BackgroundScreen2";
import Card from "../../components/UI/Card";
import GoBackBtn from "../../components/UI/GoBackBtn";

export default function SupplementScreen ({ navigation, route }: any) {
	console.log(route.params.data.image)
	return (
		<BackgroundScreen2>
			<Card>
				<View style={styles.container}>
					<View style={styles.gobackcontainer}>
						<GoBackBtn
							onPress={() => navigation.pop()}
							size={33}
						/>
					</View>
					<View style={styles.titlecontainer}>
						<Text style={styles.title}>
							{route.params.data.supplementName}
						</Text>
					</View>
					<ScrollView>
						<View style={styles.imagecontainer}>
							<Image
								source={{ uri: route.params.data.image }}
								style={styles.image}
							/>
						</View>
						<View />
					</ScrollView>
				</View>
			</Card>
		</BackgroundScreen2>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 1000,
		paddingTop: 10,
	},
	gobackcontainer: {
		marginLeft: 10,
	},
	titlecontainer: {
		alignItems: "center",
	},
	title: {
		width: "90%",
		fontSize: 25,
		overflow: "hidden",
		textAlign: "center",
		fontFamily: "웰컴체_Bold",
	},
	imagecontainer: {
		width: "100%",
		height: 200,
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
});