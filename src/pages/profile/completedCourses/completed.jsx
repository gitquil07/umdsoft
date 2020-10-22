import React from "react";

const Completed = ({name, duration}) => {
  return (
    <div className="completed-display">
      <div className="completed">
        <img src={require(`../../../svg/${name}.svg`)} alt={name}/>
        <div className="completed-info">
          <a href="#">{name} darslari</a>
          <div>{duration} {(!isNaN(duration))? "soat" : ""}</div>
        </div>
      </div>
    </div>
  );
}

export default Completed;