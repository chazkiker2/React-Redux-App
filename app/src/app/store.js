import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import logger from "redux-logger";
// import counterReducer from '../features/counter/counterSlice';
import searchReducer from "../features/search/searchSlice";

export default configureStore({
	reducer: {
		// counter: counterReducer,
		search: searchReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk).concat(logger),
});
