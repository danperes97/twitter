import styles from "./ConfigSection.module.css";
import { BiChevronDown } from "react-icons/bi";
import Hr from "../../../components/Hr";
import { AiOutlinePicture, AiOutlineFileGif } from "react-icons/ai";
import { CiCircleList } from "react-icons/ci";
import { BiWorld, BiSmile, BiCalendarAlt, BiMap } from "react-icons/bi";
import { useState } from "react";
import { useCreateTweet } from "../../../hooks/useCreateTweet";

const ConfigSection = ({ user, setRefresh }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [tweetText, setTweetText] = useState("");
  const { requestConfig } = useCreateTweet();

  const canSubmit = (e) => {
    e.target.value ? setButtonDisabled(false) : setButtonDisabled(true);
    setTweetText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tweet = {
      picture: user.profile_picture,
      username: user.name,
      address: user.username,
      body: tweetText,
      likes: 0,
      shares: 0,
      comments: 0,
    };

    requestConfig(tweet);
    setTweetText("");
    setButtonDisabled(true);
    setTimeout(() => {
      setRefresh((oldKey) => oldKey + 1);
    }, 200);
  };

  return (
    <>
      <div className={styles.configSection}>
        <img src={user.profile_picture} alt="user-profile-pic"></img>
        <div className={styles.formTweet}>
          <form onSubmit={handleSubmit}>
            <p>
              Qualquer pessoa <BiChevronDown />
            </p>
            <p>
              <input
                value={tweetText}
                onChange={(e) => canSubmit(e)}
                className={styles.tweetInput}
                type="text"
                name="tweet"
                id="tweet"
                placeholder="O que está acontecendo?"
              />
            </p>
            <p className={styles.answerConfig}>
              <BiWorld /> Qualquer pessoa pode responder
            </p>

            <Hr />

            <div className={styles.initBtns}>
              <div className={styles.configBtns}>
                <AiOutlinePicture />
                <AiOutlineFileGif />
                <CiCircleList />
                <BiSmile />
                <BiCalendarAlt />
                <BiMap />
              </div>

              <input
                type="submit"
                value="Tweetar"
                disabled={buttonDisabled}
                className={styles.confirmTweet}
              />
            </div>
          </form>
        </div>
        <Hr />
      </div>
    </>
  );
};

export default ConfigSection;
