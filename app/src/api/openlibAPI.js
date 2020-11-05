import axios from "axios";

export const fetchSearchResults = async (term) => {
	const url = `http://openlibrary.org/search.json?q=${term}`;
	const { data } = await axios.get(url);
	return data;
}

export const fetchBySubject = async (subject) => {
	const url = `http://openlibrary.org/subjects/${subject}.json?details=true`;
	const { data } = await axios.get(url);
	return data;
}

export const fetchBySubjectWithDetails = async (subject) => {
	const url = `http://openlibrary.org/subjects/${subject}.json?details=true`;
	const { data } = await axios.get(url);
	return data;
}

export const fetchByQueryWithDetails = async (params) => {
	const formattedParams = params ? `&${params.join("&")}` : "";
	const url = `https://openlibrary.org/query.json?type=/type/edition&languages=/languages/eng${formattedParams}&*=`;
	const { data } = await axios.get(url);
	return data;
}

export const fetchByQuery = async (params) => {
	const formattedParams = params ? `&${params.join("&")}` : "";
	const url = `https://openlibrary.org/query.json?type=/type/edition&languages=/languages/eng${formattedParams}`;
	const { data } = await axios.get(url);
	return data;
}

export const fetchBookByISBN = async (ISBN) => {
	const url = `https://openlibrary.org/isbn/${ISBN}.json`;
	const { data } = await axios.get(url);
	return data;
}
export const fetchBookByEdition = async (edition) => {
	const url = `https://openlibrary.org/books/${edition}.json`;
	const { data } = await axios.get(url);
	return data;
}

export const fetchByBibkey = async (bibkeys) => {
	const url = `https://openlibrary.org/api/books?bibkeys=${bibkeys}&jscmd=data&dformat=json`;
	const { data } = await axios.get(url);
	return data;
}
