import React from "react";

const SubjectData = props => {
	const { data } = props;

	return (
		<div>
			<div>
				<h4>Publishers</h4>
				{data.publishers && data.publishers.map(publisher => {
					return (
						<React.Fragment key={publisher.key}>
							<p>{publisher.name} — {publisher.count}</p>
							{/* <p>{publisher.count}</p> */}
							{/* <p>{publisher.key}</p> */}
						</React.Fragment>
					);
				})}
			</div>
			<div>
				<h4>Places</h4>
				{data.places && data.places.map(place => {
					return (
						<React.Fragment key={place.key}>
							<p>{place.name} — {place.count}</p>
							{/* <p>{place.count}</p> */}
							{/* <p>{place.key}</p> */}
						</React.Fragment>
					);
				})}
			</div>
			<div>
				<h4>People</h4>
				{data.people && data.people.map(person => {
					return (
						<React.Fragment key={person.key}>
							<p>{person.name} — {person.count}</p>
							{/* <p>{person.count}</p> */}
							{/* <p>{person.key}</p> */}
						</React.Fragment>
					)
				})}
			</div>
		</div>
	)
}

export default SubjectData;