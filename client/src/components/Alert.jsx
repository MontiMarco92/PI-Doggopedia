import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AlertBox, AlertWrapper, ErrorMsg } from "./styles/Alert.styled";
import { baseUrl } from "../redux/variables";

export const Alert = (props) =>{
    //setshow state function and type of alert passed through props
    const {setShow, type} = props;
    //hoow to get params values from URL
    const params = useParams();
    const navigate = useNavigate();
    //local state for delete error
    const [deleteError, setdeleteError] = useState('');

    //conditional rendering of alert component depending on type of alert that is needed
    const showData = () =>{
        
        if(type === 'errorAlert'){
            return (<AlertBox>
            
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
    //delete function to remove selected dog from DB
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