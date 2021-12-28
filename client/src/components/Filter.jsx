import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterByExistence, filterByTemp, resetFilters, sortBy } from '../redux/actions/getDogsAction';
import { FilterWrapper, FilterDiv, Title, SubTitle, Select, Label, ResetButton } from './styles/Filter.styled';

const Filter = () => {
    const dispatch = useDispatch();
    const temperamentState = useSelector(state => state.getTemperaments);
    const {temperaments, loading, errorMsg} = temperamentState;
    const [filter, setFilter] = useState({
        temp: 'all',
        breedsToShow: 'all',
    });
    const [sort, setSort] = useState('random');
    const [inputs, setInputs] = useState({
        selectTemp: 'all',
        radio: 'all',
        selectSort: 'A-Z'
    })
  


    useEffect(()=>{
        dispatch(filterByTemp(filter));
    },[filter.temp])

    useEffect(()=>{
        dispatch(filterByExistence(filter));
    },[filter.breedsToShow])
    
    useEffect(()=>{
        dispatch(sortBy(sort));
    },[sort])
   
   

    const tempChangeHandler =(e)=>{
        setFilter({...filter, temp: e.target.value})
        setInputs({...inputs, selectTemp: e.target.value})
    }
   
    const radioChangeHandler =(e)=>{
        setFilter({...filter, breedsToShow: e.target.value})
        setInputs({...inputs, radio: e.target.value})
    }
    
    const sortChangeHandler =(e)=>{
        setSort(e.target.value);
        setInputs({...inputs, selectSort: e.target.value})
    }
    
    const resetFilter =()=>{
        dispatch(resetFilters())
        setInputs({ 
            selectTemp: 'all',
            radio: 'all',
            selectSort: 'A-Z'
        })
    }
    

   

    const showDataTempMenu = () =>{
        if(loading){
            return <span>Loading...</span>
        }else if(temperaments.length>0){
            return (
                <Select onChange={tempChangeHandler} value={inputs.selectTemp}>
                    <option value='all'>All</option>
                    {temperaments.map(e => <option key={e.id} value={e.name}>{e.name}</option>)}
                </Select> 
            )
        }else if(errorMsg !== ''){return <span>{errorMsg}</span>}
    }



    return (
        <FilterWrapper >
            
            <FilterDiv>
                <Title>Filter by:</Title>

                <SubTitle>Temperament</SubTitle>
                {showDataTempMenu()}
            
                <SubTitle>Existence</SubTitle>
                    <Label>
                        <input type='radio' id='all' name='breeds' value='all' checked={inputs.radio === 'all'} onChange={radioChangeHandler}/>
                        <span>All</span>
                    </Label>
                    <Label>
                        <input type='radio' id='existing' name='breeds' value='existing' checked={inputs.radio === 'existing'} onChange={radioChangeHandler}/>
                        <span>Existing</span>
                    </Label>
                    <Label>
                        <input type='radio' id='created' name='breeds' value='created' checked={inputs.radio === 'created'} onChange={radioChangeHandler}/>
                        <span>Created by User</span>
                    </Label>
            </FilterDiv>
            
            <FilterDiv>
                <Title>Sort by:</Title>
                <Select onChange={sortChangeHandler} value={inputs.selectSort}>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                    <option value='wt+-'>Weight (+/-)</option>
                    <option value='wt-+'>Weight (-/+)</option>
                </Select>
                <ResetButton name='resetFilters' onClick={resetFilter} >Reset filters</ResetButton>
            </FilterDiv>
        </FilterWrapper>
    )
}

export default Filter
