import { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Linking } from "react-native";

export default function AiQna (props: any) {
	const [isStretched, setIsStretched] = useState(false);

	return (
		<Pressable
			onPress={() => setIsStretched(!isStretched)}
			android_ripple={{ color: "#4E736F" }}
			style={styles.container}
		>
			{isStretched ?
				<View style={styles.textcontainer}>
					<Text style={{...styles.text, fontFamily: "웰컴체_Bold"}}>
						{props.title}
					</Text>
					<View style={styles.line} />
					<Text style={{...styles.text, fontFamily: "웰컴체_Regular"}}>
						{props.contents.map((content, idx) =>
							content.length === 2 ?
							<Text
								key={idx}
								style={styles.link}
								onPress={() => Linking.openURL(content[1])}
							>
								{content[0]}
							</Text> : content
						)}
					</Text>
				</View> :
				<View style={styles.textcontainer}>
					<Text style={{...styles.text, fontFamily: "웰컴체_Bold"}}>
						{props.title}
					</Text>
				</View>
			}
		</Pressable>
	)
};

const styles = StyleSheet.create({
	container: {
		width: "90%",
		borderRadius: 20,
		backgroundColor: "white",
		elevation: 3,
		marginBottom: 10,
	},
	textcontainer: {
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	text: {
		fontSize: 16,
		lineHeight: 20,
	},
	line: {
		width: "102%",
		height: 1,
		backgroundColor: "#F5F5F5",
		alignSelf: "center",
		marginVertical: 5,
	},
	link: {
		color: "grey",
		textDecorationLine: "underline",
	},
});