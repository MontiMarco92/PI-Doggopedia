import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogDetail } from '../redux/actions/getDetailAction';

export function DetailCard (){
    const params = useParams();
    const dispatch = useDispatch();
    const state = useSelector((state)=> state.getDogDetail)
    const {id, img, name, temperament, weight, height, lifeSpan} = state.dogDetail;
    
    useEffect(()=>{
        dispatch(getDogDetail(params.breedId))
    }, []);

    const showData = () =>{
		if(state.loading){ return <span>Loading...</span>}
        
        else if(state.dogDetail !== {}) {
			return (
                <div className="card" key = {id}>
                <div className='card-body'>
                    <img src ={img} alt='Dog'/>
                    <h2>{name}</h2>
                    <h5>Temperaments: {temperament}</h5>
                    <h4>Weight: {weight} Kg</h4>
                    <h4>Height: {height} cm</h4>
                    <h4>Lifespan: {lifeSpan}</h4> 
                </div>
                </div>
            )   
		}
		else  {
			return <span>{state.errorMsg}</span>
		}
	}
    return (
        <div>
            {showData()}
        </div>
    )
        
    
}