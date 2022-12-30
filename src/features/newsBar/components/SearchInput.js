import React from "react";
import { BiSearch } from "react-icons/bi";
import styles from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <div>
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

export default SearchInput;
