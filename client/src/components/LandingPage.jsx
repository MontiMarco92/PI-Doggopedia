import React from "react";
import { Link } from "react-router-dom";

export function LandingPage() {
	return (
		<div>
			<h1>Welcome to Doggopedia</h1>
			<button type="button">
				<Link to="/home">Start Now!</Link>
			</button>
		</div>
	);
}
