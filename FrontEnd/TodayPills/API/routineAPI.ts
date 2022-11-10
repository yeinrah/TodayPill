import apiInstance from "./index";
const api = apiInstance();

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

const addMyRoutineSupplement = async (
  userId: number,
  supplementId: number,
  day: string,
  pushAlarm: boolean,
  tablets: number,
  time: string
) => {
  console.log(supplementId, day, pushAlarm, tablets, time);
  await api.post(`/mypage/${userId}/mysupplement`, {
    supplementId,
    day,
    pushAlarm,
    tablets,
    time,
  });
};

export { fetchAllRoutineSupplements };
