import React from "react";
import {Link} from "react-router-dom";


const Navigation = () => {
  return (
    <div>
      <Link to="/">It academiya </Link>
      <Link to="/repetitor">Repetitor </Link>
      <Link to="/school">School </Link>
      <Link to="/profile">Profile </Link>
    </div>
  );
}

export default Navigation;