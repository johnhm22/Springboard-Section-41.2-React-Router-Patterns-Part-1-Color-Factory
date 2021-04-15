import React from 'react';
import { useParams } from "react-router-dom";


const ColorDetails = () => {
    
    const { color } = useParams();
 

    return(
        <>
        <h1>This is {color}</h1>
        <h1>isn't it</h1>
        <h1>beautiful!!</h1>
        </>
    )
}

export default ColorDetails