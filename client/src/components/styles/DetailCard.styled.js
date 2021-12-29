import styled from "styled-components";

export const DetailWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 87vh;
	width: 100%;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	box-shadow: 6px 15px 15px 0px rgba(0, 0, 0, 0.3);
	border: 2px solid var(--text);
	background: var(--filter2);
	border-radius: 10px;
	margin-top: 25px;
	max-width: 60%;
	max-height: 70%;

	@media (max-width: 1200px) {
		flex-direction: column;
	}
`;

export const MainContent = styled.div`
	display: flex;
`;
export const ImgContent = styled.div`
	display: flex;
	flex: 1;
	@media (max-width: 1200px) {
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
	object-position: top;
	border-radius: 50px;
	padding: 40px;
`;

export const Content = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	margin-right: 40px;
	padding: 40px 0;
	color: var(--text);

	h2 {
		font-size: 2rem;
		width: 100%;
		text-align: center;
		padding: 5px 0;
		border-top: 2px solid var(--green);
		border-bottom: 2px solid var(--green);
	}

	h4 {
		font-size: 1.3rem;
		padding: 10px 0;

		span {
			font-size: 1.2rem;
			font-weight: normal;
			letter-spacing: 1.3px;
		}
	}
	p {
		font-size: 1.2rem;
		letter-spacing: 1.3px;
	}

	@media (max-width: 1200px) {
		padding: 0;
		margin: 0;
		align-items: center;
		h2 {
			font-size: 1.5rem;
		}
		h4 {
			text-align: center;
			font-size: 1.2rem;
			padding: 15px 0;
		}
		p {
			font-size: 1rem;
			letter-spacing: 1px;
		}
	}
`;

export const LoadingMsg = styled.span`
	font-size: 1.6rem;
	font-weight: 500;
	color: vaR(--text);
`;

export const ErrorMsg = styled.span`
	font-size: 1.6rem;
	font-weight: 500;
	color: var(--errorMsg);
`;

export const DeleteBtn = styled.button`
	background-color: var(--text);
	color: var(--white);
	width: 100%;
	border: 0;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 35px;
	font-size: 1.2rem;
	display: block;
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
`;
