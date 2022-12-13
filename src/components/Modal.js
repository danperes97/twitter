import { React, useRef, useEffect } from "react";

import styles from "./Modal.module.css";

const Modal = ({
  showModal,
  dissmissModalFunction,
  clickOriginRef,
  children,
}) => {
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
        } else {
          dissmissModalFunction();
        }
      });
    }
  }, [clickOriginRef, dissmissModalFunction, showModal]);

  const renderModal = () => {
    return (
      <div ref={domNode} className={styles.modalContent}>
        {children}
      </div>
    );
  };

  return showModal ? renderModal() : null;
};

export default Modal;
