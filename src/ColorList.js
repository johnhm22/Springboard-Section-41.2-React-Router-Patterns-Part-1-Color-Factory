import React from 'react';
import { Link } from 'react-router-dom';
import "./ColorList.css";


const ColorList = (props) => {
    
    return (
        <div className="ColorList">
        <header className="ColorList-header">
        <h1 className='ColorList-title'>Welcome to the Color Factory</h1>
            <h1>
                <Link to='/colors/new'>Add a color</Link>
            </h1>
            </header>
            <div className='ColorList-intro'>
            <p>Please select a colour</p>
            <ul>
            <li>{props.colors.map(c => <Link exact to={ `/colors/${c}` }>{c}</Link>)}</li> 
            </ul>  
            </div>
        </div>
    )
}
export default ColorList;