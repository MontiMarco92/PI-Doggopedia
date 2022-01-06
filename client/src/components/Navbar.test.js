import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Home } from "./Home";
import { CreateBreed } from "./CreateBreed.jsx";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../redux/store.js";

describe("Navbar component", () => {
	const renderFn = () => {
		return render(
			<MemoryRouter initialEntries={["/home"]}>
				<Provider store={store}>
					<Routes>
						<Route path="/home" element={<Navbar />}>
							<Route index element={<Home />} />
							<Route path="createBreed" element={<CreateBreed />} />
						</Route>
					</Routes>
				</Provider>
			</MemoryRouter>
		);
	};

	test("renders correctly", () => {
		const navbar = renderFn();
		expect(navbar).toBeTruthy();
	});

	test("has a title and logo with correct text", () => {
		const navbar = renderFn();
		expect(
			navbar.getByRole("link", { name: /doggopedia/i })
		).toBeInTheDocument();
		// expect(navbar.getByTestId("svgimg")).toBeInTheDocument(); // test presence of reactIcon
	});

	test("has an input field and a button to submit the search", () => {
		const navbar = renderFn();
		expect(navbar.getByPlaceholderText(/enter dog.../i)).toBeInTheDocument();
		expect(navbar.getByRole("button", { name: /search/i })).toBeInTheDocument();
	});
	test("has an input field that set it's value to what is typed into it", () => {
		const navbar = renderFn();
		const input = navbar.getByPlaceholderText(/enter dog.../i);
		fireEvent.change(input, { target: { value: "el coco" } });
		expect(input.value).toBe("el coco");
		fireEvent.change(input, { target: { value: "coonhound" } });
		expect(input.value).toBe("coonhound");
	});
	test("has a form that is submitted when button is clicked and redirection to /home is executed", () => {
		render(
			<MemoryRouter initialEntries={["/home/createBreed"]}>
				<Provider store={store}>
					<Routes>
						<Route path="/home" element={<Navbar />}>
							<Route index element={<Home />} />
							<Route path="createBreed" element={<CreateBreed />} />
						</Route>
					</Routes>
				</Provider>
			</MemoryRouter>
		);
		expect(screen.getByText(/create your own breed/i)).toBeInTheDocument();
		expect(screen.queryByText(/filter by:/i)).not.toBeInTheDocument();
		const btn = screen.getByRole("button", { name: /search/i });
		fireEvent.click(btn, { button: 0 });
		expect(screen.getByText(/filter by:/i)).toBeInTheDocument();
		expect(
			screen.queryByText(/create your own breed/i)
		).not.toBeInTheDocument();
		expect(
			screen.queryByRole("link", { name: /create breed/i })
		).toBeInTheDocument();
	});
});
