import React from "react";
import "./itemContainer.css";

const ItemContainer = ({title, children}) => {
 return (
    <div className="item-container">
      <div className="container-head">
        <span className="container-title bg-light">
            {title} 
        </span>
        <span className="line"></span>
      </div>
      {children}
    </div>
 );
}

export default ItemContainer;