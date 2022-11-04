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
const updateUsername = async (userId: number, name: string) => {
  console.warn("업데이트  닉네임!!!!!!!!!!!!!");
  await api.put("/user/user/updateName", {
    userId,
    name,
  });
};
const getUserInfoByEmail = async (email: string) => {
  const result = await api.get(`/user/user/${email}`);
  const userInfo = {
    age: result.data.age,
    gender: result.data.gender,
    name: result.data.name,
    userId: result.data.userId,
    recommendNutrients: [
      result.data.recommendOne,
      result.data.recommendTwo,
      result.data.recommendThree,
    ],
  };
  return userInfo;
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

export {
  HealthScreeningCheck,
  getUserInfoByEmail,
  kakaoLogout,
  updateUsername,
};
