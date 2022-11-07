import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect, useCallback } from "react";
import { dislike, fetchLikeUsers, like } from "../../API/likeAPI";
import { useFocusEffect } from "@react-navigation/native";

export interface PillProps {
  //   image: ImageSourcePropType;
  pillId: number;
  userId: number;
  image: string;
  brand: string;
  pill: string;
  // onPressDislike?: (isDisliked: boolean) => void;
  onPressDislike?: () => void;
}

const PillItem = (props: PillProps) => {
  //   const imagePath = require(`../../assets/images/pills/sample${props.image}.png`);
  //   console.log(imagePath);
  const userId = props.userId;
  const supplementId = props.pillId;
  const [isLiked, setIsLiked] = useState(false);

  const [likeCnt, setLikeCnt] = useState(0);
  const [isLikeChange, setIsLikeChange] = useState(false);

  const getLikeOrNot = async () => {
    const likeUsersList = await fetchLikeUsers(supplementId);
    // console.log(likeUsersList, supplementId, "번 째 영양제 좋아한사람");
    if (likeUsersList.length === 0) {
      setIsLiked(false);
    } else {
      for (const eachId of likeUsersList) {
        if (eachId === userId) {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      }
    }
    setLikeCnt(likeUsersList.length);
  };

  const likeHandler = async () => {
    await like(userId, supplementId);
    setIsLiked(true);

    // setIsLikeChange(true);
  };

  const dislikeHandler = async () => {
    console.warn(userId, "번 유저가", supplementId, "번 영양제 좋아요취소");
    props.onPressDislike();

    await dislike(userId, supplementId);
    setIsLiked(false);

    // setIsLikeChange(false);
  };

  useFocusEffect(
    useCallback(() => {
      getLikeOrNot();

      // return () => {

      // };
    }, [userId, supplementId, isLiked])
  );

  return (
    <View style={styles.container}>
      <View style={styles.cardcontainer}>
        <View style={styles.imagecontainer}>
          <Image source={{ uri: props.image }} style={styles.pillimage} />
        </View>

        <Pressable
          onPress={isLiked ? dislikeHandler : likeHandler}
          style={styles.heartContainer}
        >
          <Image
            source={
              isLiked
                ? // ? require("../../assets/images/hearton.png")
                  require("../../assets/images/heartOn3.png")
                : // : require("../../assets/images/heartoff.png")
                  require("../../assets/images/heartOff1.png")
            }
            style={styles.heart}
          />
        </Pressable>
        <View>
          <Text>{likeCnt} 개</Text>
        </View>
        {/* <AntDesign
          name="hearto"
          size={14}
          color={like ? "#E2C3DC" : "#CCCCCC"}
          style={styles.likeicon}
          onPress={() => setLike(!like)}
        /> */}
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.brandname}>{props.brand}</Text>
        <Text style={styles.pillname}>{props.pill}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginVertical: 5,
    marginHorizontal: 5,
    width: 90,
  },
  cardcontainer: {
    width: "100%",
    height: 80,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 3,
    borderRadius: 10,
    // marginBottom: 3,
  },
  imagecontainer: {
    width: "80%",
    height: "80%",
  },
  pillimage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  // likeicon: {
  //   position: "absolute",
  //   bottom: 2,
  //   right: 2,
  // },
  heartContainer: {
    width: 30,
    height: 30,
    position: "absolute",
    bottom: 0,
    right: -5,
  },
  heart: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textcontainer: {
    width: "100%",
    marginTop: 7,
    paddingHorizontal: 2,
  },
  brandname: {
    fontSize: 9,
    color: "#B7B7B7",
  },
  pillname: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: "bold",
  },
});

export default PillItem;
