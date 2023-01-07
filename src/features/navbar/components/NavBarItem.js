import React from "react";
import styles from "./NavBarItem.module.css";

const NavBarItem = ({ children, phrase, onClick }) => {
  return (
    <div className={styles.navbarItem} onClick={onClick}>
      {children}
      <span className={styles.phrase}>{phrase}</span>
    </div>
  );
};

export default NavBarItem;
