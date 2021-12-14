import axios from "axios";

export const GET_TEMPERAMENTS_LOADING = "GET_TEMPERAMENTS_LOADING";
export const GET_TEMPERAMENTS_SUCCESS = "GET_TEMPERAMENTS_SUCCESS";
export const GET_TEMPERAMENTS_ERROR = "GET_TEMPERAMENTS_ERROR";

const baseUrl = process.env.REACT_APP_BASE_URL;

export function getTemperaments() {
	return async (dispatch) => {
		try {
			dispatch({ type: GET_TEMPERAMENTS_LOADING });

			const response = await axios.get(`${baseUrl}/temperament`);
			dispatch({ type: GET_TEMPERAMENTS_SUCCESS, payload: response.data });
		} catch (err) {
			dispatch({ type: GET_TEMPERAMENTS_ERROR });
		}
	};
}
