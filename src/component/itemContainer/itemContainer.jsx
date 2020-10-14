import React from "react";
import "./itemContainer.css";

const ItemContainer = (title, {children}) => {
 return (
    <div className="item-container">
      <div className="container-head">
        <span className="container-title">
            {title} 
        </span>
      </div>
      {children}
    </div>
 );
}

export default ItemContainer;