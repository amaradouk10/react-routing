import React from 'react';
import Doc from './components/Doc';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import Menu from './components/Menu';
import Error from './components/Error';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App(){
  return(
    <BrowserRouter>
      <Menu/>
      <Switch>
      <Route  exact path="/" component={Doc}/>
      <Route path="/tutorial" component={Tutorials}/>
      <Route path="/community" component={Community}/>
      <Route  component={Error}/>
      </Switch>
    </BrowserRouter>
  )
}


export default App;
