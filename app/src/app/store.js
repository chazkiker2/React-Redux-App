// config helpers
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
// import logger from "redux-logger";

// reducers
import searchReducer from "../features/search/searchSlice";
import subjectReducer from "../features/subjects/subjectSlice";

export default configureStore({
	reducer: {
		// counter: counterReducer,
		search: searchReducer,
		subject: subjectReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
	// .concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
	// enhancers: []
});
