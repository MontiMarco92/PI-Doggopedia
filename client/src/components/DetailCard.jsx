import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogDetail } from '../redux/actions/getDetailAction';
import { DetailWrapper, Card, ImgContent, Img, Content, LoadingMsg, ErrorMsg } from "./styles/DetailCard.styled";

export function DetailCard (){
    const params = useParams();
    const dispatch = useDispatch();
    const state = useSelector((state)=> state.getDogDetail)
    const {id, img, name, temperament, weight, height, lifeSpan} = state.dogDetail;
    
    useEffect(()=>{
        dispatch(getDogDetail(params.breedId))
    }, []);

    const showData = () =>{
		if(state.loading){ return <LoadingMsg>Loading...</LoadingMsg>}
        
        else if(state.dogDetail !== {}) {
			return (
                <Card>
                    <ImgContent>
                        <Img src ={img} alt='Dog'/>
                    </ImgContent>
                    <Content>
                        <h2>{name}</h2>
                        <div>
                            <h4>Temperaments:</h4>
                            <p>{temperament}</p>
                        </div>
                        <h4>Weight: {weight} Kg</h4>
                        <h4>Height: {height} cm</h4>
                        <h4>Lifespan: {lifeSpan}</h4> 
                    </Content>
                </Card>
            )   
		}
		else  {
			return <ErrorMsg>{state.errorMsg}</ErrorMsg>
		}
	}
    return (
        <DetailWrapper>
            {showData()}
        </DetailWrapper>
    )
        
    
}