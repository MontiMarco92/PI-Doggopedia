import { FILTER_BY_TEMP } from "../actions/filterSortActions";

const initialState = {
	filteredDogs: [],
};

const filterSortReducer = (state = initialState, action) => {
	switch (action.type) {
		case FILTER_BY_TEMP:
			console.log("entra al reducer");
			const { dogs, temperament } = action.payload;

			return {
				...state,
				filteredDogs:
					temperament !== ""
						? dogs.filter((e) => {
								return e.temperament && e.temperament.includes(temperament);
						  })
						: dogs,
			};

		default:
			return state;
	}
};

export default filterSortReducer;
