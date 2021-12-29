import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../redux/actions/getDogsAction";
import { getTemperaments } from '../redux/actions/getTemperamentsAction';
import { Cards } from './Cards';
import Filter from './Filter';
import { Pagination } from "./Pagination";
import { CardsWrapper } from "./styles/Card.styled";
import { ErrorMsg, HomeWrapper, LoadingMsg, Main } from "./styles/Home.styled";

export const dogsPerPage = 8;

export function Home() {
	const dispatch = useDispatch();
	const stateDogs = useSelector(state => state.getDogs);
	const stateTemp = useSelector(state => state.getTemperaments);
    const totalPages = Math.ceil(stateDogs.filteredDogs.length / dogsPerPage);

	const [currentPage, setCurrentPage] = useState(1);

	
	useEffect(() => {
		
		dispatch(getDogs());
		if(stateTemp.temperaments.length === 0){
			dispatch(getTemperaments());
		}
		
	}, [dispatch]);
	
	const indexLastDog = currentPage * dogsPerPage;
	const indexFirstDog = indexLastDog - dogsPerPage;
	const currentDogs = stateDogs.filteredDogs.slice(indexFirstDog, indexLastDog);
	
	const changePage = (pageNumber) =>{
		if(pageNumber === '<') {return currentPage > 1 ? setCurrentPage(currentPage-1) : null}
		else if(pageNumber === 'start') {setCurrentPage(1)}
		else if(pageNumber === 'end') {setCurrentPage(totalPages)}
		else if(pageNumber === '>'){return currentPage < totalPages ? setCurrentPage(currentPage+1) : null}
		else {setCurrentPage(pageNumber)}
	}

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
