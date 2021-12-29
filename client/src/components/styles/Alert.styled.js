import styled from "styled-components";

export const AlertWrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AlertBox = styled.div`
	background: var(--filter);
	border: 2px solid var(--errorMsg);
	border-radius: 8px;
	width: 30%;
	height: 30%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	padding: 25px 20px;

	h2 {
		color: var(--border-black);
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	p {
		font-size: 1.1rem;
		text-align: center;
	}

	button {
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
		transition: all 0.2s ease;

		&:hover {
			cursor: pointer;
			border: 1px solid var(--text);
			background-color: var(--white);
			color: var(--text);
		}
	}
`;

export const ErrorMsg = styled.span`
	color: var(--errorMsg);
	font-size: 1rem;
`;
