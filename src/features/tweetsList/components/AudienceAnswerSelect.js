import styles from "./AudienceAnswerSelect.module.css";
import { AiOutlineCheck } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { RiUserHeartFill } from "react-icons/ri";
import { HiAtSymbol } from "react-icons/hi";
import { useState, useRef } from "react";
import Modal from "../../../components/Modal";

const AudienceAnswerSelect = ({
  setShowWhoCanSeeModal,
  showWhoCanSeeModal,
}) => {
  const dissmissModalFunction = () => setShowWhoCanSeeModal(false);
  const whoCanSeeSelectRef = useRef(null);

  const [audience, setAudience] = useState("Qualquer pessoa");
  const [icon, setIcon] = useState(<BiWorld />);

  const chooseAudience = (value, icon) => {
    setShowWhoCanSeeModal(false);
    setIcon(icon);
    setAudience(value);
  };
  return (
    <>
      <div
        ref={whoCanSeeSelectRef}
        className={styles.audienceAnswerSelect}
        onClick={() => {
          if (!showWhoCanSeeModal) {
            setShowWhoCanSeeModal(true);
          }
        }}
      >
        <p className={styles.choose}>
          {icon} {audience}
        </p>
        <Modal
          showModal={showWhoCanSeeModal}
          dissmissModalFunction={dissmissModalFunction}
          clickOriginRef={whoCanSeeSelectRef}
        >
          <h5 className={styles.audienceTitle}>Quem pode responder?</h5>
          <p className={styles.whoCanAnswerText}>
            Escolha quem pode responder a este Tweet. Qualquer pessoa mencionada
            pode responder quando quiser.
          </p>

          <div
            className={styles.audienceOption}
            onClick={() => chooseAudience("Qualquer pessoa", <BiWorld />)}
          >
            <div className={styles.audienceOptionTag}>
              <div className={styles.blueCircle}>
                <BiWorld />
              </div>
              <h4>Qualquer pessoa</h4>
            </div>

            {audience === "Qualquer pessoa" ? (
              <AiOutlineCheck color="#1da1f2" />
            ) : null}
          </div>

          <div
            className={styles.audienceOption}
            onClick={() =>
              chooseAudience("Pessoas que você segue", <RiUserHeartFill />)
            }
          >
            <div className={styles.audienceOptionTag}>
              <div className={styles.blueCircle}>
                <RiUserHeartFill />
              </div>
              <h4>Pessoas que você segue</h4>
            </div>

            {audience === "Pessoas que você segue" ? (
              <AiOutlineCheck color="#1da1f2" />
            ) : null}
          </div>

          <div
            className={styles.audienceOption}
            onClick={() =>
              chooseAudience(
                "Somente pessoas que você menciona",
                <HiAtSymbol />
              )
            }
          >
            <div className={styles.audienceOptionTag}>
              <div className={styles.blueCircle}>
                <HiAtSymbol />
              </div>
              <h4>Somente pessoas que você menciona</h4>
            </div>

            {audience === "Somente pessoas que você menciona" ? (
              <AiOutlineCheck color="#1da1f2" />
            ) : null}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AudienceAnswerSelect;
