import {React, useState} from 'react';
import ColorForm from './ColorForm';
import Navbar from './Navbar'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import ColorDetails from './ColorDetails';


const Colors = () => {
    const [colors, setColor] = useState();
    const addColor = (color) => {
        setColor([...colors, {color}]);
    }

    return(
    <>
        <h1>Welcome to the Color Factory</h1>
        <BrowserRouter>
        <Navbar colors={colors}/>
        <Switch>
          <Route exact path="/colors/new" >
            <ColorForm addColor={addColor}/>
          </Route>
          <Route exact path="/colors/:color" >
            <ColorDetails />
          </Route>
          <Redirect to="/colors" /> 
      </Switch> 
      </BrowserRouter>
    </>

    )
}

export default Colors