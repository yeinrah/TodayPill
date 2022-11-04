import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { updateUsername } from "../../API/userAPI";
import { accent, primary } from "../../constants/Colors";
import CustomBtn from "../UI/CustomBtn";
import CustomModal from "../UI/CustomModal";

export default function UpdateNickname() {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState(username);

  const modalCloseHandler = () => {
    setModalVisible(false);
  };
  const changeNicknameHandler = async (nickname: string) => {
    // put 요청 닉네임 변경
    await AsyncStorage.setItem("@storage_UserNickName", nickname);
    const userId = await AsyncStorage.getItem("@storage_UserId");
    await updateUsername(parseInt(userId), nickname);
    setUsername(nickname);

    modalCloseHandler();
  };
  const getCurrentNickname = async () => {
    const currentName = await AsyncStorage.getItem("@storage_UserNickName");
    setUsername(currentName);
  };

  useEffect(() => {
    getCurrentNickname();
  }, []);

  return (
    <>
      <KeyboardAvoidingView behavior="padding">
        <CustomModal
          modalVisible={modalVisible}
          modalCloseHandler={modalCloseHandler}
          customStyle={{ width: "80%", height: 220 }}
        >
          <View style={styles.outerContainer}>
            <View style={styles.container}>
              <Text style={styles.nickname}>닉네임 수정</Text>
              <TextInput
                style={styles.input}
                onChangeText={(updatedNickname) => setNickname(updatedNickname)}
                placeholder="닉네임"
                autoFocus={true}
                value={nickname}
                onSubmitEditing={changeNicknameHandler}
              />
            </View>
            <View style={styles.btnContainer}>
              <Pressable onPress={modalCloseHandler} style={styles.btn}>
                {({ pressed }) => (
                  <Text
                    style={[
                      styles.confirmText,

                      { color: pressed ? "black" : "#B7B7B7" },
                    ]}
                  >
                    취소
                    {/* {pressed ? 'Pressed!' : 'Press Me'} */}
                  </Text>
                )}
              </Pressable>
              <Pressable
                onPress={() => changeNicknameHandler(nickname)}
                style={styles.btn}
              >
                {({ pressed }) => (
                  <Text
                    style={[
                      styles.confirmText,
                      { color: pressed ? accent : primary },
                    ]}
                  >
                    완료
                    {/* {pressed ? 'Pressed!' : 'Press Me'} */}
                  </Text>
                )}
              </Pressable>
            </View>

            {/* <CustomBtn
                buttonColor={accent}
                title={"완료"}
                titleColor={"#fff"}
                fontSize={15}
                buttonWidth={"50%"}
                onPress={modalCloseHandler}
              /> */}
          </View>
        </CustomModal>
      </KeyboardAvoidingView>
      <Pressable
        onPress={() => {
          setModalVisible(true);
          // setTimesPressed((current) => current + 1);
        }}
        style={styles.modifyContainer}
      >
        {({ pressed }) => (
          <Text
            style={[
              styles.confirmText,
              { color: pressed ? "black" : "#B7B7B7" },
            ]}
          >
            수정
            {/* {pressed ? 'Pressed!' : 'Press Me'} */}
          </Text>
        )}
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    width: "100%",

    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },

  container: {
    flex: 1,
    // backgroundColor: "red",
    width: "90%",
    // flexDirection: "row",
    // alignItems: "center",
    padding: 10,
  },
  input: {
    // height: 40,
    width: "90%",
    fontSize: 20,
    marginTop: 20,
    paddingBottom: 3,
    // margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  modifyContainer: {
    marginTop: 10,
  },
  confirmText: {
    fontSize: 15,
    fontWeight: "900",
  },
  // modalContainer: {
  //   width: 0,
  //   height: 0,
  // },
  nickname: {
    fontSize: 18,
    fontWeight: "bold",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    // buttonColor={accent}
    //             title={"완료"}
    //             titleColor={"#fff"}
    //             fontSize={15}

    flex: 1,
    // width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});

// likeContainer: {
//   marginVertical: 10,
//   // // flex: 2,
//   // width: "100%",
//   // // height: "30%",
//   // height: 150,
//   // alignItems: "center",
//   // justifyContent: "center",
// },

// myPickContainer: {
//   flexDirection: "row",
// },
// heartContainer: {
//   // width: 50,
//   // height: 50,
//   // paddingBottom: 10,
//   // marginBottom: 5,
//   // position: "absolute",
//   // bottom: 0,
//   // right: -5,
// },
// heart: {
//   width: 45,
//   height: 45,
//   // paddingBottom: 20,
//   // width: "100%",
//   // height: "100%",
//   // resizeMode: "contain",
// },
// name: {
//   fontSize: 24,
//   fontWeight: "900",
//   marginTop: 5,
// },
