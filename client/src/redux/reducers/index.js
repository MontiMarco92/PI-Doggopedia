import { combineReducers } from "redux";
import filterSortReducer from "./filterSortReducer";
import getDetailReducer from "./getDetailReducer";
import getDogsReducer from "./getDogsReducer";
import getTemperamentsReducer from "./getTemperamentsReducer";

export default combineReducers({
	getDogs: getDogsReducer,
	getDogDetail: getDetailReducer,
	getTemperaments: getTemperamentsReducer,
	filterDogs: filterSortReducer,
});