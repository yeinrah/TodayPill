import { ScrollView, StyleSheet, View } from "react-native";
import AiNutrient from "../../components/AiPage/AiNutrient";
import CustomBtn from "../../components/UI/CustomBtn";
import BackgroundScreen2 from "../BackgroundScreen2";
import { accent } from "../../constants/Colors";
import axios from "axios";

export default function AiHomeScreen ({ navigation }: any) {
	// const axios = require("axios");

	const options = {
		method: 'POST',
		url: 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '13f6e22f9dmsh5f803277f702e1fp13cae8jsn62dafbdd137d',
			'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
		},
		data: '{"url":"https://techcrunch.com/2019/08/12/verizon-is-selling-tumblr-to-wordpress-parent-automattic/","min_length":100,"max_length":300,"is_detailed":false}'
	};

	const test = () => {
		axios.request(options).then(function (response) {
			console.log(response.data);
		}).catch(function (error) {
			console.error(error);
		});
	};

	return (
		<BackgroundScreen2>
			<ScrollView>
				<AiNutrient navigation={navigation} />
				<View style={styles.analysisbutton}>
					<CustomBtn
						buttonColor={accent}
						title={"직접 논문 분석해보기"}
						titleColor={"#fff"}
						buttonWidth={"90%"}
						fontSize={20}
						onPress={() => test()}
					/>
				</View>
			</ScrollView>
		</BackgroundScreen2>
	)
};

const styles = StyleSheet.create({
	analysisbutton: {
		flex: 1,
		alignItems: "center",
	},
});