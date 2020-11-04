import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm, fetchSearchAsync } from "./searchSlice";

export const Search = props => {
	// const searchResults = useSelector(state => state.searchResults);
	// const searchTerm = useSelector(state => state.search.searchTerm);
	const dispatch = useDispatch();
	const [input, setInput] = useState("");

	const handleChange = (evt) => {
		// evt.preventDefault();
		setInput(evt.target.value);
	}
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const termToSearch = input.trim().toLowerCase().split(" ").join("+");
		dispatch(setSearchTerm(termToSearch));
		dispatch(fetchSearchAsync(termToSearch));
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" value={input} onChange={handleChange} />
			</form>
		</>
	);
}