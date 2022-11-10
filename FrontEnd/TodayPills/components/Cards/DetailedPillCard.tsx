import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useState, useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import { fetchLikeUsers, like, dislike } from "../../API/likeAPI";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import PillCard from "../UI/PillCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

const DetailedPillCard = (props: any) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCnt, setLikeCnt] = useState(0);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const getLikeOrNot = async () => {
    const likeUsersList = await fetchLikeUsers(props.supplementId).catch((e) =>
      console.log("0번 오류", e)
    );
    if (likeUsersList.length === 0) {
      setIsLiked(false);
    } else {
      likeUsersList.includes(props.userId)
        ? setIsLiked(true)
        : setIsLiked(false);
    }
    setLikeCnt(likeUsersList.length);
  };

  const likeHandler = async () => {
    await like(props.userId, props.supplementId).catch((e) =>
      console.log("1번 오류", e)
    );
    setIsLiked(true);
  };

  const dislikeHandler = async () => {
    await dislike(props.userId, props.supplementId).catch((e) =>
      console.log("2번 오류", e)
    );
    setIsLiked(false);
  };

  useFocusEffect(
    useCallback(() => {
      getLikeOrNot();
    }, [props.userId, props.supplementId, isLiked])
  );

  return (
    <View style={styles.outerContainer}>
      <PillCard height={95} width={"90%"} bgColor={"white"}>
        <Pressable
          android_ripple={{ color: "#4E736F" }}
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate("ModifyRoutine", {
              pillId: props.supplementId,
              update: "false",
            });
          }}
        >
          <Image source={{ uri: props.image }} style={styles.image} />
          <View style={styles.textcontainer}>
            <Text style={styles.brandname}>{props.brand}</Text>
            <Text style={styles.pillname}>{props.supplementName}</Text>
            <View style={styles.flexrow}>
              <Text style={styles.feature}>{props.note}</Text>
              <Text style={styles.feature}>정보 추가해야함...</Text>
            </View>
            <View style={styles.alertcontainer}>
              <Ionicons name="warning" size={10} color="#FFCE31" />
              <Text style={styles.blackalert}>주의 &nbsp;</Text>
              <Text style={styles.greyalert}>
                고용량 포함, 장기 복용시 전문가와 상의
              </Text>
            </View>
          </View>
          <View style={styles.heartcontainer}>
            <Text style={styles.likeCnt}>{likeCnt}</Text>
            <Pressable
              onPress={isLiked ? dislikeHandler : likeHandler}
              style={styles.heartbutton}
            >
              <Image
                source={
                  isLiked
                    ? require("../../assets/images/heartOn3.png")
                    : require("../../assets/images/heartOff1.png")
                }
                style={styles.heart}
              />
            </Pressable>
          </View>
        </Pressable>
      </PillCard>
    </View>
    // <View style={styles.container}>
    // </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    // marginTop: 13,
  },

  cardContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  // container: {
  //   // justifyContent: "space-between",
  //   // position: "relative",
  //   marginTop: 13,
  //   marginHorizontal: 15,
  //   height: 90,
  //   // backgroundColor: "#F4FAF9",
  //   backgroundColor: "white",
  //   elevation: 10,
  //   borderRadius: 10,
  // },
  image: {
    marginVertical: 5,
    marginHorizontal: 10,
    // width: 70,
    width: "20%",
    height: 70,
    resizeMode: "contain",
  },
  textcontainer: {
    width: "60%",
    marginTop: 5,
    paddingRight: 50,
  },
  brandname: {
    fontSize: 7,
    color: "#B7B7B7",
  },
  pillname: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 2,
  },
  flexrow: {
    flexDirection: "row",
  },
  feature: {
    alignSelf: "flex-start",
    height: 16,
    fontSize: 9,
    fontWeight: "bold",
    borderRadius: 20,
    backgroundColor: "#C4F1EA",
    marginBottom: 3,
    marginRight: 3,
    paddingHorizontal: 6,
    paddingTop: 1,
  },
  alertcontainer: {
    flexDirection: "row",
  },
  blackalert: {
    color: "black",
    fontSize: 8,
  },
  greyalert: {
    color: "#B7B7B7",
    fontSize: 8,
  },
  heartcontainer: {
    height: "100%",
    marginLeft: 10,
    marginBottom: 10,
    flexDirection: "column-reverse",
    // position: "absolute",
    // top: 10,
    // right: 0,
    // width: 50,
    // height: 70,
    alignItems: "center",
  },
  heartbutton: {
    width: 40,
    height: 35,
    marginBottom: -5,
  },
  heart: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  likeCnt: {
    color: "#6B6B6B",
  },
});

export default DetailedPillCard;
