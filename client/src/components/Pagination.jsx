import React from 'react'
import { useSelector } from 'react-redux';
import { Button, Item, List, PaginationWrapper } from './styles/Pagination.styled';

export const Pagination = ({changePage, totalPages, currentPage}) => {
    //store state brought for use
    const state = useSelector(state => state.getDogs)
    
    const pageNumbers = [];
    //push all totalPages (received by props from home component) sequential numbers into pageNumbers array
    for(let i = 1; i <= totalPages; i++){
        pageNumbers.push(i);
    }
    let arr = [];
   
    //conditional statement to determine which page numers should be shown in pagination bar
    if(currentPage < 3){ arr = pageNumbers.slice(0, 5)}
    else if (currentPage> totalPages-3) { arr = pageNumbers.slice(totalPages -5, totalPages)}
    else {arr = pageNumbers.slice(currentPage-3, currentPage + 2)};
     
    
    const showData = () =>{
        return state.loading || state.errorMsg !== ''
            ? null
            : <PaginationWrapper>
                <List>
                    <Item><Button value='<<' onClick={(e) => changePage(e.target.value)}>{'<<'}</Button></Item>
                    <Item><Button value='<' onClick={(e) => changePage(e.target.value)}>{'<'}</Button></Item>
                    {arr.map(elem =>{
                        // add and remove custom classname based on current page number to add styling to current button
                        let clickedClass = currentPage === elem ? 'clicked' : null
                        return <Item key={elem}><Button className={clickedClass} onClick={() => changePage(elem)}>{elem}</Button></Item>
                    })}
                    <Item><Button value='>' onClick={(e) => changePage(e.target.value)}>{'>'}</Button></Item>
                    <Item><Button value='>>' onClick={(e) => changePage(e.target.value)}>{'>>'}</Button></Item>
                </List>
            </PaginationWrapper>
    }

    return (
        showData()
    )
}
