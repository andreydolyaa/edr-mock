import instance from "./index";

export const fetchModelCount = async (model) => {
  try {
    const response = await instance.get(`/api/count/${model}`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};
