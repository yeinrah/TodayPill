import axios from "axios";
import QueryString from "qs";
import { Text, View } from "react-native";
import WebView from "react-native-webview";
import BackgroundScreen from "../BackgroundScreen";

const REST_API_KEY = "acdc3561e2faeeafdcf245c2d609bd5d";
const REDIRECT_URI = "https://localhost:8080";

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;
const requestToken = async (code: string) => {
  const requestTokenUrl = "https://kauth.kakao.com/oauth/token";

  const options = QueryString.stringify({
    grant_type: "authorization_code",
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code,
  });

  try {
    const tokenResponse = await axios.post(requestTokenUrl, options);
    const ACCESS_TOKEN = tokenResponse.data.access_token;

    const body = {
      ACCESS_TOKEN,
    };
    const response = await axios.post(REDIRECT_URI, body);
    const value = response.data;
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
  if (condition !== -1) {
    const requestCode = target.substring(condition + exp.length);
    requestToken(requestCode);
  }
};
const KakaoScreen = () => {
  return (
    <BackgroundScreen>
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={(event) => {
          const data = event.nativeEvent.url;
          getCode(data);
        }}
      />
    </BackgroundScreen>
  );
};
export default KakaoScreen;
