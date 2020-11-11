import React from 'react';
import ReactDom, { createPortal } from 'react-dom';


const Modal = ({container, children}) => {
  return (
    createPortal(children, container)
  );
}

export default Modal