import axios from "axios";

export const fetchSearchResults = async (term) => {
	const url = `http://openlibrary.org/search.json?q=${term}`;
	const { data } = await axios.get(url);
	return data;
}

export const fetchBySubject = async (subject) => {
	// const url = `http://openlibrary.org/subjects/${subject}.json?details=true`;
	const url = `http://openlibrary.org${subject}.json?details=true`;
	const { data } = await axios.get(url);
	return data;
}

export const fetchBySubjectWithDetails = async (subject) => {
	// const url = `http://openlibrary.org/subjects/${subject}.json?details=true`;
	const url = `http://openlibrary.org${subject}.json?details=true`;
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


//publishers, places, people, times, languages, subjects,
export const sortCount = (incoming) => {
	const compare = (a, b) => {
		const itemA = a.count;
		const itemB = b.count;
		let comparison = 0;
		if (itemA < itemB) {
			comparison = 1;
		} else if (itemA > itemB) {
			comparison = -1;
		}
		return comparison;
	}
	return [...incoming].sort(compare);
}