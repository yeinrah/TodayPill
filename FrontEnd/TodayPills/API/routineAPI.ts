import apiInstance from "./index";
const api = apiInstance();

// const HealthScreeningCheck = async (
//   birthday: string,
//   email: string,
//   phoneNumber: string,
//   userName: string
// ) => {
//   console.log(birthday, email, phoneNumber, userName);
//   await api.post("/user/healthcheckdata", {
//     birthday: birthday,
//     email: email,
//     phoneNumber,
//     userName,
//   });
// };
// const updateUsername = async (userId: number, name: string) => {
//   console.warn("업데이트  닉네임!!!!!!!!!!!!!");
//   await api.put("/user/user/updateName", {
//     userId,
//     name,
//   });
// };
// const getUserInfoByEmail = async (email: string) => {
//   const result = await api.get(`/user/user/${email}`);
//   const userInfo = {
//     age: result.data.age,
//     gender: result.data.gender,
//     name: result.data.name,
//     userId: result.data.userId,
//     recommendNutrients: [
//       result.data.recommendOne,
//       result.data.recommendTwo,
//       result.data.recommendThree,
//     ],
//   };
//   return userInfo;
// };

const fetchAllRoutineSupplements = async (userId: number) => {
  const result = await api.get(`/mypage/${userId}/mysupplement`);
  return result.data;
};

export { fetchAllRoutineSupplements };
