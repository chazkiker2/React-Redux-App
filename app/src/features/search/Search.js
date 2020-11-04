import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, fetchSearchAsync, fetchResultsAsync, fetchSearchResults } from "./searchSlice";

import useForm from "../../hooks/useForm";

export const Search = props => {
	// const searchResults = useSelector(state => state.searchResults);
	// const searchTerm = useSelector(state => state.search.searchTerm);
	const dispatch = useDispatch();
	const [input, handleChanges, clearForm] = useForm({ searchTerm: "", });
	// const [input, setInput] = useState("");

	// const handleChange = (evt) => {
	// 	// evt.preventDefault();
	// 	setInput(evt.target.value);
	// }
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const termToSearch = input.searchTerm.trim().toLowerCase().split(" ").join("+");
		// dispatch(setSearchTerm(termToSearch));
		// dispatch(fetchSearchResults(termToSearch));
		dispatch(fetchResultsAsync(termToSearch));
		// clearForm(evt);
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" name="searchTerm" value={input.searchTerm} onChange={handleChanges} />
				<button>Search</button>
			</form>
		</>
	);
}