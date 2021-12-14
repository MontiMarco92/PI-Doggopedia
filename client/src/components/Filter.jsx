import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments } from '../redux/actions/getTemperamentsAction';
import { filterByTemp } from '../redux/actions/filterSortActions';

const Filter = () => {
    const dispatch = useDispatch();
    const temperamentState = useSelector(state => state.getTemperaments);
    const {temperaments, loading, errorMsg} = temperamentState;
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');
    
    useEffect(()=>{
        dispatch(getTemperaments());
        
    }, [])
    
    useEffect(()=>{
        dispatch(filterByTemp(filter));
    },[filter])


    const showData = () =>{
        if(loading){
            return <span>Loading...</span>
        }else if(temperaments.length>0){
            return (
                <select onChange={e => setFilter(e.target.value)} defaultValue=''>
                    <option disabled value=''>None</option>
                    {temperaments.map(e => <option key={e.id} value={e.name}>{e.name}</option>)}
                </select> 
            )

        }else if(errorMsg !== ''){return <span>{errorMsg}</span>}
    }
    return (
        <>
            <h3>Filter by</h3>
            {showData()}
        
        </>
    )
}

export default Filter
