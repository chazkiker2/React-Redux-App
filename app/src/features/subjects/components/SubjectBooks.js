import React from "react";
import styled from "styled-components";

const SGallery = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`;

const BookCard = props => {
	const { work } = props;
	const { title, authors } = work;
	return (
		<div>
			<h4>{title}</h4>
			<ul>Authors:
				{authors.map(author => {
				return <li key={author.key}>{author.name}</li>
			})}
			</ul>
		</div>
	);
}

const SubjectBooks = props => {
	const { works } = props;
	return (
		<div>
			<h1>Books</h1>
			<SGallery>
				{works.map(work => {
					return <BookCard key={work.key} work={work} />
				})}
			</SGallery>
		</div>
	);
}

export default SubjectBooks;