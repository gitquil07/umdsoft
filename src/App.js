import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Menu from './component/menu/menu'
import { Registration } from './pages/index';
// import Registration from './pages/registration/registration';

function App() {
  return (

    <div>
      <Menu />

      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/onlineRep" component={onlineRep} />
          <Route exact path="/onlineSchool" component={onlineSchool} />
          <Route exact path="/studentDashboard" component={studentDashboard} /> */}
          <Route exact path="/registration" component={Registration} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
