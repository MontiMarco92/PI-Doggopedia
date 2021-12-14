import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getDogs } from "../redux/actions/getDogsAction";

export function Navbar() {
	const [createLink, setCreateLink] = useState(true);
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		if (window.location.pathname === "/createBreed") {
			setCreateLink(false);
		}
	}, [location]);

	const onSearch = () =>{
		dispatch(getDogs(document.getElementById('searchDog').value))
		document.getElementById('searchBar').reset();
	}

	const backToMain = () =>{
		dispatch(getDogs());
	}
	return (
		<>
			<nav>
				<Link to="/home" onClick={backToMain}>
					<h1>Doggopedia</h1>
				</Link>
				<form id='searchBar' onSubmit={e => {
					e.preventDefault();
					onSearch()}}>
					<input type = 'search' name='searchDog' id='searchDog' required/>
					<button type = 'submit'>Search</button>
				</form>
				
				{createLink ? <Link to="/createBreed">Create Breed</Link> : null}
			</nav>
			<div>
				<Outlet />
			</div>
		</>
	);
}
