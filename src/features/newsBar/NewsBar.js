import React from "react";
import styles from "./NewsBar.module.css";
import { BiSearch } from "react-icons/bi";

const NewsBar = () => {
  return (
    <div className={styles.newsBar}>
      <form action="">
        <div className={styles.inputWrapper} tabIndex="0">
          <BiSearch className={styles.searchIcon} />
          <input
            className={styles.searchTexts}
            type="text"
            name="search"
            id="searchTweets"
            placeholder="Buscar no Twitter"
          />
        </div>
      </form>
    </div>
  );
};

export default NewsBar;
