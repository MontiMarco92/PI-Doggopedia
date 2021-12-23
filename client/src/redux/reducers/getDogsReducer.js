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
					sort === "A-Z"
						? state.filteredDogs.sort((a, b) => (a.name > b.name ? 1 : -1))
						: sort === "Z-A"
						? state.filteredDogs.sort((a, b) => (a.name > b.name ? -1 : 1))
						: sort === "wt-+"
						? state.filteredDogs.sort((a, b) => {
								let avgA =
									a.weight.length > 2
										? a.weight
												.split(" - ")
												.reduce((x, z) => Number(x) + Number(z)) / 2
										: Number(a.weight);
								let avgB =
									b.weight.length > 2
										? b.weight
												.split(" - ")
												.reduce((x, z) => Number(x) + Number(z)) / 2
										: Number(b.weight);

								return avgA - avgB;
						  })
						: state.filteredDogs.sort((a, b) => {
								let avgA =
									a.weight.length > 2
										? a.weight
												.split(" - ")
												.reduce((x, z) => Number(x) + Number(z)) / 2
										: Number(a.weight);
								let avgB =
									b.weight.length > 2
										? b.weight
												.split(" - ")
												.reduce((x, z) => Number(x) + Number(z)) / 2
										: Number(b.weight);

								return avgB - avgA;
						  }),
				// ? state.filteredDogs.sort((a, b)=> {return a.})
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
