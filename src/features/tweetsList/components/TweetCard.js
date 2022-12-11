import React from "react";
import styles from "./TweetCard.module.css";
import { FaRegHeart, FaRetweet, FaRegComment } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";

const TweetCard = ({
  picture,
  username,
  address,
  body,
  likes,
  comments,
  shares,
}) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.tweetCard}>
          <img src={picture} alt="profile" />
          <div className={styles.tweetContent}>
            <p>
              <b>{username}</b>
              {address} - 1h
            </p>
            <p>{body}</p>
          </div>
        </div>

        <div className={styles.tweetStats}>
          <p>
            <FaRegComment /> {comments}
          </p>
          <p>
            <FaRetweet /> {shares}
          </p>
          <p>
            <FaRegHeart /> {likes}
          </p>
          <p>
            <BsUpload />
          </p>
        </div>
      </div>
    </>
  );
};

export default TweetCard;
