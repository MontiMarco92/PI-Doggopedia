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
				<NavTitle to="/home" onClick={backToMain} data-testid="title">
					{/* <NavIcon  /> React-icon*/}
					Doggopedia
				</NavTitle>
				<NavForm id='searchBar' data-testid='form' onSubmit={onSearch}>
					<NavInput  type = 'search' name='searchDog' id='searchDog' placeholder="Enter dog..." value={searchStr.str} onChange={(e)=>{setSearchStr({...searchStr, str: e.target.value})}} required/>
					<NavButton type = 'submit' >Search</NavButton>
				</NavForm>
				
				{createLink ? <CreateLink to="createBreed" data-testid='link'>Create Breed</CreateLink> : null}
			</Nav>
			<Outlet context={[searchStr, setSearchStr]}/>
		</>
	);
}
