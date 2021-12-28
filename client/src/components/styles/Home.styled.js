import styled from "styled-components";

export const HomeWrapper = styled.div`
	display: flex;
`;

export const Main = styled.div`
	width: 100%;
	margin: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const LoadingMsg = styled.span`
	font-size: 1.6rem;
	font-weight: 500;
	color: var(--text);
`;

export const ErrorMsg = styled.span`
	font-size: 1.6rem;
	font-weight: 500;
	color: var(--errorMsg);
`;
