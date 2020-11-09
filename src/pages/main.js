import React from "react";
import {Route, useRouteMatch} from "react-router-dom";
import Menu from "../component/menu/menu";
import { HeaderProfile, Header, Footer } from "../component";
import OnlineRep from "./onlineRep";
import OnlineSchool from "./school";
import Profile from "./profile";
import Home from "./home";
import Forum from "./forum/forum";
import Online from "./online/Online";

const Main = () => {
  let {url, path} = useRouteMatch();
  let [isOpen, setIsOpen] = React.useState(true);
  const viewAside = () => {
    setIsOpen(!isOpen);
  }

  return (
      <>
        <Menu isOpen={isOpen} />
        {(url !== "/profile")? <Header viewAside={viewAside} /> :  <HeaderProfile viewAside={viewAside} /> }
        <div className='after__header bg-light'>
            <Route exact path="/" component={Home} />
            <Route path="/tutor" component={OnlineRep} />
            <Route path="/school" component={OnlineSchool} />
            {/*<Route path="/online"  component={Online} />*/}
            <Route path="/profile" component={Profile} />
            <Route path="/forum" component={Forum} />
        </div>
        <Footer />
      </>
  );
  
}

export default Main;