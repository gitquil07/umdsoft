import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { Registration } from './pages/index';
import { Login } from './pages';
import { ForgotPassword } from './pages';
import Main from './pages/main';
import './style.css';

import NodeJs from './pages/nodeJs/nodeJs'
import Online from './pages/online/Online'
function App() {
  return (
      <div>
        <Router>
          <Switch>
              <Route exact path="/forgotPswd" component={ForgotPassword} />
              <Route exact path="/login" component={Login} /> 
              <Route exact path="/registration" component={Registration} />

              {/* <Route path="/:page" component={Main} /> */}
              <Route exact path="/" component={Main} />
              <Route exact path="/tutor" component={Main} />
              <Route exact path="/school" component={Main} />
              <Route exact path="/profile" component={Main} />
              <Route exact path="/online" component={Online} />
              <Route exact path="/blog" component={Main} />
              <Route exact path="/forum" component={Main} />
              <Route exact path="/nodejs" component={NodeJs}/>
          </Switch>
        </Router>

      </div>
  );
}

export default App;
