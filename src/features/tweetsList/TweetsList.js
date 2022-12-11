import React from "react";
import Hr from "../../components/Hr";
import styles from "./TweetsList.module.css";
import ConfigSection from "./components/ConfigSection";
import TweetCard from "./components/TweetCard";
import { useGetTweets } from "../../hooks/useGetTweets";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";

const TweetsList = () => {
  const { tweets, loading, error, setRefresh } = useGetTweets();
  const { user } = useGetCurrentUser();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Página Inicial</h3>

        <div className={styles.tweetSection}>
          {user && <ConfigSection user={user} setRefresh={setRefresh} />}
        </div>
      </div>

      <Hr />
      {error && <p>Deu erro... {error}</p>}
      {loading && <p>Carregando...</p>}
      {tweets &&
        tweets.map((tweet) => {
          return (
            <>
              <TweetCard
                picture={tweet.picture}
                username={tweet.username}
                address={tweet.address}
                body={tweet.body}
                likes={tweet.likes}
                shares={tweet.shares}
                comments={tweet.comments}
              />
              <Hr />
            </>
          );
        })}
    </div>
  );
};

export default TweetsList;
