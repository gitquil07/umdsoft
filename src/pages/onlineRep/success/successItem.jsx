import React from 'react';

const SuccessItem = ({title, text, img}) => {
  return (
    <div>
        <div className="circled-icon">
        </div>
        <h5>{title}</h5>
        <p>{text}</p>
    </div>
  );
}

export default SuccessItem;