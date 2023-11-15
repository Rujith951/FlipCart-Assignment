import { applyMiddleware } from "redux";
import { createStore, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import colorReducer from "./colors-api/colorReducer";

const rootReducer = combineReducers({
	color: colorReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
