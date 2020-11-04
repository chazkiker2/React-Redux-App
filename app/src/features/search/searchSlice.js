import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchResults = createAsyncThunk(
	"search/fetchSearchResultsStatus",
	async (term, thunkAPI) => {
		const response = await axios.get(`http://openlibrary.org/search.json?q=${term}`)
		return response.data;
	}
)
export const fetchResultsAsync = createAsyncThunk(
	'search/fetchSearchResultsStatus',
	async (term, { getState, requestId }) => {
		const { currentRequestId, loading } = getState().search
		if (loading !== 'pending' || requestId !== currentRequestId) {
			return
		}
		const response = await axios.get(`http://openlibrary.org/search.json?q=${term}`);
		return response.data;
	}
)


export const searchSlice = createSlice({
	name: "search",
	initialState: {
		searchTerm: "",
		// searchResults: {},
		entities: [],
		loading: "idle",
		currentRequestId: undefined,
		error: null,
	},
	reducers: {
		// setSearchResults: (state, action) => {
		// 	state.searchResults = action.payload;
		// },
		// setSearchTerm: (state, action) => {
		// 	state.searchTerm = action.payload;
		// }
	},
	// extraReducers: {
	// 	[fetchSearchResults.fulfilled]: (state, action) => {
	// 		state.searchResults = (action.payload);
	// 	}
	// }
	extraReducers: {
		[fetchSearchResults.pending]: (state, action) => {
			if (state.loading === 'idle') {
				state.loading = 'pending'
				state.currentRequestId = action.meta.requestId
			}
		},
		[fetchSearchResults.fulfilled]: (state, action) => {
			const { requestId } = action.meta
			if (state.loading === 'pending' && state.currentRequestId === requestId) {
				state.loading = 'idle'
				state.entities.push(action.payload)
				state.currentRequestId = undefined
			}
		},
		[fetchSearchResults.rejected]: (state, action) => {
			const { requestId } = action.meta
			if (state.loading === 'pending' && state.currentRequestId === requestId) {
				state.loading = 'idle'
				state.error = action.error
				state.currentRequestId = undefined
			}
		}
	}

});

export const { setSearchResults, setSearchTerm, } = searchSlice.actions;

// export const fetchSearchAsync = term => dispatch => {
// 	axios.get(`http://openlibrary.org/search.json?q=${term}`)
// 		.then(res => {
// 			dispatch(setSearchResults(res.data));
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});
// }

export default searchSlice.reducer;