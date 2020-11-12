import { client } from "./client";

export const fetchBySubject = async (subject) => {
	const url = `http://openlibrary.org${subject}.json?details=true`;
	const { data } = await client.get(url);
	return data;
}

export const fetchBySubjectWithDetails = async (subject) => {
	const url = `http://openlibrary.org${subject}.json?details=true`;
	const { data } = await client.get(url);
	return data;
}