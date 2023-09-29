import instance from "./index";

export const fetchLogsData = async (page, items) => {
  const queryString = `?page=${encodeURIComponent(page)}&items=${encodeURIComponent(
    items
  )}`;
  try {
    const response = await instance.get(`/api/event-logs${queryString}`);
    return response?.data;
  } catch (error) {
    throw error;
  }
};
