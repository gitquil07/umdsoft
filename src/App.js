import React, {useState} from 'react';
import ReactDom from "react-dom";
import {BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom";

import { Menu, HeaderProfile, Header, Footer } from "./component";
import { Registration } from './pages/';
import { Login } from './pages';
import { ForgotPassword } from './pages';
import { OnlineRep } from "./pages";
import { OnlineSchool } from "./pages";
import { Profile } from "./pages";
import { Home } from "./pages";
import { Forum } from "./pages";
import { Blog } from "./pages";
import './style.css';
import NodeJs from './pages/nodeJs/nodeJs'

const modal = document.getElementById('modal');

function App() {

  let [isOpen, setIsOpen] = useState(true);
  

  const isDisplay = (path) => {
    if(path != 'forgotPswd' && path != 'login' && path != 'registration'){
      return true;
    }

    return false;
  }

  const viewAside = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <Route path="/forgotPswd" component={ForgotPassword} /> 
      <Route path="/login" component={Login} /> 
      <Route path="/registration" component={Registration} />

      <Route path="/:page?" render={props => {
          let page = (!props.match.params.page)? "home" : props.match.params.page;
          
          if(isDisplay(page)){
            return <>
              <Menu isOpen={isOpen} />
              {(page !== "/profile")? <Header viewAside={viewAside}/> :  <HeaderProfile viewAside={viewAside} />}
            </>
          }else{
            return "";
          }
      }} />
      
        <div className='after__header bg-light'>
          <Route exact path="/" component={Home} />
          <Route path="/tutor" component={OnlineRep} />
          <Route path="/school" component={OnlineSchool} />
          <Route path="/profile" component={Profile} />
          <Route path="/forum" component={Forum} />
          <Route path="/blog" component={Blog} />
        </div>
      
      <Route path="/:page?" render={props => {
        let page = (!props.match.params.page)? "home" : props.match.params.page;
        if(isDisplay(page)){
          return <>
            <Footer />
          </>
        }else{
          return "";
        }
      }}/>
    </Router> 
  );
}

export default App;
