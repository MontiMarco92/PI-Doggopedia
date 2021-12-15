import {
	GET_DOGS_ERROR,
	GET_DOGS_LOADING,
	GET_DOGS_SUCCESS,
	FILTER_BY_TEMP,
	FILTER_BY_EXISTENCE,
	RESET_FILTERS,
	SORT_BY,
} from "../actions/getDogsAction";

const initialState = {
	loading: false,
	dogs: [],
	errorMsg: "",
	filteredDogs: [],
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
				filteredDogs: action.payload,
			};
		case GET_DOGS_ERROR:
			return {
				...state,
				loading: false,
				errorMsg: "Unable to find dogs",
			};
		case FILTER_BY_TEMP:
			const temp = action.payload;
			console.log(temp);
			return {
				...state,
				filteredDogs:
					temp !== "all"
						? state.filteredDogs.filter((e) => {
								return e.temperament && e.temperament.includes(temp);
						  })
						: state.dogs,
			};
		case FILTER_BY_EXISTENCE:
			const breeds = action.payload;
			//chequear filtro cuando agregue perros.
			return {
				...state,
				filteredDogs:
					breeds === "all"
						? state.filteredDogs
						: breeds === "existing"
						? state.filteredDogs.filter((e) => {
								return e.id < 1000;
						  })
						: state.filteredDogs.filter((e) => {
								return typeof e.id === "string";
						  }),
			};
		case SORT_BY:
			const sort = action.payload;
			return {
				...state,
				filteredDogs:
					sort === 'random' 
						?
						: sort === "A-Z"
						? state.filteredDogs.sort((a, b) => {
								return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
						  })
						: sort === "Z-A"
						? state.filteredDogs
								.sort((a, b) => {
									return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
								})
								.reverse()
						: "goli",
			};

		case RESET_FILTERS:
			return {
				...state,
				filteredDogs: state.dogs,
			};

		default:
			return state;
	}
};

export default getDogsReducer;
