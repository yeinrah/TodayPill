import apiInstance from "./index";
const api = apiInstance();
const getAllSupplements = async () => {
  const result = await api.get("/supplement/findAll");
  return result.data;
};

export { getAllSupplements };