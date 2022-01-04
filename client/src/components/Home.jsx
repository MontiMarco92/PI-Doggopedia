import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { getDogs } from "../redux/actions/getDogsAction";
import { getTemperaments } from '../redux/actions/getTemperamentsAction';
import { Cards } from './Cards';
import Filter from './Filter';
import { Pagination } from "./Pagination";
import { CardsWrapper } from "./styles/Card.styled";
import { ErrorMsg, HomeWrapper, LoadingMsg, Main } from "./styles/Home.styled";
import { dogsPerPage } from "../redux/variables";


export function Home() {
	const dispatch = useDispatch();
	// Nav state passed through Outlet context in order to dispatch getDog action depending on this state.
	const [searchStr, setSearchStr] = useOutletContext();
	
	//states of the Redux store are brought in order to use them
	const stateDogs = useSelector(state => state.getDogs);
	const stateTemp = useSelector(state => state.getTemperaments);
    
	//totalpages calculated based on the number of dogs received - local state to set the current page number
	const totalPages = Math.ceil(stateDogs.filteredDogs.length / dogsPerPage);
	const [currentPage, setCurrentPage] = useState(1);

	//effect to dispatch get dog action depending on state passed from Nav, reset searchStr and dispatch getTemperaments if the array is empty
	useEffect(() => {
		
		dispatch(getDogs(searchStr.str));
		setSearchStr({
			...searchStr,
			str: ''
		});
		if(stateTemp.temperaments.length === 0){
			dispatch(getTemperaments());
		}
		
	}, [searchStr.searchClick]);
	
	//calculate index of last and first dog shown per page
	const indexLastDog = currentPage * dogsPerPage;
	const indexFirstDog = indexLastDog - dogsPerPage;
	//filter dogs received from the store to show only 8 per page
	const currentDogs = stateDogs.filteredDogs.slice(indexFirstDog, indexLastDog);
	
	//change page handler that sets current page number depending on button selected in pagination component
	const changePage = (pageNumber) =>{
		if(pageNumber === '<') {return currentPage > 1 ? setCurrentPage(currentPage-1) : null}
		else if(pageNumber === 'start') {setCurrentPage(1)}
		else if(pageNumber === 'end') {setCurrentPage(totalPages)}
		else if(pageNumber === '>'){return currentPage < totalPages ? setCurrentPage(currentPage+1) : null}
		else {setCurrentPage(pageNumber)}
	}

	//function for conditional rendering depending on redux current state
	const showData = () =>{
		if (stateDogs.loading) {
			return <LoadingMsg>Loading...</LoadingMsg>
		}
		else if(stateDogs.filteredDogs.length>0) {
			return (
				<CardsWrapper>
					<Cards currentDogs={currentDogs}/>
				</CardsWrapper>
			)}
		else {
			return <ErrorMsg>{stateDogs.errorMsg}</ErrorMsg>
		}
	}
	
	return (
		<>
			<HomeWrapper>
				<Filter/>
				<Main>
					{showData()}
					<Pagination changePage={changePage} totalPages={totalPages} currentPage={currentPage}/>
				</Main>
			</HomeWrapper>
		</>
	)
}
