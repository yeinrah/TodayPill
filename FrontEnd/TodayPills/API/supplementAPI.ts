import apiInstance from "./index";
const api = apiInstance();

const fetchAllSupplements = async () => {
  const result = await api.get(`/supplement/findAll`);
  // console.log(result.data);
  return result.data;
};
const fetchPopularSupplements = async () => {
  const result = await api.get(`/supplement/findLikeTop10`);
  // console.log(result.data);
  return result.data;
};
const fetchSupplementDetail = async (supplementId) => {
  // console.log(supplementId);
  const result = await api.get(`/supplement/${supplementId}`);
  const supplementDetail = {
    name: result.data.supplementName,
    brand: result.data.brand,
    image: result.data.image,
    ingredients: result.data.ingredients,
    bestTime: result.data.bestTime,
    requiredCount: result.data.requiredCount,
  };
  console.log(result.data);
  return supplementDetail;
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

export { fetchAllSupplements, fetchPopularSupplements, fetchSupplementDetail };
