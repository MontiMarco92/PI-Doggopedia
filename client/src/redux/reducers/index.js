import { combineReducers } from "redux";
import getDetailReducer from "./getDetailReducer";
import getDogsReducer from "./getDogsReducer";
import getTemperamentsReducer from "./getTemperamentsReducer";

export default combineReducers({
	getDogs: getDogsReducer,
	getDogDetail: getDetailReducer,
	getTemperaments: getTemperamentsReducer,
});
