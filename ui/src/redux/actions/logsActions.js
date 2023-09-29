import { fetchLogsData } from "../../services/logs";
import { setData, setLoading, setError } from "../logs/logsSlice";

export const fetchEventLogs = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const data = await fetchLogsData();
    // setTimeout(() => {
    //   dispatch(setData(data));
    // }, 5000);
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
