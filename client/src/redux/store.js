import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // required to handle asynchronous code within Redux
import rootReducer from "./reducers/index";

const composedEnhancer = compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, undefined, composedEnhancer);

export default store;
