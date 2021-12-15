import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Cards () {

    const state = useSelector(state => state.getDogs);
    const {filteredDogs} = state;
    

    const renderList = filteredDogs.map(e =>{
        const {id, img, name, temperament, weight} = e;
        return (
            <div className="card" key = {id}>
                <div className='card-body'>
                    <Link to={`dog/${id}`} >
                        <img src ={img} alt='Dog'/>
                        <h2>{name}</h2>
                        <h5>Temperaments: {temperament}</h5>
                        <h4>Weight: {weight} Kg</h4> 
                    </Link>
                </div>
            </div>
        )
    })
    return <>{renderList}</>
}