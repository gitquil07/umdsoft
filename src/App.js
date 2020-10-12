import React from 'react';
import {Switch, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './component/menu/menu'

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/onlineRep" component={onlineRep} />
        <Route exact path="/onlineSchool" component={onlineSchool} />
        <Route exact path="/studentDashboard" component={studentDashboard} />
        <Route exact path="/registration" component={registration} />
      </switch>
    </div>
  );
}

export default App;
