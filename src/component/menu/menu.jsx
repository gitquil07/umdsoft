import React from "react";
import {Link} from "react-router-dom";

const Menu = ({url}) => {
  console.log(url);

  switch(url){
    case '/repetitor':
      return(
        <div>
          <p><Link to={`${url}`}>Bosh sahifa</Link></p>
          <p><Link to={`${url}/dasturlar`} >Dasturlar</Link></p>
          <p><Link to={`${url}/darsliklar`} >Darsliklar</Link></p>
          <p><Link to={`${url}/oqituvchilar`} >Oqituvchilar</Link></p>
          <p><Link to={`${url}/mashg'ulotlar`} >Mashg'ulotlar</Link></p>
        </div>
      );
    case '/school':
      return(
        <div>
          <p><Link to={`${url}`}>Bosh sahifa</Link></p>
          <p><Link to={`${url}/fanlar`} >Fanlar</Link></p>
          <p><Link to={`${url}/darsliklar`} >Darsliklar</Link></p>
          <p><Link to={`${url}/oqituvchilar`} >Oqituvchilar</Link></p>
          <p><Link to={`${url}/mashg'ulotlar`} >Mashg'ulotlar</Link></p>
        </div>
      );
    case '/profile':
      return(
        <div>
          <p><Link to={`${url}`}>Bosh sahifa</Link></p>
          <p><Link to={`${url}/forum`} >forum</Link></p>
          <p><Link to={`${url}/vebinar`} >Darsliklar</Link></p>
          <p><Link to={`${url}/kurslar`} >vebinar</Link></p>
          <p><Link to={`${url}/blog`} >blog</Link></p>
        </div>
      ); 
    case "/":
      return(
        <div>
          <p><Link to={`${url}`}>Bosh sahifa</Link></p>
          <p><Link to={`${url}forum`} >forum</Link></p>
          <p><Link to={`${url}vebinar`} >vebinar</Link></p>
          <p><Link to={`${url}kurslar`} >kurslar</Link></p>
          <p><Link to={`${url}blog`} >blog</Link></p>
        </div>
      );

  }

}

export default Menu;