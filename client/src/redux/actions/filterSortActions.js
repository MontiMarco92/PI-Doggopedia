export const FILTER_BY_TEMP = "FILTER_BY_TEMP";

export function filterByTemp(filter) {
	console.log("entra al action");
	return (dispatch, getState) => {
		const { getDogs } = getState();

		dispatch({
			type: FILTER_BY_TEMP,
			payload: {
				dogs: getDogs.dogs,
				temperament: filter,
			},
		});
	};
}
