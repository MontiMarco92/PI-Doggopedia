import React from 'react'
import { useSelector } from 'react-redux';
import { dogsPerPage } from './Home';

export const Pagination = ({changePage, totalPages}) => {
    const state = useSelector(state => state.getDogs)
    const pageNumbers = [];

    for(let i = 1; i <= totalPages; i++){
        pageNumbers.push(i);
    }


    return (
        <div>
            <li><button value='<' onClick={(e) => changePage(e.target.value)}>{'<'}</button></li>
            {pageNumbers.map(e =>{
                return <li key={e}><button onClick={() => changePage(e)}>{e}</button></li>
            })}
            <li><button value='>' onClick={(e) => changePage(e.target.value)}>{'>'}</button></li>

        </div>
    )
}
