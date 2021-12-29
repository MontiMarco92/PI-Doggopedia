import axios from "axios";

export const GET_DOGS_LOADING = "GET_DOGS_LOADING";
export const GET_DOGS_SUCCESS = "GET_DOGS_SUCCESS";
export const GET_DOGS_ERROR = "GET_DOGS_ERROR";
export const CLEAR_DOGS = "CLEAR_DOGS";
export const FILTER_BY_TEMP = "FILTER_BY_TEMP";
export const FILTER_BY_EXISTENCE = "FILTER_BY_EXISTENCE";
export const SORT_BY = "SORT_BY";

const baseUrl = process.env.REACT_APP_BASE_URL;

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

export function filterByTemp(filter) {
	return {
		type: FILTER_BY_TEMP,
		payload: filter.temp,
	};
}

export function filterByExistence(filter) {
	return {
		type: FILTER_BY_EXISTENCE,
		payload: filter.breedsToShow,
	};
}

export function sortBy(filter) {
	return {
		type: SORT_BY,
		payload: filter.sort,
	};
}
