import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../redux/actions/getDogsAction";
import { getTemperaments } from '../redux/actions/getTemperamentsAction';
import { Cards } from './Cards';
import Filter from './Filter';
import { Pagination } from "./Pagination";
import { HomeWrapper, Main } from "./styles/Home.styled";

export const dogsPerPage = 8;

export function Home() {
	const dispatch = useDispatch();
	const state = useSelector(state => state.getDogs);
    const totalPages = Math.ceil(state.filteredDogs.length / dogsPerPage);

	const [currentPage, setCurrentPage] = useState(1);

	
	useEffect(() => {
		dispatch(getDogs());
		dispatch(getTemperaments());
	}, []);
	
	const indexLastDog = currentPage * dogsPerPage;
	const indexFirstDog = indexLastDog - dogsPerPage;
	const currentDogs = state.filteredDogs.slice(indexFirstDog, indexLastDog);
	
	const changePage = (pageNumber) =>{
		if(pageNumber === '<') {return currentPage > 1 ? setCurrentPage(currentPage-1) : null}
		else if(pageNumber === '>'){return currentPage < totalPages ? setCurrentPage(currentPage+1) : null}
		else {setCurrentPage(pageNumber)}
	}

	const showData = () =>{
		if (state.loading) {
			return <span>Loading...</span>
		}
		else if(state.filteredDogs.length>0) {
			return <Cards currentDogs={currentDogs}/>
		}
		else {
			return <span>{state.errorMsg}</span>
		}
	}
	
	return (
		<>
			
			<HomeWrapper>
				<Filter/>
				<Main>
					{showData()}
					<Pagination changePage={changePage} totalPages={totalPages}/>
				</Main>
			</HomeWrapper>
		</>
	)
}
