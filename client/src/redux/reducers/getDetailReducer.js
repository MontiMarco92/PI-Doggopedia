import {
	GET_DOG_DETAIL_ERROR,
	GET_DOG_DETAIL_LOADING,
	GET_DOG_DETAIL_SUCCESS,
} from "../variables";

const initialState = {
	loading: false,
	dogDetail: {},
	errorMsg: "",
};

const getDetailReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DOG_DETAIL_LOADING:
			return {
				...state,
				loading: true,
				dogDetail: {},
				errorMsg: "",
			};
		case GET_DOG_DETAIL_SUCCESS:
			return {
				...state,
				loading: false,
				dogDetail: action.payload,
				errorMsg: "",
			};
		case GET_DOG_DETAIL_ERROR:
			return {
				...state,
				loading: false,
				errorMsg: "Unable to get breed details",
			};
		default:
			return state;
	}
};

export default getDetailReducer;
