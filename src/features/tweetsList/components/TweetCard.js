import React from 'react'
import styles from './TweetCard.module.css'
import { FaRegHeart, FaRetweet, FaRegComment } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";

const TweetCard = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.tweetCard}>
          <img src='https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          <div className={styles.tweetContent}>
            <p><b>Danilo</b>@danhack - 1h</p>
            <p>Gostei muito dessa rede</p>
          </div>
        </div>

        <div className={styles.tweetStats}>
          <p><FaRegComment/> 1.900</p>
          <p><FaRetweet/> 1.900</p>
          <p><FaRegHeart/> 1.900</p>
          <p><BsUpload/></p>
        </div>
      </div>
    </>
  )
}

export default TweetCard