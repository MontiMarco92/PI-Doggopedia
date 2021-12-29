import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogDetail } from '../redux/actions/getDetailAction';
import { Alert } from './Alert';
import { DetailWrapper, Card, ImgContent, Img, Content, LoadingMsg, ErrorMsg, DeleteBtn, MainContent } from "./styles/DetailCard.styled";

export function DetailCard (){
    const params = useParams();
    const dispatch = useDispatch();
    const state = useSelector((state)=> state.getDogDetail)
    const {id, img, name, temperament, weight, height, lifeSpan} = state.dogDetail;

    const [showAlert, setShowAlert] = useState(false)
    
    useEffect(()=>{
        dispatch(getDogDetail(params.breedId))
    }, []);

    const showData = () =>{
		if(state.loading){ return <LoadingMsg>Loading...</LoadingMsg>}
        
        else if(Object.keys(state.dogDetail).length >0) {
			return (
                <Card>
                    <MainContent>
                        <ImgContent>
                            <Img src ={img} alt='Dog'/>
                        </ImgContent>
                        <Content>
                            <h2>{name}</h2>
                            <div>
                                <h4>Temperaments:</h4>
                                <p>{temperament}</p>
                            </div>
                            <h4>Weight: <span>{weight} Kg</span></h4>
                            <h4>Height: <span>{height} cm</span></h4>
                            <h4>Lifespan: <span>{lifeSpan} years</span></h4> 
                        </Content>
                    </MainContent>
                
                    <div>
                    {typeof(id) === 'string' ? <DeleteBtn onClick={()=> setShowAlert(true)}>Remove</DeleteBtn> : null}
                    </div>
                    {showAlert ? <Alert setShow={setShowAlert} type={'deleteAlert'}></Alert> : null}
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