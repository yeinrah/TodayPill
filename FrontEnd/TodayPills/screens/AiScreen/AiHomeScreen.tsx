import { ScrollView, Text } from "react-native";
import AiNutrient from "../../components/AiPage/AiNutrient";
import BackgroundScreen2 from "../BackgroundScreen2";

export default function AiHomeScreen ({ navigation }: any) {
	return (
		<BackgroundScreen2>
			<ScrollView>
				<AiNutrient navigation={navigation} />
			</ScrollView>
		</BackgroundScreen2>
	)
};