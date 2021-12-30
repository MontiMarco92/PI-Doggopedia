import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterBy } from '../redux/actions/getDogsAction';
import { FilterWrapper, FilterDiv, Title, SubTitle, Select, Label, ResetButton } from './styles/Filter.styled';

const Filter = () => {
    const dispatch = useDispatch();
    const stateTemp = useSelector(state => state.getTemperaments);
    const {temperaments, loading, errorMsg} = stateTemp;
    const [filter, setFilter] = useState({
        temp: 'all',
        breedsToShow: 'all',
        sort: 'A-Z'
    });
    

     useEffect(()=>{
         dispatch(filterBy(filter))
     }, [filter.temp, filter.breedsToShow, filter.sort])
   

    const tempChangeHandler =(e)=>{
        setFilter({...filter, temp: e.target.value})
        
    }
   
    const radioChangeHandler =(e)=>{
        
        setFilter({
            ...filter, breedsToShow: e.target.value
        })
        
    }
    
    const sortChangeHandler =(e)=>{
        setFilter({
            ...filter, sort: e.target.value
        })
    }
    
    const resetFilter =()=>{
        setFilter({
            temp: 'all',
            breedsToShow: 'all',
            sort: 'A-Z'
        });
    }
    

   
    const showDataTempMenu = () =>{
        if(loading){
            return <span>Loading...</span>
        }else if(temperaments.length>0){
            return (
                <Select onChange={tempChangeHandler} value={filter.temp}>
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
                        <input type='radio' id='all' name='breeds' value='all' checked={filter.breedsToShow === 'all'} onChange={radioChangeHandler}/>
                        <span>All</span>
                    </Label>
                    <Label>
                        <input type='radio' id='existing' name='breeds' value='existing' checked={filter.breedsToShow === 'existing'} onChange={radioChangeHandler}/>
                        <span>Existing</span>
                    </Label>
                    <Label>
                        <input type='radio' id='created' name='breeds' value='created' checked={filter.breedsToShow === 'created'} onChange={radioChangeHandler}/>
                        <span>Created by User</span>
                    </Label>
            </FilterDiv>
            
            <FilterDiv>
                <Title>Sort by:</Title>
                <Select onChange={sortChangeHandler} value={filter.sort}>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                    <option value='wt+-'>Weight (+/-)</option>
                    <option value='wt-+'>Weight (-/+)</option>
                </Select>
                <ResetButton name='resetFilters' onClick={resetFilter} >Reset filters</ResetButton>
            </FilterDiv>
        </FilterWrapper>
    )
};

export default Filter
