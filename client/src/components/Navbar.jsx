import React from "react";
import { Nav, NavTitle, NavIcon, NavForm, NavInput, NavButton, CreateLink } from './styles/Navbar.styled';
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Navbar() {
	const [createLink, setCreateLink] = useState(true);
	const [searchStr, setSearchStr] = useState({
		str: '',
		searchClick: false
	});
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (window.location.pathname === "/home/createBreed") {
			setCreateLink(false);
		} else {setCreateLink(true)}
	}, [location]);

	const onSearch = (e) =>{
		e.preventDefault();
		setSearchStr({
			...searchStr,
			searchClick: !searchStr.searchClick
		});
		navigate('/home');
	}

	const backToMain = () =>{
		setCreateLink(true);
		setSearchStr({
			str: '',
			searchClick: !searchStr.searchClick
		})
	}
	
	return (
		<>
			<Nav>
				<NavTitle to="/home" onClick={backToMain}>
					<NavIcon />
					Doggopedia
				</NavTitle>
				<NavForm id='searchBar' onSubmit={onSearch}>
					<NavInput type = 'search' name='searchDog' id='searchDog' value={searchStr.str} onChange={(e)=>{setSearchStr({...searchStr, str: e.target.value})}} required/>
					<NavButton type = 'submit' >Search</NavButton>
				</NavForm>
				
				{createLink ? <CreateLink to="createBreed">Create Breed</CreateLink> : null}
			</Nav>
			<Outlet context={[searchStr, setSearchStr]}/>
		</>
	);
}
