import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	gap: 20px;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 500px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const Card = styled.div`
	background: var(--filter2);

	display: flex;
	border: none;
	box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	transition: transform 0.3s;

	&:hover {
		transform: translateY(5px);
		box-shadow: 2px 2px 26px 0px rgba(0, 0, 0, 0.3);
	}
`;

export const CardLink = styled(Link)`
	text-decoration: none;
	width: 100%;
`;

export const ImgContent = styled.div`
	width: 100%;
	height: 200px;
`;
export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: top;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

export const Content = styled.div`
	text-align: center;
	padding: 15px;
	color: var(--text);

	h2 {
		margin: 10px 0;
		letter-spacing: 1.5px;
	}

	h5 {
		font-size: 1.1rem;
		padding: 10px 0;
	}
	p {
		font-size: 1rem;
		letter-spacing: 1.5px;
	}

	h4 {
		margin-top: 20px;
		font-size: 1.1rem;
	}
`;
