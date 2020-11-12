import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import Search from "../search/Search";

const Header = styled.header`
	width: 100%;
	background-color: black;
	color: white;
	height: 50px;
	display: flex;
	justify-content: center;
	div {
		width: 95%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		h1 {
			font-size: 2rem;
			/* font-weight: 600; */
		}
		Link, a {
			display: inline-block;
			width: 80px; 
			color: white;
		}
	}
	
`;

const Nav = props => {
	return (
		<Header>
			<div>
				<h1>React Redux Library</h1>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/subjects">Subjects</Link>
					<Link to="/lists">Lists</Link>
					{/* <Link to="/search">Search</Link> */}
				</nav>
				<Search />
			</div>
		</Header>
	);
}

export default Nav;