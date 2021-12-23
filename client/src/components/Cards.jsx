import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Img } from "./styles/Card.styled";

export function Cards (x) {
    const {currentDogs} = x
    const state = useSelector(state => state.getDogs);
    const {filteredDogs} = state;


    const renderList = currentDogs.map(e =>{
        const {id, img, name, temperament, weight} = e;
        return (
            <div className="card" key = {id}>
                
                <Card to={`dog/${id}`} >
                    <Img src ={img} alt='Dog'/>
                    <div>
                        <h2>{name}</h2>
                        <h5>Temperaments: {temperament}</h5>
                        <h4>Weight: {weight} Kg</h4> 
                    </div>
                    
                    
                </Card>
                
            </div>
        )
    })
    return <>{renderList}</>
}