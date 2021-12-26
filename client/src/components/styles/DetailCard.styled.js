import styled from "styled-components";

export const DetailWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10%;
`;

export const Card = styled.div`
	display: flex;
	box-shadow: 6px 15px 15px 0px rgba(0, 0, 0, 0.3);
	border: 3px solid #112d4e;
	border-radius: 10px;

	@media (max-width: 1200px) {
		flex-direction: column;
	}
`;

export const ImgContent = styled.div`
	width: 700px;
	height: 100%;

	@media (max-width: 1200px) {
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50px;
	padding: 40px;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	margin-right: 40px;
	padding: 40px 0;

	h2 {
		font-size: 2rem;
	}

	h4 {
		font-size: 1.1rem;
		padding: 10px 0;
	}
	p {
		font-size: 1rem;
		letter-spacing: 1.5px;
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
	color: #112d4e;
`;

export const ErrorMsg = styled.span`
	font-size: 1.6rem;
	font-weight: 500;
	color: #c50000;
`;
