import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

const SContainer = styled.div`
	text-align: center;
	/* display: flex; */
	/* flex-flow: row nowrap; */
	/* justify-content: center; */
	button {
		margin: 20px;
		width: 60px;
		display: inline-block;
		background-color: black;
		color: white;
		border: 0;
		border-radius: 5px;
		font-size: 1.1rem;
	}
`;

const SCarouselWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const SCarouselSlide = styled.div`
	display: flex; 
	flex-flow: row nowrap; 
	justify-content: space-evenly; 
	flex: 0 0 auto;
	opacity: ${props => (props.active ? 1 : 0)};
	transition: all 0.5s ease;
	width: 100%;
`;

const SCarouselSlides = styled.div`
	display: flex;
	/* flex-flow: row nowrap; */
	${props =>
		props.currentSlide &&
		css`
		transform: translateX(-${props.currentSlide * 100}%);
	`}
	transition: all 0.5s ease;
`;

const Carousel = ({ className, children }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const activeSlide = children.map((slide, index) => {
		return (
			<SCarouselSlide className="carousel-slide" active={currentSlide === index} key={index}>
				{slide}
			</SCarouselSlide>
		);
	});

	const handleRightClick = (evt) => {
		setCurrentSlide((currentSlide + 1) % activeSlide.length);
	}
	const handleLeftClick = () => {
		setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
	}

	return (
		<SContainer className={className}>
			<SCarouselWrapper className="carousel-wrapper">
				<SCarouselSlides className="carousel-slides" currentSlide={currentSlide}>
					{activeSlide}
				</SCarouselSlides>
			</SCarouselWrapper>
			<button name="left" onClick={handleLeftClick}>Left</button>
			<button name="right" onClick={handleRightClick}>Right</button>
			{/* <button onClick={handleLeftClick}>Left</button> */}
			{/* <button onClick={() => { setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length) }}>Left</button> */}
			{/* <button onClick={() => { setCurrentSlide((currentSlide + 1) % activeSlide.length) }}>Right</button> */}
		</SContainer>
	);
}

export default Carousel;