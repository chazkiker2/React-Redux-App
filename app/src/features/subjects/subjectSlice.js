import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBySubjectWithDetails } from "../../api/openlibAPI";

const initialSubjectState = {
	available: ["arts", "fiction", "history", "biography", "books-by-language", "business-and-finance", "children's", "health-and-wellness", "social-sciences", "places", "textbooks",],
	selected: null,
	entities: [],
	loading: "idle",
	currentRequestId: undefined,
	error: null,
}

export const fetchSubjectResults = createAsyncThunk(
	"subjects/fetchSubjectsStatus",
	async (subjects, { getState, requestId }) => {
		const { currentRequestId, loading } = getState().subject;
		if (loading !== "pending" || requestId !== currentRequestId) {
			return;
		}
		return fetchBySubjectWithDetails(subjects.selected);
	}
)

const subjectSlice = createSlice({
	name: "subject",
	initialState: initialSubjectState,
	reducers: {},
	extraReducers: {

	}
})