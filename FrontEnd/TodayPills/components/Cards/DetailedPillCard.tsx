import { StyleSheet, View, Image, Text, Pressable, ToastAndroid, Linking } from "react-native";
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
    const likeUsersList = await fetchLikeUsers(props.supplementId);
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
    await like(props.userId, props.supplementId);
    setIsLiked(true);
    ToastAndroid.show("해당 상품이 나의 Pick에 추가됐습니다.", 3)
  };

  const dislikeHandler = async () => {
    await dislike(props.userId, props.supplementId);
    setIsLiked(false);
    ToastAndroid.show("해당 상품이 나의 Pick에서 제외됐습니다.", 3)
  };

  const naverSearch = () => {
    Linking.openURL(`https://msearch.shopping.naver.com/search/all?query=${props.supplementName}&frm=NVSHSRC&vertical=home&fs=true`);
  };

  useFocusEffect(
    useCallback(() => {
      getLikeOrNot();
    }, [props.userId, props.supplementId, isLiked])
  );

  return (
    <View style={styles.outerContainer}>
      <PillCard height={120} width={"90%"} bgColor={"white"}>
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
            <View style={styles.featurecontainer}>
              {props.additionalEfficacy ?
                props.additionalEfficacy.split(", ").filter((efficacy, idx) => idx < 4).map((efficacy, idx) => (
                  <Text
                    key={idx}
                    style={[styles.feature, styles.mintfeature]}
                  >
                    {efficacy}
                  </Text>
                )) :
                props.note ?
                  <Text style={[styles.feature, styles.pinkfeature]}>
                    {props.note}
                  </Text> : null
              }
            </View>
            <View style={styles.alertcontainer}>
              <Ionicons name="warning" size={11} color="#FFCE31" style={{marginTop: 2}} />
              <Text style={styles.blackalert}>주의&nbsp;</Text>
              <Text style={styles.greyalert}>
                {props.caution}
              </Text>
            </View>
          </View>
          <View style={styles.buttoncontainer}>
            <Pressable
              style={styles.navercontainer}
              onPress={() => {naverSearch()}}
            >
              <Image
                source={require("../../assets/images/naver2.png")}
                style={styles.naverbutton}
              />
            </Pressable>
            <View style={styles.heartcontainer}>
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
              <Text style={styles.likeCnt}>{likeCnt}</Text>
            </View>
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
    // height: 140,
    position: "relative",
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
    width: "80%",
    marginTop: 5,
    paddingRight: 50,
    // flexWrap: "wrap",
  },
  brandname: {
    fontSize: 12,
    color: "#B7B7B7",
    marginTop: -5,
  },
  pillname: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 2,
  },
  featurecontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  feature: {
    alignSelf: "flex-start",
    height: 16,
    fontSize: 12,
    fontWeight: "bold",
    borderRadius: 20,
    marginBottom: 3,
    marginRight: 3,
    paddingHorizontal: 6,
    paddingTop: 1,
  },
  mintfeature: {
    backgroundColor: "#C4F1EA",
  },
  pinkfeature: {
    backgroundColor: "#F8F0F6",
  },
  alertcontainer: {
    flexDirection: "row",
    width: "80%",
  },
  blackalert: {
    color: "black",
    fontSize: 11,
  },
  greyalert: {
    color: "#B7B7B7",
    fontSize: 11,
  },
  buttoncontainer: {
    height: "100%",
    marginLeft: 10,
    // marginBottom: 10,
    // flexDirection: "column-reverse",
    // position: "absolute",
    // top: 10,
    // right: 0,
    // width: 50,
    // height: 70,
    alignItems: "center",
    justifyContent: "space-between",
  },
  navercontainer: {
    position: "absolute",
    top: 10, 
    right: 30,
    width: 50,
    height: 30,
  },
  naverbutton: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  heartcontainer: {
    alignItems: "center",
    position: "absolute",
    bottom: 5,
    right: 35,
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
