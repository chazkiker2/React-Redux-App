import React from 'react';
import { useSelector } from "react-redux"
// import { Counter } from './features/counter/Counter';
import { Search } from "./features/search/Search";
import BookCard from "./components/BookCard";
function App() {
	const st = useSelector(state => state);
	return (
		<div className="App">
			<header className="App-header">
				{/* <Counter /> */}
				<Search />
				<div>
					{
						(st.search.entities.length > 0) ?
							st.search.entities[st.search.entities.length - 1].docs.map(x => {
								return <BookCard data={x} />
							})
							: <div />
					}
				</div>
			</header>
		</div>
	);
}

export default App;
