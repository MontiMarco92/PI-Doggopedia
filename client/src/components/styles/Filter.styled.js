import styled from "styled-components";

export const FilterWrapper = styled.div`
	width: 20%;
	height: 100%;
	background-color: #f9f7f7;
	position: fixed;
	left: 0;
	border-right: 4px solid #112d4e;
`;

export const FilterDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 30px 0;
	text-align: center;
`;

export const Title = styled.h3`
    font-size: 1.5rem;
    color: #112D4E;
    display: block:
    text-align: right;
    padding: 20px 15px 10px;
    border-top: 2px solid #112D4E;
`;

export const SubTitle = styled.h5`
	font-size: 1.4rem;
	color: #112d4e;
	margin: 15px 0;
`;

export const Select = styled.select`
	font-size: 1.1rem;
	width: 70%;
	padding: 8px 12px;
	color: #393e46;
	background-color: #dbe2ef;
	border: 1px solid #112d4e;
	cursor: pointer;
	border-radius: 3px;
	margin: 15px 0;
	transition: all, 0.2s;

	&:hover {
		box-shadow: 0 10px 15px #c9d6df;
		border: 3px solid #112d4e;
	}

	::-webkit-scrollbar {
		width: 0.8rem;
	}
	::-webkit-scrollbar-track {
		background: #3f72af;
	}
	::-webkit-scrollbar-thumb {
		background: #112d4e;
		border-radius: 10px;

		&:hover {
			background: #0f4c75;
		}
	}
`;

export const Label = styled.label`
	display: flex;
	width: 100%;
	padding-left: 50px;
	cursor: pointer;
	font-size: 1.1rem;
	color: #393e46;
	margin: 10px 0;

	input[type="radio"] {
		display: none;
	}
	span {
		display: flex;
		padding: 10px 20px 10px 10px;
		border-radius: 20px;
		transition: 0.25s ease;

		&:hover {
			background-color: #dbe2ef;
		}
	}

	span::before {
		content: "";
		background-color: #fff;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		margin-right: 15px;
		transition: 0.25s ease;
		box-shadow: inset 0 0 0 2px #00005c;
	}

	input[type="radio"]:checked + span {
		background-color: #dbe2ef;
	}

	input[type="radio"]:checked + span::before {
		box-shadow: inset 0 0 0 5px #00005c;
	}
`;

export const ResetButton = styled.button`
	background-color: #112d4e;
	color: #fff;
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
		border: 1px solid #112d4e;
		background-color: #fff;
		color: #112d4e;
	}
`;
