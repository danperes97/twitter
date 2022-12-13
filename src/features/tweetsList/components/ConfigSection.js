import styles from "./ConfigSection.module.css";
import { BiChevronDown } from "react-icons/bi";
import Hr from "../../../components/Hr";
import {
  AiOutlineCheck,
  AiOutlinePicture,
  AiOutlineFileGif,
} from "react-icons/ai";
import { CiCircleList } from "react-icons/ci";
import { BiWorld, BiSmile, BiCalendarAlt, BiMap } from "react-icons/bi";
import { RiUserHeartFill } from "react-icons/ri";
import { useState, useRef } from "react";
import { useCreateTweet } from "../../../hooks/useCreateTweet";
import Modal from "../../../components/Modal";

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

  const dissmissModalFunction = (e) => {
    setShowWhoCanSeeModal(false);
  };

  const [showWhoCanSeeModal, setShowWhoCanSeeModal] = useState(false);
  const whoCanSeeSelectRef = useRef(null);

  return (
    <>
      <div className={styles.configSection}>
        <img src={user.profile_picture} alt="user-profile-pic"></img>
        <div className={styles.formTweet}>
          <form onSubmit={handleSubmit}>
            <div
              ref={whoCanSeeSelectRef}
              className={styles.whoCanSeeSelect}
              onClick={(e) => setShowWhoCanSeeModal(true)}
            >
              <p>
                Qualquer pessoa <BiChevronDown />
              </p>
              <Modal
                showModal={showWhoCanSeeModal}
                dissmissModalFunction={dissmissModalFunction}
                clickOriginRef={whoCanSeeSelectRef}
              >
                <h3 className={styles.audienceTitle}>Selecione a audiência</h3>

                <div className={styles.audienceOption}>
                  <div className={styles.audienceOptionTag}>
                    <div className={styles.blueCircle}>
                      <BiWorld />
                    </div>
                    <h4>Qualquer pessoa</h4>
                  </div>

                  <AiOutlineCheck />
                </div>

                <div className={styles.audienceOption}>
                  <div className={styles.audienceOptionTag}>
                    <div className={styles.greenCircle}>
                      <RiUserHeartFill />
                    </div>

                    <div className={styles.twitterGroup}>
                      <h4>Roda do twitter</h4>
                    </div>
                  </div>

                  <AiOutlineCheck />
                </div>
              </Modal>
            </div>

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
