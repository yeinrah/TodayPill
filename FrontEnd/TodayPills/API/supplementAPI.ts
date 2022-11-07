import apiInstance from "./index";
const api = apiInstance();

const fetchAllSupplements = async () => {
  const result = await api.get(`/supplement/findAll`);
  // console.log(result.data);
  return result.data;
};

// const updateUsername = async (userId: number, name: string) => {
//   console.warn("업데이트  닉네임!!!!!!!!!!!!!");
//   await api.put("/user/user/updateName", {
//     userId,
//     name,
//   });
// };

// const kakaoLogout = async (ACCESS_TOKEN) => {
//   // api.defaults.headers.common["Authorization"] = ACCESS_TOKEN;
//   await api
//     .post(
//       "https://kapi.kakao.com/v1/user/logout",
//       {},
//       {
//         headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
//       }
//     )
//     .then((res) => console.log(res));
// };

export { fetchAllSupplements };
