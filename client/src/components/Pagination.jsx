import React from 'react'
import { useSelector } from 'react-redux';
import { dogsPerPage } from './Home';
import { Button, Item, List, PaginationWrapper } from './styles/Pagination.styled';

export const Pagination = ({changePage, totalPages, currentPage}) => {
    const state = useSelector(state => state.getDogs)
    const pageNumbers = [];

    for(let i = 1; i <= totalPages; i++){
        pageNumbers.push(i);
    }
    
    let arr = [];
   
   

        if(currentPage < 3){ arr = pageNumbers.slice(0, 5)}
        else if (currentPage> totalPages-3) { arr = pageNumbers.slice(totalPages -5, totalPages)}
        else {arr = pageNumbers.slice(currentPage-3, currentPage + 2)};
        
    

    const showData = () =>{
        return state.loading || state.errorMsg !== ''
            ? null
            : <PaginationWrapper>
                <List>
                    <Item><Button value='<' onClick={(e) => changePage(e.target.value)}>{'<'}</Button></Item>
                    <Item><Button value='start' onClick={(e) => changePage(e.target.value)}>{'Start'}</Button></Item>
                    
                    {arr.map(e =>{
                        return <Item key={e}><Button onClick={() => changePage(e)}>{e}</Button></Item>
                    })}
                    <Item><Button value='end' onClick={(e) => changePage(e.target.value)}>{'End'}</Button></Item>
                    <Item><Button value='>' onClick={(e) => changePage(e.target.value)}>{'>'}</Button></Item>
                </List>
            </PaginationWrapper>
    }


    return (
        showData()
    )
}
