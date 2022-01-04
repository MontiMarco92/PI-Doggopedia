import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterBy } from '../redux/actions/getDogsAction';
import { FilterWrapper, FilterDiv, Title, SubTitle, Select, Label, ResetButton } from './styles/Filter.styled';

const Filter = () => {
    const dispatch = useDispatch();
    // hook to bring data from redux store
    const stateTemp = useSelector(state => state.getTemperaments);
    const {temperaments, loading, errorMsg} = stateTemp;
    const {resetFil} = useSelector(state => state.getDogs);
    //local state to set filter and sorting options
    const [filter, setFilter] = useState({
        temp: 'all',
        breedsToShow: 'all',
        sort: 'A-Z'
    });
    
    //effect to call reset filter handler depending on redux store state (it's called when web title is clicked)
    useEffect(()=>{
        resetFilter();
    }, [resetFil])

    //effect to dispatch filter action when local state is modified
     useEffect(()=>{
         dispatch(filterBy(filter))
     }, [filter.temp, filter.breedsToShow, filter.sort])
   
    // temperament change handler to set the local state temperament based on user select
    const tempChangeHandler =(e)=>{
        setFilter({...filter, temp: e.target.value}) 
    }
    
    // radio btn handler to set the local state to which dogs should be shown
    const radioChangeHandler =(e)=>{  
        setFilter({
            ...filter, breedsToShow: e.target.value
        })
    }
    // sort change handler to set the local state to re order the shown dogs based on user select
    const sortChangeHandler =(e)=>{
        setFilter({
            ...filter, sort: e.target.value
        })
    }
    
    //reset filter function to reset local state to default values
    const resetFilter =()=>{
        setFilter({
            temp: 'all',
            breedsToShow: 'all',
            sort: 'A-Z'
        });
    }
    
    // show data function for temperaments dropdown menu for conditional rendering depending store state
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
