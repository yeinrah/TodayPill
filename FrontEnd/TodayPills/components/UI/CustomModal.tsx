import { StyleSheet, View, Pressable, Text } from "react-native";
import Modal from "react-native-modal";
import { IBackground } from "../../types";
import { useState } from "react";

export default function CustomModal({
  children,
  modalVisible,
  modalCloseHandler,
}: IBackground) {
  return (
    <View style={styles.centeredView}>
      <Modal
        isVisible={modalVisible}
        // onRequestClose={() => {
        //   modalCloseHandler;
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>{children}</View>
            {/* <Text>Hello World!</Text> */}
            <Pressable onPress={modalCloseHandler} style={[styles.button]}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>

    // <Modal
    //   animationType="slide"
    //   transparent={true}
    //   visible={modalVisible}
    //   onRequestClose={
    //     modalCloseHandler
    //     //   () => {
    //     //   // Alert.alert("Modal has been closed.");
    //     //   setModalVisible(false);
    //     // }
    //   }
    // >
    //   <View>
    //     <View>
    //       {children}
    //       {/* <Text>Hello World!</Text>
    //       <Pressable onPress={() => setModalVisible(!modalVisible)}>
    //         <Text>Hide Modal</Text>
    //       </Pressable> */}
    //     </View>
    //   </View>
    // </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
