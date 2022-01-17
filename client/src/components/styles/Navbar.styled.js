import styled from "styled-components";
import { IoPaw } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2px solid var(--text);
	padding: 30px 40px;
	background-color: var(--nav);
`;

export const NavTitle = styled(Link)`
	color: var(--white);
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2.2rem;
	display: flex;
	align-items: center;
`;

export const NavIcon = styled(IoPaw)`
	margin-right: 0.5rem;
`;

export const NavForm = styled.form`
	display: flex;
	justify-content: space-between;
	justify-self: center;
	align-items: center;
	width: 350px;
`;

export const NavInput = styled.input`
	display: flex;
	justify-content: flex-start
	width: 100%;
	height: 35px;
	border-radius: 5px;
	border: 2px solid var(--text);
	padding: 5px;
	outline: none;
	font-size: 1rem;
`;

export const ErrorMsg = styled.span`
	color: var(--filter);
	font-size: 0.8rem;
`;

export const NavButton = styled.button`
	background-color: var(--text);
	color: var(--white);
	border: 0;
	border-radius: 5px;
	height: 35px;
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	padding: 0 15px;
	border: 1px solid transparent;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
		border: 1px solid var(--text);
		background-color: var(--white);
		color: var(--text);
	}
`;

export const CreateLink = styled(Link)`
	text-decoration: none;
	display: flex;
	justify-content: center;
	font-size: 1.3rem;
	color: var(--white);
	border-top: 1px solid var(--white);
	border-bottom: 1px solid var(--white);
	letter-spacing: 1px;
	text-transform: uppercase;
	padding: 5px;
	width: 12%;
	transition: all 0.25s;

	&:hover {
		letter-spacing: 5px;
	}
`;
