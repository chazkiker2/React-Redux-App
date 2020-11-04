import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
