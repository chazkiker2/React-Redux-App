//helpers
import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

//redux helpers
import { useDispatch } from "react-redux";
import { fetchResults } from "./searchSlice";

import useForm from "../../hooks/useForm";

const Form = styled.form`
	input {
		background-color: transparent;
		border: 1px solid white;
		border-radius: 4px;
	}
	button {
		background-color: transparent;
		color: white;
		border: 1px solid white;
		border-radius: 4px;
		/* font-style:  */
	}
`;

const Search = props => {
	const [input, handleChanges, clearForm] = useForm({ searchTerm: "", });
	const dispatch = useDispatch();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const termToSearch = input.searchTerm.trim().toLowerCase().split(" ").join("+");
		dispatch(fetchResults(termToSearch));
		clearForm();
		props.history.push(`/search/q=${termToSearch}`);
	}

	return (
		<Form onSubmit={handleSubmit}>
			<input type="text" name="searchTerm" value={input.searchTerm} onChange={handleChanges} />
			<button>Search</button>
		</Form>
	);
}

export default withRouter(Search);