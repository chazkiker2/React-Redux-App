import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchSubject, selectSubject, selectAllSubject, sortSubjectData } from "./subjectSlice";
import SubjectData from "./components/SubjectData";
import SubjectBooks from "./components/SubjectBooks";

const DisplaySubject = () => {
	// const subject = useSelector(state => state.subject);
	const subject = useSelector(selectAllSubject);
	const subStatus = useSelector(state => state.subject.status);
	const location = useLocation();
	const subjectId = location.pathname;
	const sortSpecs = location.hash;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(selectSubject(subjectId));
		dispatch(fetchSubject(subject.selected));
	}, [])

	useEffect(() => {
		dispatch(sortSubjectData(subject.entities[subject.entities.length - 1]));
		// dispatch(sortSubjectData(subject.entities.slice(-1)));
	}, [subject.entities])

	return (
		<>
			<div>SUBJECT</div>
			<div>{subjectId}</div>
			<div>{sortSpecs}</div>
			{
				subject.works.length && <SubjectBooks works={subject.works} />
			}
			{subject.subjectData &&
				<SubjectData data={subject.subjectData} />
			}
		</>
	)
}

export default DisplaySubject;