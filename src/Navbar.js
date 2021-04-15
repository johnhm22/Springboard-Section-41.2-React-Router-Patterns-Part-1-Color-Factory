import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
    
    return (
        <nav className='Navbar'>
            <p>These are the links</p>
            <NavLink exact to='/colors'>Home</NavLink>
            <NavLink exact to='/colors/new'>Add a Color</NavLink>

            {props.colors.map(c => {return <NavLink exact to='/colors/:color'>{c}</NavLink>
                 })}     
        </nav>
    )
}
export default Navbar;