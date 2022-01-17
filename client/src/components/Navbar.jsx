import React from "react";
import { Nav, NavTitle, NavIcon, NavForm, NavInput, NavButton, CreateLink, ErrorMsg } from './styles/Navbar.styled';
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { resetFil } from "../redux/actions/getDogsAction";
import { useDispatch } from "react-redux";

export function Navbar() {
	const dispatch = useDispatch()
	//state to determine if create breed link is shown depending on current pathname
	const [createLink, setCreateLink] = useState(true);

	//state to pass on search string to Home component in order to perform the dog search
	const [searchStr, setSearchStr] = useState({
		str: '',
		searchClick: false
	});
	//state to set errors on controlled search input
	const [error, setError] = useState('')
	//hook to 'see' the current pathname
	const location = useLocation();
	//hook to redirect to another pathname
	const navigate = useNavigate();

	//effect to change the createLink state depending on path to tell the component if the link needs to be shown or not
	useEffect(() => {
		if (window.location.pathname === "/home/createBreed") {
			setCreateLink(false);
		} else {setCreateLink(true)}
	}, [location]);

	//search submit handler/ it changes searchStr state to tell Home component to do the search
	const onSearch = (e) =>{
		e.preventDefault();
		if(!error){
			setSearchStr({
				...searchStr,
				searchClick: !searchStr.searchClick
			});
			navigate('/home'); //redirects to home page
		}
	}

	const onChangeHandler = (e) =>{
		let error = '';
		if(!/^(?![\s.]+$)[a-zA-Z\s]*$/gm.test(e.target.value)){
			error = 'Search is invalid. Only letters are valid'
		}
		setError(error)
		setSearchStr({...searchStr, str: e.target.value})
	}

	//when clicked on web title all the states are reset to default and filter options are also reset through action dispatch
	const backToMain = () =>{
		setCreateLink(true);
		setSearchStr({
			str: '',
			searchClick: !searchStr.searchClick
		})
		dispatch(resetFil())
	}
	
	return (
		<>
			<Nav>
				<NavTitle to="/home" onClick={backToMain} data-testid="title">
					<NavIcon  />
					Doggopedia
				</NavTitle>
				<NavForm id='searchBar' data-testid='form' onSubmit={onSearch}>
					<div>
						<NavInput  type = 'search' name='searchDog' id='searchDog' placeholder="Enter dog..." value={searchStr.str} onChange={onChangeHandler} required/>
						{error ? <ErrorMsg>{error}</ErrorMsg> : null}
					</div>
					<NavButton type = 'submit' >Search</NavButton>
				</NavForm>
				
				{createLink ? <CreateLink to="createBreed" data-testid='link'>Create Breed</CreateLink> : null}
			</Nav>
			{/* way to render all child components of Navbar. Context, in this case is used to pass a state to child component */}
			<Outlet context={[searchStr, setSearchStr]}/> 
		</>
	);
}
