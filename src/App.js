import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './style.css';

import Menu from './component/menu/menu'
import { Registration } from './pages/index';
import { Login } from './pages';
import { ForgotPassword } from './pages';
import './style.css';
// import Registration from './pages/registration/registration';

function App() {
  return (

    <div>
      <Menu /> 
      { /*<Login /> 
      { /*<ForgotPassword />*/}

      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/onlineRep" component={onlineRep} />*/}
          <Route exact path="/forgotPswd" component={ForgotPassword} /> 
          <Route exact path="/login" component={Login} /> 
          <Route exact path="/registration" component={Registration} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
