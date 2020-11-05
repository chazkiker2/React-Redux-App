//helpers
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// redux helpers
import { useSelector } from "react-redux";

// components
import Search from "../features/search/Search";
import Nav from "../features/nav/Nav";
import BookCard from "../components/BookCard";
import Home from "../features/home/Home";
import DisplaySubject from "../features/subjects/DisplaySubject";


function App() {
	const st = useSelector(state => state);
	return (
		<Router>
			<Nav />
			<div className="App">
				<Switch>
					<Route path="/search">
						<div>
							{
								(st.search.entities.length > 0) ?
									st.search.entities[st.search.entities.length - 1].docs.map(x => {
										return <BookCard data={x} />
									})
									: <div />
							}
						</div>
					</Route>
					<Route path="/subjects/:subjectName">
						<DisplaySubject />
					</Route>
					<Route path="/subjects">
						<div>SUBJECTS</div>
					</Route>
					<Route path="/lists">
						<div>LISTS</div>
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Redirect to="/" />
				</Switch>

			</div>

		</Router>
	);
}

export default App;
