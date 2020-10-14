import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './style.css';
import {Navigation} from "./component";
import Main from "./pages/main";
import {Registration} from "./pages";
import {Login} from './pages';
import {ForgotPassword} from './pages';
// import Registration from './pages/registration/registration';

function App() {
  return (
    <Router>
    {/* <Navigation /> */}
      {/* <Switch>
        <Route exact path="/" render={(props)  => <Main />} />
        <Route path="/:categoryContent" render={(props) => <Main />}></Route>
      </Switch> */}
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
