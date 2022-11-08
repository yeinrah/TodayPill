import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useState, useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import { fetchLikeUsers, like, dislike } from "../../API/likeAPI";
import { useFocusEffect } from "@react-navigation/native";

const DetailedPillCard = (props: any) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCnt, setLikeCnt] = useState(0);

  const getLikeOrNot = async () => {
    const likeUsersList = await fetchLikeUsers(props.supplementId).catch((e)=>console.log("0번 오류", e));
    if (likeUsersList.length === 0) {
      setIsLiked(false);
    } else {
      likeUsersList.includes(props.userId) ? setIsLiked(true) : setIsLiked(false);
    }
    setLikeCnt(likeUsersList.length);
  };

  const likeHandler = async () => {
    await like(props.userId, props.supplementId).catch((e)=>console.log("1번 오류", e));
    setIsLiked(true);
  };

  const dislikeHandler = async () => {
    await dislike(props.userId, props.supplementId).catch((e)=>console.log("2번 오류", e));
    setIsLiked(false);
  };

  useFocusEffect(
    useCallback(() => {
      getLikeOrNot();
    }, [props.userId, props.supplementId, isLiked])
  );

  return (
    <View style={styles.container}>
      <Image
        source={{uri : props.image}}
        style={styles.image}
      />
      <View style={styles.textcontainer}>
        <Text style={styles.brandname}>{props.brand}</Text>
        <Text style={styles.pillname}>{props.supplementName}</Text>
        {/* 수정하기!!! */}
        <Text style={styles.feature}>{props.note}</Text>
        <Text style={styles.feature}>맛도 좋음</Text>
        <View style={styles.alertcontainer}>
          <Ionicons name="warning" size={10} color="#FFCE31" />
          <Text style={styles.blackalert}>주의&nbsp;</Text>
          <Text style={styles.greyalert}>
            고용량 포함, 장기 복용시 전문가와 상의
          </Text>
        </View>
      </View>
      <View style={styles.heartcontainer}>
        <Pressable onPress={isLiked ? dislikeHandler : likeHandler} style={styles.heartbutton}>
          <Image
            source={
              isLiked
                ? require("../../assets/images/heartOn3.png")
                : require("../../assets/images/heartOff1.png")
            }
            style={styles.heart}
          />
        </Pressable>
        <Text>
          {likeCnt}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "relative",
    marginTop: 10,
    marginHorizontal: 10,
    height: 90,
    backgroundColor: "#F4FAF9",
    elevation: 10,
    borderRadius: 10,
  },
  image: {
    marginVertical: 5,
    marginHorizontal: 10,
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  textcontainer: {
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
  feature: {
    alignSelf: "flex-start",
    height: 16,
    fontSize: 9,
    fontWeight: "bold",
    borderRadius: 20,
    backgroundColor: "#C4F1EA",
    marginBottom: 3,
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
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 70,
    alignItems: "center",
  },
  heartbutton: {
    width: 50,
    height: 50,
  },
  heart: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default DetailedPillCard;
