import styled from "styled-components";

export const PaginationWrapper = styled.div`
	display: flex;
	margin-top: 10px;
`;

export const List = styled.ul`
	background: var(--scrollbar-track);
	margin-top: 2rem;
	display: flex;
	padding: 20px 20px;
	border-radius: 50px;
	height: 4rem;
	align-items: center;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

export const Item = styled.li`
	list-style: none;
`;

export const Button = styled.button`
	text-decoration: none;
	cursor: pointer;
	border: none;
	letter-spacing: 2px;
	color: var(--white);
	padding: 15px;
	text-align: center;
	font-weight: 600;
	font-size: 1.1rem;
	border-bottom: 2px solid transparent;

	background: var(--scrollbar-track);
	transition: all 0.3s ease;

	&:hover {
		border-bottom: 2px solid var(--text);
		color: var(--text);
	}

	&:focus {
		border-bottom: 2px solid var(--text);
		color: var(--text);
	}
`;
