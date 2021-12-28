import styled from "styled-components";
import { Link } from "react-router-dom";
import BgImage from "../../images/landing3.jpg";
import Img1 from "../../images/landing1.jpg";

export const BgImg = styled.div`
	background-image: url(${BgImage});
	background-size: cover;
	height: 100vh;
	background-position: bottom;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 40%;
	margin: 0 70px;
`;

export const Title = styled.h1`
	font-size: 3.5rem;
	margin: 20px 0 50px 0;
`;

export const Btn = styled.button`
	width: 40%;
	line-height: 2rem;
	font-size: 1.5rem;
	padding: 10px 0;
	cursor: pointer;
	border-radius: 5px;
	background: var(--black);
	appearance: none;
	outline: none;
	border: 2px solid var(--border-black);
	box-shadow: none;
	transform: translateY(0);
	transition: all 0.3s ease;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
		transform: translateY(-4px);
	}

	&:active {
		box-shadow: none;
		transform: translateY(0);
	}
`;

export const EnterLink = styled(Link)`
	text-decoration: none;
	text-transform: uppercase;
	color: var(--white);
	letter-spacing: 0.3rem;
`;
