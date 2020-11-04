// config helpers
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import logger from "redux-logger";

// reducers
import searchReducer from "../features/search/searchSlice";

export default configureStore({
	reducer: {
		// counter: counterReducer,
		search: searchReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk).concat(logger),
});
