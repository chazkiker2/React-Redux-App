import axios from "axios";
import parseLink, { Links } from "parse-link-header";

const isLastPage = (pageLinks) => {
	return (
		Object.keys(pageLinks).length === 2 && pageLinks.first && pageLinks.prev
	)
}

const getPageCount = (pageLinks) => {
	if (!pageLinks) {
		return 0
	}
	if (isLastPage(pageLinks)) {
		return parseInt(pageLinks.prev.page, 10) + 1
	} else if (pageLinks.last) {
		return parseInt(pageLinks.last.page, 10)
	} else {
		return 0
	}
}

export async function getSearchResults(
	term
) {
	const url = `http://openlibrary.org/search.json?q=${term}`

	try {
		const searchResponse = await axios.get(url);
		let pageCount = 0;
		const pageLinks = parseLink(searchResponse.headers.link)

		if (pageLinks !== null) {
			pageCount = getPageCount(pageLinks)
		}

		return {
			pageLinks,
			pageCount,
			issues: searchResponse.data
		}
	} catch (err) {
		console.log(err);
		// throw err
	}
}

