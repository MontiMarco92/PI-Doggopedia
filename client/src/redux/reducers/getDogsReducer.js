import {
	GET_DOGS_ERROR,
	GET_DOGS_LOADING,
	GET_DOGS_SUCCESS,
	CLEAR_DOGS,
} from "../actions/getDogsAction";

const initialState = {
	loading: false,
	dogs: [],
	errorMsg: "",
};

const getDogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DOGS_LOADING:
			return {
				...state,
				dogs: [],
				loading: true,
				errorMsg: "",
			};
		case GET_DOGS_SUCCESS:
			return {
				...state,
				loading: false,
				errorMsg: "",
				dogs: action.payload,
			};
		case GET_DOGS_ERROR:
			return {
				...state,
				loading: false,
				errorMsg: "Unable to find dogs",
			};
		case CLEAR_DOGS:
			return {
				...state,
				loading: false,
				dogs: [],
				errorMsg: "",
			};
		default:
			return state;
	}
};

export default getDogsReducer;
