import axios from "axios";

import {
	GET_TEMPERAMENTS_LOADING,
	GET_TEMPERAMENTS_SUCCESS,
	GET_TEMPERAMENTS_ERROR,
} from "../variables";
import { baseUrl } from "../variables";

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
