import axios from "axios";

import {
	GET_DOGS_LOADING,
	GET_DOGS_SUCCESS,
	GET_DOGS_ERROR,
	FILTER_BY,
} from "../variables";
import { baseUrl } from "../variables";

export function getDogs(searchString) {
	return async (dispatch) => {
		try {
			dispatch({ type: GET_DOGS_LOADING });
			const response = searchString
				? await axios.get(`${baseUrl}/dogs?name=${searchString}`)
				: await axios.get(`${baseUrl}/dogs`);
			dispatch({ type: GET_DOGS_SUCCESS, payload: response.data });
		} catch (err) {
			dispatch({ type: GET_DOGS_ERROR });
		}
	};
}

export function filterBy(filter) {
	return {
		type: FILTER_BY,
		payload: filter,
	};
}
