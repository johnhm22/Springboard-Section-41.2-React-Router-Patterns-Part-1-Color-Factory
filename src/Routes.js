import {React, useState} from 'react';
import ColorForm from './ColorForm';
import ColorList from './ColorList'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import ColorDetails from './ColorDetails';



function Routes () {

    const INITIAL_STATE = ['red', 'purple', 'teal'];

    const [colors, updateColors] = useState(INITIAL_STATE);
    
    const addColor = (color) => {
      console.log("addColor has been called. Color is: ", color);
        updateColors(colors => [...colors, color]);
    }


    return(
    <>
        <BrowserRouter>
        <Switch>
          <Route exact path="/colors" >
            <ColorList colors={colors}/>
          </Route>
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

export default Routes;