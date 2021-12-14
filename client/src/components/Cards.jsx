import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Cards () {

    const dogs = useSelector((state) => state.getDogs.dogs);
    const filteredDogs = useSelector(state => state.filterDogs.filteredDogs);
    console.log(filteredDogs);
    
    const renderObject = filteredDogs.length>0 ? filteredDogs : dogs;

    console.log(renderObject);
    const renderList = renderObject.map(e =>{
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