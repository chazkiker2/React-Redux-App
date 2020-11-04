import React from "react";
import { useDispatch } from "react-redux";
import { fetchResultsAsync } from "./searchSlice";

import useForm from "../../hooks/useForm";

export const Search = props => {
	const [input, handleChanges, clearForm] = useForm({ searchTerm: "", });
	const dispatch = useDispatch();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const termToSearch = input.searchTerm.trim().toLowerCase().split(" ").join("+");
		dispatch(fetchResultsAsync(termToSearch));
		clearForm();
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