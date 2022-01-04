import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // required to handle asynchronous code within Redux
import rootReducer from "./reducers/index";

// enhancer to be able to exectute REDUX DEVTOOLS
const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store is created passing root reducer and the composed enhancer, applying thunk as a middleware to be able to handle async code
const store = createStore(
	rootReducer,
	composedEnhancer(applyMiddleware(thunk))
);

export default store;
