import React from "react";
import {Route, useRouteMatch} from "react-router-dom";
import Menu from "../component/menu/menu";

const Main = () => {
  let {url, path} = useRouteMatch();

  console.log(path);
  switch(url){
    case '/repetitor':
      return(
        <div>
          <Menu url={url} />
          <Route exact path={`${url}`}>repetitor (bosh sahifa)</Route>
          <Route exact path={`${url}/dasturlar`}>Dasturlar</Route>
          <Route exact path={`${url}/darsliklar`} >Darsliklar</Route>
          <Route exact path={`${url}/oqituvchilar`} >Oqituvchilar</Route>
          <Route exact path={`${url}/mashg'ulotlar`} >Mashg'ulotlar</Route>
        </div>
      );
      break;
    case '/school':
      return(
        <div>
          <Menu url={url} />
          <Route exact path={`${url}`}>school (bosh sahifa)</Route>
          <Route exact path={`${url}/fanlar`} >Fanlar</Route>
          <Route exact path={`${url}/darsliklar`} >Darsliklar</Route>
          <Route exact path={`${url}/oqituvchilar`} >Oqituvchilar</Route>
          <Route exact path={`${url}/mashg'ulotlar`} >Mashg'ulotlar</Route>
        </div>
      );
      break;
    case '/profile':
      return(
        <div>
          <Menu url={url} />
          <Route exact path={`${url}`}>profile (bosh sahifa)</Route>
          <Route exact path={`${url}/forum`} >forum</Route>
          <Route exact path={`${url}/vebinar`} >Darsliklar</Route>
          <Route exact path={`${url}/kurslar`} >vebinar</Route>
          <Route exact path={`${url}/blog`} >blog</Route>
        </div>
      );
      break; 
    case '/':
      return(
        <div>
          <Menu url={url} />
          <Route exact path={`${url}`}>it academia (bosh sahifa)</Route>
        </div>
      );
      break;
  }
}

export default Main;