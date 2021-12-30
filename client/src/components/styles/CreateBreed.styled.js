import styled from "styled-components";

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 2;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	align-items: center;
	padding: 25px 30px;
	border-radius: 10px;
	background: var(--green);
	border: 2px solid var(--text);
	box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

	h1 {
		color: var(--text);
		font-size: 1.7rem;
		margin: 5px 0;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	padding: 15px 20px;
`;

export const Info = styled.div`
	width: calc(100% / 2 - 20px);
	display: flex;
	flex-direction: column;
	margin-top: 15px;
`;
export const Label = styled.label`
	line-height: 2rem;
	color: var(--text);
	font-size: 1.2rem;
	margin: 7px 0 3px 0;
`;

export const Input = styled.input`
	line-height: 2rem;
	border-radius: 5px;
	font-size: 1rem;
	margin: 3px 0 8px 0;
	outline: none;
	padding-left: 15px;
	border: 3px solid transparent;
	transition: all 0.2s ease;

	&:focus {
		border: 3px solid var(--purple);
	}
`;

export const ErrorMsg = styled.span`
	color: var(--errorMsg);
	font-size: 1rem;
`;

export const TempSection = styled.div`
	width: calc(100% / 2 - 20px);
	display: flex;
	flex-direction: column;
	margin-top: 15px;
	height: 150px; //
`;

export const Dropdown = styled.div`
	display: flex;
	height: 100%;
`;

export const Select = styled.select`
	font-size: 1rem;
	height: 2.5rem;
	flex: 1;
	padding: 5px 12px;
	color: var(--text2);
	outline: none;
	border: 3px solid transparent;
	cursor: pointer;
	border-radius: 5px;
	margin: 3px 8px 8px 0;
	transition: all, 0.2s;

	&:hover {
		border: 3px solid var(--purple);
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

export const SelectedItems = styled.div`
	font-size: 0.8rem;
	flex: 3;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-evenly;
`;

export const TempBtn = styled.button`
	font-size: 1rem;
	display: flex;
	align-items: center;
	padding: 8px;
	margin: 3px;
	border-radius: 20px;
	border: 2px solid var(--purple);
	background: var(--white);
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: var(--errorMsg);
		color: var(--white);
	}
`;

export const ButtonDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 30px;
`;
export const Button = styled.input`
	height: 45px;
	width: 70%;
	border-radius: 5px;
	outline: none;
	font-size: 1.7rem;
	font-weight: 700;
	outline: none;
	letter-spacing: 0.2rem;
	text-transform: uppercase;
	cursor: pointer;
	background: var(--text);
	border: none;
	color: var(--white);
	transition: all 0.5s;

	&:hover {
		background: var(--filter2);
		color: var(--text);
	}
`;
