import React from "react";
import './userPanel.css';

const UserPanel = ({children}) => {
  return(
    <div className="user-panel">
      {children}
    </div>
  );
} 

export default UserPanel;