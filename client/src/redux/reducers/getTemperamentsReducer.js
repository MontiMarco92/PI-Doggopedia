import {
	GET_TEMPERAMENTS_ERROR,
	GET_TEMPERAMENTS_LOADING,
	GET_TEMPERAMENTS_SUCCESS,
} from "../actions/getTemperamentsAction";

const initialState = {
	loading: false,
	temperaments: [],
	errorMsg: "",
};

const getTemperamentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TEMPERAMENTS_LOADING:
			return {
				...state,
				loading: true,
				errorMsg: "",
			};
		case GET_TEMPERAMENTS_SUCCESS:
			return {
				...state,
				loading: false,
				temperaments: action.payload,
				errorMsg: "",
			};
		case GET_TEMPERAMENTS_ERROR:
			return {
				...state,
				loading: false,
				errorMsg: "Unable to get temperaments from server",
			};
		default:
			return state;
	}
};
export default getTemperamentsReducer;
