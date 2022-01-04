import {
	GET_DOGS_ERROR,
	GET_DOGS_LOADING,
	GET_DOGS_SUCCESS,
	FILTER_BY,
	RESET_FILTER,
} from "../variables";

const initialState = {
	loading: false,
	dogs: [],
	errorMsg: "",
	filteredDogs: [],
	resetFil: false,
};

const getDogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DOGS_LOADING:
			return {
				dogs: [],
				filteredDogs: [],
				loading: true,
				errorMsg: "",
			};
		case GET_DOGS_SUCCESS:
			return {
				loading: false,
				errorMsg: "",
				dogs: action.payload.sort((a, b) => (a.name > b.name ? 1 : -1)),
				filteredDogs: action.payload.sort((a, b) => (a.name > b.name ? 1 : -1)),
			};

		case GET_DOGS_ERROR:
			return {
				...state,
				loading: false,
				errorMsg: "Unable to find dogs",
			};
		case FILTER_BY:
			// three fns to filter by temp, by existence and sorting depending on parameters received in payload
			const { temp, breedsToShow, sort } = action.payload;
			const filterTemp = (temp) => {
				return temp !== "all"
					? state.dogs.filter((e) => {
							return e.temperament && e.temperament.includes(temp);
					  })
					: [...state.dogs];
			};

			const filterExistence = (breedsToShow, x) => {
				return breedsToShow === "all"
					? x
					: breedsToShow === "existing"
					? x.filter((e) => {
							return e.id < 1000;
					  })
					: x.filter((e) => {
							return typeof e.id === "string";
					  });
			};

			const sortBy = (sort, x) => {
				return sort === "A-Z"
					? x.sort((a, b) => (a.name > b.name ? 1 : -1))
					: sort === "Z-A"
					? x.sort((a, b) => (a.name > b.name ? -1 : 1))
					: sort === "wt-+"
					? x.sort((a, b) => {
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
					: x.sort((a, b) => {
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
					  });
			};
			//filter temp is executed based on payload temperament and dogs array previously fetched
			const tempFiltered = filterTemp(temp);
			//filter existence is executed based on payload option and result from temp filter
			const existFiltered = filterExistence(breedsToShow, tempFiltered);
			//sort is executed based on payload option and result from existence filter
			const sorted = sortBy(sort, existFiltered);

			return {
				...state,
				filteredDogs: [...sorted],
				errorMsg: sorted.length > 0 ? "" : "There are no dogs in the Data Base",
			};
		case RESET_FILTER:
			return {
				...state,
				resetFil: !state.resetFil,
			};

		default:
			return state;
	}
};

export default getDogsReducer;
