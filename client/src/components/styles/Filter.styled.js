import styled from "styled-components";

export const FilterWrapper = styled.div`
	width: 25%;
	display: flex;
	flex-direction: column;
	background-color: var(--filter);
	border-right: 4px solid var(--text);
`;

export const FilterDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding-bottom: 40px;
`;

export const Title = styled.h3`
	font-size: 1.5rem;
	background: var(--green);
	color: var(--text);
	width: 100%;
	padding: 15px 20px;
	margin-bottom: 20px;
`;

export const SubTitle = styled.h5`
	font-size: 1.4rem;
	color: var(--text);
	margin: 15px 0;
	text-decoration: underline;
	text-decoration-thickness: 0.1rem;
`;

export const Select = styled.select`
	font-size: 1.1rem;
	width: 70%;
	padding: 8px 12px;
	color: var(--text2);
	background-color: var(--filter2);
	border: 1px solid var(--text);
	cursor: pointer;
	border-radius: 3px;
	margin: 15px 0;
	transition: all, 0.2s;

	&:hover {
		box-shadow: 0 10px 15px #c9d6df;
		border: 3px solid var(--text);
	}

	::-webkit-scrollbar {
		width: 0.8rem;
	}
	::-webkit-scrollbar-track {
		background: var(--scrollbar-track);
	}
	::-webkit-scrollbar-thumb {
		background: var(--text);
		border-radius: 10px;

		&:hover {
			background: var(--scrollbar-hover);
		}
	}
`;

export const Label = styled.label`
	display: flex;
	width: 100%;
	padding-left: 50px;
	font-size: 1.1rem;
	color: var(--text2);
	margin: 10px 0;

	input[type="radio"] {
		display: none;
	}
	span {
		display: flex;
		padding: 10px 20px 10px 10px;
		border-radius: 20px;
		transition: 0.25s ease;
		cursor: pointer;

		&:hover {
			background-color: var(--filter);
		}
	}

	span::before {
		content: "";
		background-color: var(--white);
		width: 20px;
		height: 20px;
		border-radius: 50%;
		margin-right: 15px;
		transition: 0.25s ease;
		box-shadow: inset 0 0 0 2px #00005c;
	}

	input[type="radio"]:checked + span {
		background-color: var(--filter2);
	}

	input[type="radio"]:checked + span::before {
		box-shadow: inset 0 0 0 5px #00005c;
	}
`;

export const ResetButton = styled.button`
	background-color: var(--text);
	color: var(--white);
	border: 0;
	border-radius: 5px;
	height: 35px;
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	margin-top: 40px;
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
