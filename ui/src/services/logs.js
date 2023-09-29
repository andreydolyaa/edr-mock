import instance from "./index";

export const fetchLogsData = async () => {
  try {
    const response = await instance.get("/api/event-logs");
    return response?.data;
  } catch (error) {
    throw error;
  }
};
