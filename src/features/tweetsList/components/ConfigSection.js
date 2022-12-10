import React from "react";
import styles from "./ConfigSection.module.css";
import { BiChevronDown } from "react-icons/bi";

const ConfigSection = () => {
  return (
    <div className={styles.configSection}>
      <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      <span>
        Qualquer pessoa <BiChevronDown />
      </span>
    </div>
  );
};

export default ConfigSection;
