import { combineReducers } from "redux";
import getDetailReducer from "./getDetailReducer";
import getDogsReducer from "./getDogsReducer";
import getTemperamentsReducer from "./getTemperamentsReducer";

//in order to keep code ordered and cleaner, different reducer files were created and combined with following function
export default combineReducers({
	getDogs: getDogsReducer,
	getDogDetail: getDetailReducer,
	getTemperaments: getTemperamentsReducer,
});
