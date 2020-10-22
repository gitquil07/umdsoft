import React from "react";
import './panelElement.css';

const PanelElement = ({title, children, link, linkTitle}) => {

  return(
    <div className="panel">
        <div>
          <h1>{title}</h1>
          <div className="panel-content">
            {children}
          </div>
        </div>
    </div>
  );

}

export default PanelElement;