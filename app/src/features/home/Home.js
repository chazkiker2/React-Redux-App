import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "../../components/Carousel";

const CarouselSection = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	div.carousel-section-header {
		Link, a {
			text-decoration: none;
		h4 {
			font-size: 1.5rem;
			color: black;
		}
		}
	}
	/* align-items: center; */
	/* border: 1px solid black; */
`

const SCarousel = styled(Carousel)`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	/* border: 1px solid black; */
	.carousel-slide {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-evenly;
	}
	/* button {
		display: inline-block;
		background-color: black;
		color: white;
		border: 0;
		border-radius: 5px;
	} */
`;

const SCarouselItem = styled.div`
	display: flex;
	flex-flow: row nowrap;
	text-align: center;
	justify-content: space-evenly;
	/* overflow-x: auto; */
	Link, a {
		text-decoration: none;
		h6 {
			font-size: 1.2rem;
			text-transform: capitalize;
			color: darkslategray;
		}
		p {
			color: slategray;
			text-transform: capitalize;
		}
	}
`;

const initialCategories = [
	["art",
		"fantasy",
		"biography",
		"science",
		"recipes",],
	["romance",
		"religion",
		"mystery",
		"music",
		"medicine",],
	["plays",
		"history",
		"children",
		"science-fiction",
		"textbooks",]
]
const Home = props => {
	const [categories, setCategories] = useState(initialCategories);
	return (
		<div>
			<section className="subject-banner">
				<CarouselSection className="carousel-section">
					<div className="carousel-section-header">
						<Link to="/subjects"><h4>Browse By Subject</h4></Link>
					</div>
					<Carousel className="carousel-container" id="categories-carousel">
						{categories.map(group => {
							const chunkArr = group.map(category => {
								return (
									<SCarouselItem key={category}>
										<Link to={`/subjects/${category}#sort=date_published&ebooks=true`}>
											<h6>{category}</h6>
											<p>54,391 Books</p>
										</Link>
									</SCarouselItem>
								)
							})
							return chunkArr;
						}
						)
						}
					</Carousel>

				</CarouselSection>
			</section>
		</div>
	)
}

export default Home;