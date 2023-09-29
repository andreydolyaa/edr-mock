import { fetchLogsData } from "../../services/logs";
import { setData, setLoading, setError } from "../logs/logsSlice";

export const fetchEventLogs = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const data = await fetchLogsData();
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
