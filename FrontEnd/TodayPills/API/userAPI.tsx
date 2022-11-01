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
export { HealthScreeningCheck };
