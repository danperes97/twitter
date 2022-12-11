import { React, useRef, useEffect } from "react";

import styles from "./Modal.module.css";

// Todo fix this, is not working!
const Modal = ({ showModal, dissmissModalFunction, clickOriginRef }) => {
  const domNode = useRef(null);

  useEffect(() => {
    if (showModal) {
      document.addEventListener(`mousedown`, (e) => {
        if (
          domNode !== null &&
          domNode.current !== null &&
          (domNode.current.contains(e.target) ||
            clickOriginRef.current.contains(e.target))
        ) {
          //Deal click inside
          console.log("hi");
        } else {
          console.log("fora");
          console.log(clickOriginRef);

          dissmissModalFunction();
        }
      });
    }
  }, [clickOriginRef, dissmissModalFunction, showModal]);

  const renderModal = () => {
    return (
      <div ref={domNode} className={styles.modalContent}>
        <h1>Modal</h1>
      </div>
    );
  };

  return showModal ? renderModal() : null;
};

export default Modal;
