import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const searchSlice = createSlice({
	name: "search",
	initialState: {
		searchTerm: "",
		searchResults: {},
	},
	reducers: {
		setSearchResults: (state, action) => {
			state.searchResults = action.payload;
		},
		setSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
		}
	},
});

export const { setSearchResults, setSearchTerm } = searchSlice.actions;

export const fetchSearchAsync = term => dispatch => {
	axios.get(`http://openlibrary.org/search.json?q=${term}`)
		.then(res => {
			dispatch(setSearchResults(res.data));
		})
		.catch(err => {
			console.log(err);
		});
}

export default searchSlice.reducer;