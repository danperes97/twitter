import React from "react";
import Hr from "../../../components/Hr";
import styles from "./WriteMessageSection.module.css";
import { AiOutlinePicture, AiOutlineFileGif } from "react-icons/ai";
import { CiCircleList } from "react-icons/ci";
import { BiWorld, BiSmile, BiCalendarAlt, BiMap } from "react-icons/bi";

const WriteMessageSection = () => {
  return (
    <div className={styles.messageSection}>
      <p className={styles.inputPlaceholder}>O que está acontecendo?</p>
      <p className={styles.answerConfig}>
        <BiWorld /> Qualquer pessoa pode responder
      </p>
      <Hr />

      <div className={styles.btnsSection}>
        <div className={styles.initBtns}>
          <p>
            <AiOutlinePicture />
          </p>
          <p>
            <AiOutlineFileGif />
          </p>
          <p>
            <CiCircleList />
          </p>
          <p>
            <BiSmile />
          </p>
          <p>
            <BiCalendarAlt />
          </p>
          <p>
            <BiMap />
          </p>
        </div>

        <button>Tweetar</button>
      </div>
    </div>
  );
};

export default WriteMessageSection;
