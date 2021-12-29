import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getTemperaments } from '../redux/actions/getTemperamentsAction';
import { Form, FormWrapper, Container, Label, Input, Info, Button, ButtonDiv, ErrorMsg, Select, Dropdown, SelectedItems, TempBtn, TempSection } from "./styles/CreateBreed.styled";
import { Alert } from './Alert';

const baseUrl = process.env.REACT_APP_BASE_URL;

export function CreateBreed (){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {temperaments} = useSelector(state => state.getTemperaments)
    const [inputs, setInputs] = useState({
        name: '',
        img: '',
        height: '',
        weight: '',
        lifeSpan: '',
        temperamentName: []
    })
    const [errors, setErrors] = useState('')

    const [showAlert, setShowAlert] = useState('');

    useEffect(()=>{
        if(temperaments.length === 0){
            dispatch(getTemperaments())
        } 
    }, [])

    const validate = (inputs) => {
        let errors = {};

        if(!inputs.name){ errors.name = 'Name is required'}
        else if(!/^(?![\s.]+$)[a-zA-Z\s]*$/gm.test(inputs.name)){
            errors.name = 'Name is invalid - Only letters are valid'
        }
        if(!inputs.weight){errors.weight = 'Weight is required'}
        else if(!/^([1-9]|[1-9][0-9])-{1}([1-9]|[1-9][0-9]|100)$/gm.test(inputs.weight) ){
            errors.weight = 'Weight is invalid - Valid format is 1-100'
        } else if(Number(inputs.weight.split('-')[0]) > Number(inputs.weight.split('-')[1])){
            errors.weight = 'Min value cannot be greater than max value'
        }
        if(!inputs.height){errors.height = 'Height is required'}
        else if(!/^([1-9]|[1-9]\d|1[0-4]\d|150)-{1}([1-9]|[1-9]\d|1[0-4]\d|150)$/gm.test(inputs.height)){
            errors.height = 'Height is invalid - Valid format is 1-150'
        } else if(Number(inputs.height.split('-')[0]) > Number(inputs.height.split('-')[1])){
            errors.height = 'Min value cannot be greater than max value'
        }
        if(!inputs.lifeSpan){errors.lifeSpan = 'Life span is required'}
        else if(!/^([1-9]|1\d|2[0-5])-{1}([1-9]|1\d|2[0-5])$/gm.test(inputs.lifeSpan)){
            errors.lifeSpan = 'Life span is invalid - Valid format is 1-25'
        }else if(Number(inputs.lifeSpan.split('-')[0]) > Number(inputs.lifeSpan.split('-')[1])){
            errors.lifeSpan = 'Min value cannot be greater than max value'
        }
        if(inputs.img && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm.test(inputs.img)){
            errors.img = 'Please enter a valud URL'
        }
        return errors;
   }

    const onChangeHandler = (e) =>{
        if(e.target.name === 'temperamentsId'){
            setInputs({
                ...inputs,
                temperamentName: [...inputs.temperamentName, e.target.value]
            })  
        } else{
            setInputs({
                ...inputs,
                [e.target.name] : e.target.value,
            })
        }

        setErrors(validate({
            ...inputs,
            [e.target.name] : e.target.value
        }))
    }


    const removeTemperament = (e)=>{
        setInputs({
            ...inputs,
            temperamentName: [...inputs.temperamentName.filter(x => x !== e.target.value)]
        })
    }

    const onSubmitHandler = async (e)=>{
        e.preventDefault()
        if(errors && Object.keys(errors).length > 0){
            return setShowAlert('errorSubmit')}
        
        else{
            try{
                await axios.post(`${baseUrl}/dog`, inputs);
                
                setInputs({
                    name: '',
                    img: '',
                    height: '',
                    weight: '',
                    lifeSpan: '',
                    temperamentName: []
                })
                navigate('/home'); 

            } catch(err){setShowAlert('postError')}
        }
        
    }


    return(
        <FormWrapper>
            <Container>
                <h1>Create your own breed</h1>
                <Form onSubmit={onSubmitHandler}>
                    <Info>
                        <Label htmlFor='name'>Name:</Label>
                        <Input type="text" id='name' placeholder="Enter a name" required name='name' value={inputs.name} onChange={onChangeHandler} />
                        {!errors.name ? null : <ErrorMsg>{errors.name}</ErrorMsg>}
                    </Info>
                    
                    <Info>
                        <Label htmlFor='img'>Image (optional):</Label>
                        <Input type="text" id='img' placeholder="Enter a valid URL" name='img' value={inputs.img} onChange={onChangeHandler}/>
                        {!errors.img ? null : <ErrorMsg>{errors.img}</ErrorMsg>}
                    </Info>
                   
                    <Info>
                        <Label htmlFor='height'>Height (cm):</Label>
                        <Input type="text" id='height' placeholder="Enter height (min - max)"  required name='height' value={inputs.height} onChange={onChangeHandler}/>
                        {!errors.height ? null : <ErrorMsg>{errors.height}</ErrorMsg>}
                    </Info>
                    
                    <Info>
                        <Label htmlFor='weight'>Weight (Kg):</Label>
                        <Input type="text" id='weight' placeholder="Enter weight (min - max)" required name='weight' value={inputs.weight} onChange={onChangeHandler}/>
                        {!errors.weight ? null : <ErrorMsg>{errors.weight}</ErrorMsg>}
                    </Info>
                    
                    <Info>
                        <Label htmlFor='lifeSpan'>Life span (years):</Label>
                        <Input type="text" id='lifeSpan' placeholder="Enter life span (min - max)" required name='lifeSpan' value={inputs.lifeSpan} onChange={onChangeHandler}/>
                        {!errors.lifeSpan ? null : <ErrorMsg>{errors.lifeSpan}</ErrorMsg>}
                    </Info>
                    
                    <TempSection>
                        <Label>Add Temperaments:</Label>
                        <Dropdown>
                            <Select name="temperamentsId" onChange={onChangeHandler} >
                                <option>None</option>
                                {temperaments.map(e=> <option key={e.id} value={e.name}>{e.name}</option>)}
                            </Select>
                            <SelectedItems>
                                {inputs.temperamentName.map(e => <TempBtn key={e} value={e} onClick={removeTemperament}>{e}</TempBtn>)}
                            </SelectedItems>
                            
                        </Dropdown>
                    </TempSection>
                    
                    <ButtonDiv>
                        <Button type='submit' value='Create!'/>
                    </ButtonDiv>
                    {showAlert === 'errorSubmit' 
                    ? <Alert setShow = {setShowAlert} type={'errorAlert'}>
                        <h2>Submit Error</h2>
                        <p>The form cannot be submitted unless it has valid information</p>
                        </Alert> 
                    : showAlert === 'postError' 
                    ? <Alert setShow = {setShowAlert} type={'errorAlert'}>
                        <h2>Server Post Error</h2>
                        <p>The breed could not be added</p>
                        </Alert>
                    : null}
                    
                </Form>
            </Container>
        </FormWrapper>
    )
}