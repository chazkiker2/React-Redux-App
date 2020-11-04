import React from "react";
import { useDispatch } from "react-redux";
import { fetchResults } from "./searchSlice";
import styled from "styled-components";

import useForm from "../../hooks/useForm";

const Header = styled.header`
	width: 100%;
	background-color: black;
	color: white;
	height: 50px;
	display: flex;
	justify-content: center;
	div {
		width: 95%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		h1 {
			font-size: 2rem;
			/* font-weight: 600; */
		}
		form {
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
		}
	}
`;

export const Search = props => {
	const [input, handleChanges, clearForm] = useForm({ searchTerm: "", });
	const dispatch = useDispatch();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const termToSearch = input.searchTerm.trim().toLowerCase().split(" ").join("+");
		dispatch(fetchResults(termToSearch));
		clearForm();
	}

	return (
		<Header>
			<div>
				<h1>React Redux Library</h1>
				<form onSubmit={handleSubmit}>
					<input type="text" name="searchTerm" value={input.searchTerm} onChange={handleChanges} />
					<button>Search</button>
				</form>
			</div>
		</Header>
	);
}