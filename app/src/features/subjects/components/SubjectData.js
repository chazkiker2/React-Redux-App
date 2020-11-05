import React from "react";
import styled from "styled-components";

const SData = styled.div`
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: flex-start;
	div.data-topic {
		/* margin: 20px; */
		display: flex;
		flex-flow: column nowrap;
		border: 1px solid black;
		h4 {
			font-size: 1.2rem;
			font-weight: 600;
			text-decoration: underline;
		}
		div.data-item {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
		}
	}
`;

const SubjectData = props => {
	const { data } = props;

	return (
		<SData>
			<div className="data-topic">
				<h4>Prevalent Publishers</h4>
				{data.publishers && data.publishers.map(publisher => {
					return (
						<div className="data-item" key={publisher.key}>
							<p>{publisher.name}:</p>
							<p>{publisher.count}</p>
						</div>
					);
				})}
			</div>
			<div className="data-topic">
				<h4>Prevalent Places</h4>
				{data.places && data.places.map(place => {
					return (
						<div className="data-item" key={place.key}>
							<p>{place.name}:</p>
							<p>{place.count}</p>
						</div>
					);
				})}
			</div>
			<div className="data-topic">
				<h4>Prevalent People</h4>
				{data.people && data.people.map(person => {
					return (
						<div className="data-item" key={person.key}>
							<p key={person.key}>{person.name}:</p>
							<p>{person.count}</p>
						</div>
					);
				})}
			</div>
			<div className="data-topic">
				<h4>Prevalent Times</h4>
				{data.times && data.times.map(time => {
					return (
						<div className="data-item" key={time.key}>
							<p>{time.name}:</p>
							<p>{time.count}</p>
						</div>
					);
				})}
			</div>
			<div className="data-topic">
				<h4>Prevalent Languages</h4>
				{data.languages && data.languages.map(lang => {
					return (
						<div className="data-item" key={lang.key}>
							<p>{lang.name}:</p>
							<p>{lang.count}</p>
						</div>
					);
				})}
			</div>
			<div className="data-topic">
				<h4>Related Subjects</h4>
				{data.subjects &&
					data.subjects.map(subject =>
					(
						<div className="data-item" key={subject.key}>
							<p>{subject.name}:</p>
							<p>{subject.count}</p>
						</div>
					))}
			</div>
			<div className="data-topic">
				<h4>Prevalent Authors</h4>
				{data.authors &&
					data.authors.map(author =>
					(
						<div className="data-item" key={author.key}>
							<p>{author.name}:</p>
							<p>{author.count}</p>
						</div>
					))}
			</div>
		</SData>
	)
}

export default SubjectData;