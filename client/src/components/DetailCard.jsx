import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogDetail } from '../redux/actions/getDetailAction';
import { Alert } from './Alert';
import { DetailWrapper, Card, ImgContent, Img, Content, LoadingMsg, ErrorMsg, DeleteBtn, MainContent } from "./styles/DetailCard.styled";

function DetailCard ({state, getDogDetail}){
    //hook to get the params values from pathname URL
    const params = useParams();
    
    // using hooks (no need to use props):
    // const dispatch = useDispatch();
    // const state = useSelector((state)=> state.getDogDetail)
    const {id, img, name, temperament, weight, height, lifeSpan} = state.dogDetail;
    

    //local state to determine if alert should be shown or not
    const [showAlert, setShowAlert] = useState(false)
    
    //effect to dispatch getdog detail action with the current param values
    useEffect(()=>{
        //using hook
        // dispatch(getDogDetail(params.breedId))
        
        //using mapDispatchToProps
        getDogDetail(params.breedId);
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

                    {/* if the dog shown was created by the user a delete option btn is shown with its respective alert */}
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

//using mapStateToProps and mapDispatchToProps as an alternative to hooks. These functions allow us to brin the store state and to dispatch actions
//passing both as props to de component
const mapStateToProps = (state) =>{
    return {
        state: state.getDogDetail
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getDogDetail: (x) => {dispatch(getDogDetail(x))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailCard);