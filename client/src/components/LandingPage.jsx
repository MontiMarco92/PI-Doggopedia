import React from "react";
import { BgImg, Title, Container, Btn, EnterLink } from "./styles/LandingPage.styled";

export function LandingPage() {
	return (
		<BgImg>
			<Container>
				<Title>Welcome to Doggopedia</Title>
				<Btn type="button">
					<EnterLink to="/home">Start Now!</EnterLink>
				</Btn>
			</Container>
			
		</BgImg>
	);
}
