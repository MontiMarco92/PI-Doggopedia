import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/LandingPage.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import store from "./redux/store";
import { Provider } from "react-redux";
import { DetailCard } from "./components/DetailCard";
import { CreateBreed } from "./components/CreateBreed";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/home" element={<Navbar />}>
						<Route index element={<Home />} />
						<Route path="dog/:breedId" element={<DetailCard />} />
						<Route path="createBreed" element={<CreateBreed />} />
					</Route>
				</Routes>
			</div>
		</Provider>
	);
}

export default App;
