import { fetchLogsData } from "../../services/logs";
import { setData, setLoading, setError, updatePage } from "../logs/logsSlice";

export const fetchEventLogs = (page, items) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const data = await fetchLogsData(page, items);
    // setTimeout(() => {
    //   dispatch(setData(data));
    // }, 5000);
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const updateCurrentPage = (page) => (dispatch) => {
  dispatch(updatePage(page));
};
