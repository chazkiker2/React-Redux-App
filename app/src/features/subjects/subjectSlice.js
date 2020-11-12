import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchBySubjectWithDetails, sortCount } from "../../api/openlibAPI";
import { sortCount } from "../../api/openlibAPI";
// import { client } from "../../api/client";
import axios from "axios";

const initialSubjectState = {
	selected: null,
	entities: [],
	works: [],
	subjectData: null,
	status: "idle",
	sorting: "idle",
	currentSortId: undefined,
	currentRequestId: undefined,
	error: null,
}

export const fetchSubject = createAsyncThunk(
	"subjects/fetchSubjectsStatus",
	async (subject) => {
		const url = `http://openlibrary.org${subject}.json?details=true`;
		const { data } = await axios.get(url);
		return data;
	}
)

export const sortSubjectData = createAsyncThunk(
	"subjects/sortSubjectDataStatus",
	async (incomingEntity) => {
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
			return data;
		}
		const sortedData = await sortData(incomingEntity);
		return sortedData;
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
			state.status = "pending";
			state.currentRequestId = action.meta.requestId;
		},
		[fetchSubject.fulfilled]: (state, action) => {
			state.status = 'idle';
			state.entities.push(action.payload);
			state.currentRequestId = undefined;
			state.works = action.payload.works;
		},
		[fetchSubject.rejected]: (state, action) => {
			state.status = 'idle'
			state.error = action.error
			state.currentRequestId = undefined
		},
		[sortSubjectData.pending]: (state, action) => {
			state.sorting = "pending";
			state.currentSortId = action.meta.requestId;
		},
		[sortSubjectData.fulfilled]: (state, action) => {
			state.sorting = 'idle';
			state.subjectData = action.payload;
			state.currentSortId = undefined
		},
		[sortSubjectData.rejected]: (state, action) => {
			state.sorting = 'idle';
			state.error = action.error;
			state.currentSortId = undefined;
		},
	}
})

export const { selectSubject } = subjectSlice.actions;

export default subjectSlice.reducer;

export const selectAllSubject = state => state.subject;
export const subjectData = state => state.subject.subjectData;