import styled from "styled-components";
import { IoPaw } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 30px 40px;
	background-color: #f9f7f7;
`;

export const NavTitle = styled(Link)`
	color: #112d4e;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
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
	border: 2px solid #112D4E;
	padding: 5px;
	font-size: 1rem;
`;

export const NavButton = styled.button`
	background-color: #112d4e;
	color: #fff;
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
		border: 1px solid #112d4e;
		background-color: #fff;
		color: #112d4e;
	}
`;

export const CreateLink = styled(Link)`
	text-decoration: none;
	display: flex;
	justify-content: center;
	font-size: 1.3rem;
	color: #112d4e;
	border-top: 1px solid #3f72af;
	border-bottom: 1px solid #3f72af;
	letter-spacing: 1px;
	padding: 5px;
	width: 15%;
	transition: all 0.25s;

	&:hover {
		letter-spacing: 5px;
	}
`;
