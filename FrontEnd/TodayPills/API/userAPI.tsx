import apiInstance from "./index";
const api = apiInstance();
const HealthScreeningCheck = async (
  birthday: string,
  email: string,
  phoneNumber: string,
  userName: string
) => {
  console.log(birthday, email, phoneNumber, userName);
  await api.post("/user/healthcheckdata", {
    birthday: birthday,
    email: email,
    phoneNumber,
    userName,
  });
};
const getUserInfoByEmail = async (email: string) => {
  const result = await api.get(`/user/user/${email}`);
  return result.data;
};
const kakaoLogout = async (ACCESS_TOKEN) => {
  // api.defaults.headers.common["Authorization"] = ACCESS_TOKEN;
  await api
    .post(
      "https://kapi.kakao.com/v1/user/logout",
      {},
      {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      }
    )
    .then((res) => console.log(res));
};
export { HealthScreeningCheck, getUserInfoByEmail, kakaoLogout };
