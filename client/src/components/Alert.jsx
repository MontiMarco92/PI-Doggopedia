import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AlertBox, AlertWrapper, ErrorMsg } from "./styles/Alert.styled";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const Alert = (props) =>{
    const {setShow, type} = props;
    const params = useParams();
    const navigate = useNavigate();
    const [deleteError, setdeleteError] = useState('');

    const showData = () =>{
        if(type === 'errorAlert'){
            return (<AlertBox>
            {/* <h2>Submit Error</h2>
            <p>The form cannot be submitted unless it has valid information</p> */}
            {props.children}
    
            <button onClick={() => {setShow(false)}}>Close</button>
            </AlertBox>
            )}
        if(type === 'deleteAlert'){
            return (
                <AlertBox>
                <h2>Poor Puppy!</h2>
                <p>Are you sure you want to delete this dog?</p>

                <button onClick={() => {setShow(false)}}>No way</button>
                <button onClick={deleteHandler}>Yeah</button>
                {deleteError ? <ErrorMsg>{deleteError}</ErrorMsg> : null}
                </AlertBox>
            )
        }
    }
   
    const deleteHandler = async ()=>{
        try{
            await axios.delete(`${baseUrl}/delete/${params.breedId}`)
            navigate('/home');

        }catch(err){
            setdeleteError('Unable to delete dog');
        }
    }

    return (
        <AlertWrapper>
           {showData()};
        </AlertWrapper>
    )
}