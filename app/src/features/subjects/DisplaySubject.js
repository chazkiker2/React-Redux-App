import React, { useEffect } from "react";
import { useRouteMatch, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchSubject, selectSubject, sortSubjectData } from "./subjectSlice";
import SubjectData from "./components/SubjectData";

const DisplaySubject = () => {
	const subject = useSelector(state => state.subject)
	const location = useLocation();
	const subjectId = location.pathname;
	const sortSpecs = location.hash;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(selectSubject(subjectId));
		dispatch(fetchSubject(subject.selected));
		// dispatch(sortSubjectData(subject.entities[subject.entities.length - 1]));
	}, [])

	useEffect(() => {
		dispatch(sortSubjectData(subject.entities[subject.entities.length - 1]));
	}, [subject.entities])

	return (
		<>
			<div>SUBJECT</div>
			<div>{subjectId}</div>
			<div>{sortSpecs}</div>
			{subject.subjectData &&
				<SubjectData data={subject.subjectData} />
				// Object.entries(subject.subjectData).map(entry => {
				// 	console.log(entry);
				// 	return (
				// 		<
				// 		<div key={entry}>
				// 			{entry}
				// 		</div>
				// 	)
				// })
				}
		</>
	)
}

export default DisplaySubject;