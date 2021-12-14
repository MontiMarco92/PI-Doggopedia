import axios from "axios";

export const GET_DOG_DETAIL_LOADING = "GET_DOG_DETAIL_LOADING";
export const GET_DOG_DETAIL_SUCCESS = "GET_DOG_DETAIL_SUCCESS";
export const GET_DOG_DETAIL_ERROR = "GET_DOG_DETAIL_ERROR";
const baseUrl = process.env.REACT_APP_BASE_URL;

export function getDogDetail(breedId) {
	return async function (dispatch) {
		try {
			dispatch({ type: GET_DOG_DETAIL_LOADING });

			const response = await axios.get(`${baseUrl}/dogs/${breedId}`);
			dispatch({ type: GET_DOG_DETAIL_SUCCESS, payload: response.data });
		} catch (err) {
			dispatch({ type: GET_DOG_DETAIL_ERROR });
		}
	};
}
