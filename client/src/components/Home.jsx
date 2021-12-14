import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, clearDogs } from "../redux/actions/getDogsAction";
import { Cards } from './Cards';
import Filter from './Filter';

export function Home() {
	const dispatch = useDispatch();
	const state = useSelector(state => state.getDogs);
	const filterState = useSelector(state => state.filterDogs);

	useEffect(() => {
		dispatch(getDogs());

		//ver si cleanup hace falta
		// return () =>{
		// 	dispatch(clearDogs());
		// }
	}, [filterState]);
	
	const showData = () =>{
		if (state.loading) {
			return <span>Loading...</span>
		}
		else if(state.dogs.length>0 || filterState.filteredDogs.length>0) {
			return <Cards />
		}
		else {
			return <span>{state.errorMsg}</span>
		}
	}
	
	return (
		<>
			<div><Filter/></div>
			{showData()}
			
		</>
	)
}
