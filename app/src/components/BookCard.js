import React from "react";
// import { __esModule } from "react-redux/lib/components/Provider";

const BookCard = props => {
	const {
		title,
		title_suggest,
		edition_key,
		cover_i,
		isbn,
		has_fulltext,
		text,
		author_name,
		seed,
		ia,
		author_key,
		subject,
		ddc,
		first_publish_year,
		type,
		ebook_count_i,
		publish_place,
		edition_count,
		key,
		publisher,
		language,
		llcn,
		author_alternative_name,
		cover_edition_key,
		publish_year,
		place,
		publish_date,
	} = props.data;
	return (
		<div>
			<h2>{title}</h2>
			<h2>{title_suggest}</h2>
			<p>{edition_key}</p>
			<p>has full text? {has_fulltext}</p>
			{/* {isbn.map(i => {
				return <p id={isbn}>isbn</p>
			})} */}
			<p>Author: {author_name}</p>
		</div>
	);
};

export default BookCard;