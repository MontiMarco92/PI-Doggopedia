import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, clearDogs } from "../redux/actions/getDogsAction";
import { getTemperaments } from '../redux/actions/getTemperamentsAction';
import { Cards } from './Cards';
import Filter from './Filter';

export function Home() {
	const dispatch = useDispatch();
	const state = useSelector(state => state.getDogs);

	useEffect(() => {
		dispatch(getDogs());
		dispatch(getTemperaments());
	}, []);
	
	

	const showData = () =>{
		if (state.loading) {
			return <span>Loading...</span>
		}
		else if(state.dogs.length>0 || state.filteredDogs.length>0) {
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
