import React from "react";
import styles from "./NewsBar.module.css";
import SearchInput from "./components/SearchInput";
import WhatsHappening from "./components/WhatsHappening";

const NewsBar = () => {
  return (
    <div className={styles.newsBar}>
      <SearchInput />
      <WhatsHappening />
    </div>
  );
};

export default NewsBar;
