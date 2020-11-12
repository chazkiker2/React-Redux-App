import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSearchResults } from "../../api/openlibAPI";


export const fetchResults = createAsyncThunk(
	'search/fetchSearchResultsStatus',
	async (term, { getState, requestId }) => {
		const { currentRequestId, loading } = getState().search
		if (loading !== 'pending' || requestId !== currentRequestId) {
			return
		}
		return fetchSearchResults(term);
	}
)

const initialSearchState = {
	searchTerm: "",
	// searchResults: {},
	entities: [],
	loading: "idle",
	currentRequestId: undefined,
	error: null,
}


export const searchSlice = createSlice({
	name: "search",
	initialState: initialSearchState,
	reducers: {},
	extraReducers: {
		[fetchResults.pending]: (state, action) => {
			if (state.loading === 'idle') {
				state.loading = 'pending'
				state.currentRequestId = action.meta.requestId
			}
		},
		[fetchResults.fulfilled]: (state, action) => {
			const { requestId } = action.meta
			if (state.loading === 'pending' && state.currentRequestId === requestId) {
				state.loading = 'idle'
				state.entities.push(action.payload)
				state.currentRequestId = undefined
			}
		},
		[fetchResults.rejected]: (state, action) => {
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

export default searchSlice.reducer;