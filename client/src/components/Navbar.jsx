import React from "react";
import { Nav, NavTitle, NavIcon, NavForm, NavInput, NavButton, CreateLink } from './styles/Navbar.styled';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getDogs } from "../redux/actions/getDogsAction";

export function Navbar() {
	const [createLink, setCreateLink] = useState(true);
	const [searchStr, setSearchStr] = useState('');
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		if (window.location.pathname === "/home/createBreed") {
			setCreateLink(false);
		}
	}, [location]);

	const onSearch = (e) =>{
		e.preventDefault();
		
		dispatch(getDogs(searchStr))
		setSearchStr('');
	//solucionar redireccionamiento de pagina cuando se hace la busqueda desde ruta 'createBreed'	
	}

	const backToMain = () =>{
		setCreateLink(true);
	}
	return (
		<>
			<Nav>
				<NavTitle to="/home" onClick={backToMain}>
					<NavIcon />
					Doggopedia
				</NavTitle>
				<NavForm id='searchBar' onSubmit={onSearch}>
					<NavInput type = 'search' name='searchDog' id='searchDog' value={searchStr} onChange={(e)=>{setSearchStr(e.target.value)}} required/>
					<NavButton type = 'submit' >Search</NavButton>
				</NavForm>
				
				{createLink ? <CreateLink to="createBreed">Create Breed</CreateLink> : null}
			</Nav>
			<Outlet />
		</>
	);
}
