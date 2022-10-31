import axios from "axios";
import qs from "querystring";
import { Text, View } from "react-native";
import WebView from "react-native-webview";
import BackgroundScreen from "../BackgroundScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const REST_API_KEY = "acdc3561e2faeeafdcf245c2d609bd5d";
let access_token: string;
// const REDIRECT_URI = `http://localhost:8080/api/user/login`;
// const REDIRECT_URI = `http://43.200.42.181/api/user/login`;
// const REDIRECT_URI = `http://localhost:8080/api/user/login`;
const REDIRECT_URI = `http://10.0.2.2:8080/api/user/login`;
// const REDIRECT_URI = `https://localhost:8080/api`;

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KakaoScreen = ({ navigation }: any) => {
  const requestToken = async (code: string) => {
    const requestTokenUrl = "https://kauth.kakao.com/oauth/token";
    const options = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code,
    });
    console.log(code + "!!!!!!!!!!!!!!!!!!!!!!!!!");
    // console.log(options);
    try {
      console.log(requestTokenUrl);
      const tokenResponse = await axios.post(requestTokenUrl, options);
      const ACCESS_TOKEN = tokenResponse.data.access_token;
      console.log(ACCESS_TOKEN, "THIS IS ACCESS_TOKEN");
      const body = {
        ACCESS_TOKEN,
      };
      const response = await axios.post(REDIRECT_URI, body);
      const value = response.data;
      await AsyncStorage.setItem("@storage_User", "정서");

      // console.log(response);
      // console.log(value, "this is value");
      navigation.replace("MainScreen");
      // const result = await storeUser(value);
      // if (result === "stored") {
      //   const user = await getData("user");
      //   dispatch(read_S(user));
      //   await navigation.navigate("Main");
      // }
    } catch (e) {
      console.log(e);
    }
  };
  const getCode = (target: string) => {
    const exp = "code=";
    const condition = target.indexOf(exp);
    console.log(target);
    console.log(condition);
    if (condition !== -1) {
      const requestCode = target.substring(condition + exp.length);
      requestToken(requestCode);
    }
  };
  return (
    <BackgroundScreen>
      <WebView
        style={{ flex: 1 }}
        originWhitelist={["*"]}
        scalesPageToFit={false}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        // onMessage={async (event) => {
        //   // console.log(event);
        //   // const data = event.nativeEvent.url;
        //   const data =
        //     "http://localhost:8080/api/user/login?code=JODvqeQDcWjoopjVtFsnTjmdkaq-qnSvkqbHJjQ4aPm1peujZDopTml-8rwqpJrFWjRMJQopcBQAAAGEHQx_ng";

        //   getCode(data);
        // }}
        onShouldStartLoadWithRequest={(event) => {
          const { url } = event;
          console.log(url);
          if (!url.includes("kakao.com")) {
            getCode(url);
            return false;
          }
          return true;
        }}
      />
    </BackgroundScreen>
  );
};
export default KakaoScreen;
