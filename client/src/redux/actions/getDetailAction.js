import axios from "axios";

import {
	GET_DOG_DETAIL_LOADING,
	GET_DOG_DETAIL_SUCCESS,
	GET_DOG_DETAIL_ERROR,
} from "../variables";
import { baseUrl } from "../variables";

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
