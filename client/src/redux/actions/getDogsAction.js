import axios from "axios";

export const GET_DOGS_LOADING = "GET_DOGS_LOADING";
export const GET_DOGS_SUCCESS = "GET_DOGS_SUCCESS";
export const GET_DOGS_ERROR = "GET_DOGS_ERROR";
export const CLEAR_DOGS = "CLEAR_DOGS";

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

export function clearDogs() {
	return { type: CLEAR_DOGS };
}

// export function getDogs() {
// 	console.log("entra a getDogs");
// 	return async function (dispatch) {
// 		try {
// 			dispatch({ type: GET_DOGS_LOADING });
// 			const response = await axios.get(`${baseUrl}/dogs`);
// 			console.log(response);
// 			dispatch({ type: GET_DOGS_SUCCESS, payload: response.data });
// 		} catch (err) {
// 			dispatch({ type: GET_DOGS_ERROR });
// 		}
// 	};
// }
