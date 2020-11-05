import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBySubjectWithDetails, sortCount } from "../../api/openlibAPI";

const initialSubjectState = {
	available: ["arts", "fiction", "history", "biography", "books-by-language", "business-and-finance", "children's", "health-and-wellness", "social-sciences", "places", "textbooks",],
	selected: null,
	entities: [],
	subjectData: null,
	loading: "idle",
	sorting: "idle",
	currentSortId: undefined,
	currentRequestId: undefined,
	error: null,
}

export const fetchSubject = createAsyncThunk(
	"subjects/fetchSubjectsStatus",
	async (subjects, { getState, requestId }) => {
		const { currentRequestId, loading } = getState().subject;
		if (loading !== "pending" || requestId !== currentRequestId) {
			return;
		}
		return fetchBySubjectWithDetails(subjects);
	}
)

export const sortSubjectData = createAsyncThunk(
	"subjects/sortSubjectDataStatus",
	async (incomingEntity, { getState, requestId }) => {
		const { currentSortId, sorting } = getState().subject;
		if (sorting !== "pending" || requestId !== currentSortId) {
			return;
		}
		// let sortedData;
		const sortData = (entity) => {
			let data = {};
			for (const entry in entity) {
				if (entity[entry] == null) {
					data[entry] = entity[entry];
				} else if (typeof entity[entry] === "string") {
					data[entry] = entity[entry];
				}
				else if (typeof entity[entry][Symbol.iterator] === 'function') {
					data[entry] = sortCount(entity[entry]);
				} else {
					data[entry] = entity[entry];
				}
			}
			// const toReturn = await data;
			return data;
		}
		const sortedData = await sortData(incomingEntity);
		return sortedData;

		// return new Promise(sortData(incomingEntity));
	}
)

const subjectSlice = createSlice({
	name: "subject",
	initialState: initialSubjectState,
	reducers: {
		selectSubject: (state, action) => {
			state.selected = action.payload;
		},
	},
	extraReducers: {
		[fetchSubject.pending]: (state, action) => {
			if (state.loading === "idle") {
				state.loading = "pending";
				state.currentRequestId = action.meta.requestId;
			}
		},
		[fetchSubject.fulfilled]: (state, action) => {
			const { requestId } = action.meta
			if (state.loading === 'pending' && state.currentRequestId === requestId) {
				state.loading = 'idle';
				state.entities.push(action.payload);
				state.currentRequestId = undefined;
			}
		},
		[fetchSubject.rejected]: (state, action) => {
			const { requestId } = action.meta
			if (state.loading === 'pending' && state.currentRequestId === requestId) {
				state.loading = 'idle'
				state.error = action.error
				state.currentRequestId = undefined
			}
		},
		[sortSubjectData.pending]: (state, action) => {
			if (state.sorting === "idle") {
				state.sorting = "pending";
				state.currentSortId = action.meta.requestId;
			}
		},
		[sortSubjectData.fulfilled]: (state, action) => {
			const { requestId } = action.meta;
			if (state.sorting === 'pending' && state.currentSortId === requestId) {
				state.sorting = 'idle';
				state.subjectData = action.payload;
				// state.entities.push(action.payload)
				state.currentSortId = undefined
			}
		},
		[sortSubjectData.rejected]: (state, action) => {
			const { requestId } = action.meta
			if (state.sorting === 'pending' && state.currentSortId === requestId) {
				state.sorting = 'idle';
				state.error = action.error;
				state.currentSortId = undefined;
			}
		},
	}
})

export const { selectSubject } = subjectSlice.actions;

export default subjectSlice.reducer;