import { fetchEndpointsData } from "../../services/endpoints";
import { setData, setLoading, setError, updatePage } from "../endpoints/endpointsSlice";

export const fetchEndpoints = (page, items) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const data = await fetchEndpointsData(page, items);
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const updateCurrentPage = (page) => (dispatch) => {
  dispatch(updatePage(page));
};
