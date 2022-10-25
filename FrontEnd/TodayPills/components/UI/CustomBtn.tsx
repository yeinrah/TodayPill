import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

// import { IBackground } from "../../types";

export default function CustomBtn(props: any) {
  // const defaultProps = {
  //   title: "untitled",
  //   buttonColor: "#000",
  //   titleColor: "#fff",
  //   onPress: () => null,
  // };

  return (
    // <TouchableOpacity
    //   style={[styles.button, { backgroundColor: props.buttonColor }]}
    //   onPress={props.onPress}
    // >
    //   <Text style={[styles.title, { color: props.titleColor }]}>
    //     {props.title}
    //   </Text>
    // </TouchableOpacity>
    <View style={[styles.buttonOuterContainer, { width: props.buttonWidth }]}>
      <Pressable
        android_ripple={{ color: "#4E736F" }}
        style={[
          styles.buttonInnerContainer,
          { backgroundColor: props.buttonColor },
        ]}
        onPress={props.onPress}
      >
        <Text style={[styles.title, { color: props.titleColor }]}>
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    flex: 1,
    borderRadius: 30,

    margin: 4,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 5,
  },
  buttonInnerContainer: {
    paddingVertical: 10,
    // paddingHorizontal: 30,
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
