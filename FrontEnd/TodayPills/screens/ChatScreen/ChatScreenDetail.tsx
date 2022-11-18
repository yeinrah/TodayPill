import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import BackgroundScreen from '../BackgroundScreen';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { getSpecificRoomChat } from '../../API/chatAPI';
import { useFocusEffect } from '@react-navigation/native';
import BackgroundScreen2 from '../BackgroundScreen2';
var stompClient = null;

const ChatScreenDetail = ({ navigation, route }: any) => {
  const [publicChats, setPublicChats] = useState([]);
  const [loadFlag, setLoadFlag] = useState(false);
  const [messages, setMessages] = useState([]);
  const [tab, setTab] = useState('CHATROOM');
  const [userData, setUserData] = useState({
    userId: 0,
    username: 'wjdtj',
    // receivername: "wjdtj",
    connected: false,
    message: 'hello',
  });
  const loadUserNickName = async () => {
    let name = await AsyncStorage.getItem('@storage_UserNickName');
    setUserData({
      ...userData,
      username: name,
      connected: false,
      message: 'hello',
    });
  };
  // useEffect(() => {
  //   // loadUserNickName();
  //   registerUser();
  // }, []);
  const loadPrevData = async () => {
    let chatData = await getSpecificRoomChat(route.params?.nutrient);
    // publicChats.push(chatData[0]);
    for (let chat of chatData) {
      publicChats.push(chat);
    }
    // setPublicChats(...publicChats, chatData);
  };
  useEffect(() => {
    registerUser();
    loadPrevData();
  }, []);
  // useFocusEffect(
  //   useCallback(() => {
  //     registerUser();
  //     loadPrevData();
  //   }, [])
  // );
  useEffect(() => {}, [publicChats]);
  const connect = () => {
    let Sock = new SockJS('http://k7a706.p.ssafy.io:8080/wss');
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };
  const onConnected = async () => {
    let userName = await AsyncStorage.getItem('@storage_UserNickName');
    let userId = Number(await AsyncStorage.getItem('@storage_UserId'));
    console.log('연결시도!!');
    setUserData({
      ...userData,
      connected: true,
      username: userName,
      userId: userId,
    });
    stompClient.subscribe(
      `/chatroom/${route.params?.nutrient}`,
      onMessageReceived
    );
    userJoin(userName);
  };
  const userJoin = (userName) => {
    var chatMessage = {
      senderName: userName,
      status: 'JOIN',
    };
    stompClient.send(
      `/app/${route.params?.nutrient}`,
      {},
      JSON.stringify(chatMessage)
    );
  };
  const onMessageReceived = async (payload) => {
    // _id: Math.random(),
    // text: messages[0].text,
    // user: { _id: id },
    // createdAt: new Date(),
    // senderName: userData.username,
    // message: messages[0].text,
    // status: 'MESSAGE',
    var payloadData = JSON.parse(payload.body);
    console.log(payloadData, 'thisispay');
    let refinedData = {
      message: payloadData.text,
      text: payloadData.text,
      senderName: payloadData.senderName,
      status: payloadData.status,
      createdAt: payloadData.createdAt,
      _id: payloadData._id,
      user: { _id: payloadData.user._id, name: payloadData.senderName },
    };
    // console.log(payloadData, 'this is payloadData');
    switch (payloadData.status) {
      case 'JOIN':
        break;
      case 'MESSAGE':
        // publicChats.push(payloadData);
        publicChats.unshift(refinedData);
        setPublicChats([...publicChats]);

        break;
    }
  };

  const onError = (err) => {
    console.log('실패!!');
    console.log(err);
  };

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, message: value });
  };
  const sendValue = async (messages) => {
    onSend(messages);
    // _id: '1',
    // text: 'hahaha',
    // user: { _id: 1 },
    // createdAt: new Date(),
    // username: 'haha',
    console.log('this is message!!!', messages);
    if (stompClient) {
      let id = await AsyncStorage.getItem('@storage_UserId');
      var chatMessage = {
        _id: messages[0]._id,
        text: messages[0].text,
        user: { _id: id, name: userData.username },
        createdAt: new Date(),
        senderName: userData.username,
        userName: userData.username,
        // message: messages[0].text,
        status: 'MESSAGE',
      };
      // console.log(chatMessage.message, 'this is messages');
      // console.log(messages, 'all messagse');
      console.log(chatMessage);
      console.warn(chatMessage);
      // console.log(publicChats);
      stompClient.send(
        `/app/${route.params?.nutrient}`,
        {},
        JSON.stringify(chatMessage)
      );
      setUserData({ ...userData, message: '' });
    }
  };

  const handleUsername = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, username: value });
  };
  const onSend = useCallback((messages = []) => {
    // setMessages((previousMessages) =>
    //   GiftedChat.append(previousMessages, messages)
    // );
    setPublicChats((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  const registerUser = () => {
    connect();
  };
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#d6d6d6',
          },
        }}
        textStyle={{
          left: {
            color: '#fff',
          },
        }}
      />
    );
  };
  return (
    <BackgroundScreen2>
      <>
        <View style={styles.chatTitle}>
          <Ionicons
            name="arrow-back"
            size={48}
            color="black"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text
            style={styles.roomChat}
          >{`${route.params?.nutrientName} 채팅방`}</Text>
        </View>
        {userData.userId !== 0 && (
          <GiftedChat
            placeholder={'메세지를 입력하세요...'}
            alwaysShowSend={true}
            renderUsernameOnMessage={true}
            messages={publicChats}
            renderBubble={renderBubble}
            textInputProps={{ keyboardAppearance: 'dark', autoCorrect: false }}
            // onInputTextChanged={(text) => {
            //   if(text.startsWith("@"))
            // }}
            onSend={(messages) => {
              return sendValue(messages);
              // return onSend(messages);
            }}
            user={{
              _id: userData.userId,
              name: userData.username,
            }}
          />
        )}
      </>
    </BackgroundScreen2>
  );
};
export default ChatScreenDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textLine: {
    flex: 1,
  },
  textInput: {
    backgroundColor: 'white',
    width: '85%',
  },
  textBox: {
    flexDirection: 'row',
  },
  textBtn: {
    width: '15%',
  },
  chatTitle: {
    flexDirection: 'row',
    marginTop: 20,
  },
  roomChat: {
    fontSize: 30,
  },
  // box: {
  //   flexDirection: "column-reverse",
  // },
});
