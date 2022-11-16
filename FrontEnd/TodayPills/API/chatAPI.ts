import apiInstance from "./index";
const api = apiInstance();

const getSpecificRoomChat = async (nutrient: string) => {
  return await api.get(`/getText/${nutrient}`);
};

export { getSpecificRoomChat };
