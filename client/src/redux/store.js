import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // required to handle asynchronous code within Redux
import rootReducer from "./reducers/index";

// const composedEnhancer = compose(
// 	applyMiddleware(thunk),
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composedEnhancer(applyMiddleware(thunk))
);

// const store = createStore(rootReducer, undefined, composedEnhancer);

export default store;
