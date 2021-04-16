import React from 'react';
import {Link, useParams} from 'react-router-dom';
import './ColorDetails.css';


const ColorDetails = () => {

  const params = useParams();
    console.log("params: ", params);


  return (
    <>
    <div className='Color' style={{backgroundColor: params.color}}>
    <p>This is {params.color}</p>
    <p>isn't it beautiful!!</p>
    <Link to='/colors'>Go back</Link>
    </div>
    </>
  )

}


export default ColorDetails;