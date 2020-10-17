import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Menu from './component/menu/menu'
import { Registration } from './pages/index';
import { Login } from './pages';
import { ForgotPassword } from './pages';
import { OnlineSchool } from './pages'
import { Home } from './pages'
import { Footer } from './component'
import { HeaderProfile } from './component'
import './style.css';
import Profile from './pages/profile';
// import Registration from './pages/registration/registration';

function App() {
  return (

    <div>
      
      { /*<Login /> 
      { /*<ForgotPassword />*/}

      {/* <Router>
        <Menu /> 
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/school" component={OnlineSchool} />
            <Route exact path="/forgotPswd" component={ForgotPassword} /> 
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/registration" component={Registration} />
        </Switch>
      </Router> 

      <Footer /> */}

      <Profile />
    </div>
  );
}

export default App;
