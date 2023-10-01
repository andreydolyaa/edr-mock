import instance from "./index";

export const fetchEndpointsData = async (page, items) => {
  const queryString = `?page=${encodeURIComponent(page)}&items=${encodeURIComponent(
    items
  )}`;
  try {
    const response = await instance.get(`/api/endpoints${queryString}`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};
