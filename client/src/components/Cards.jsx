import React from "react";
import { Card, CardLink, Content, Img, ImgContent } from "./styles/Card.styled";

export function Cards (x) {
    const {currentDogs} = x

    const renderList = currentDogs.map(e =>{
        const {id, img, name, temperament, weight} = e;
        return (
            <Card key = {id}> 
                <CardLink to={`dog/${id}`} >
                    <ImgContent>
                        <Img src ={img} alt='Dog'/>
                    </ImgContent>
                    <Content>
                        <h2>{name}</h2>
                        <div>
                            <h5>Temperaments:</h5>
                            <p>{temperament}</p>
                        </div>
                        <h4>Weight: {weight} Kg</h4> 
                    </Content>   
                </CardLink>
            </Card>
        )
    })
    return <>{renderList}</>
}