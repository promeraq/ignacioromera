// This will be the MODAL for Login and Sign up.
// The modal also blocks the interaction with everything behing it.

import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

// Blocks the interaction with the rest of the page
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

// The modal itself
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// How we pass the modal to the index HTML file
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("modalOverlay-root")
      )}
    </React.Fragment>
  );
};

// Landing Page
export default Modal;
