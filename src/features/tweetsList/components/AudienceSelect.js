import styles from "./AudienceSelect.module.css";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { RiUserHeartFill } from "react-icons/ri";
import { useState, useRef } from "react";
import Modal from "../../../components/Modal";

const AudienceSelect = ({ setShowWhoCanSeeModal, showWhoCanSeeModal }) => {
  const dissmissModalFunction = () => setShowWhoCanSeeModal(false);
  const whoCanSeeSelectRef = useRef(null);

  const [audience, setAudience] = useState("Qualquer pessoa");
  const [audienceClass, setAudienceClass] = useState(styles.audienceAnyone);

  const chooseAudience = (value, className) => {
    setShowWhoCanSeeModal(false);
    setAudience(value);
    setAudienceClass(className);
  };
  return (
    <>
      <div
        ref={whoCanSeeSelectRef}
        className={audienceClass}
        onClick={() => {
          if (!showWhoCanSeeModal) {
            setShowWhoCanSeeModal(true);
          }
        }}
      >
        <p>
          {audience} <BiChevronDown />
        </p>
        <Modal
          showModal={showWhoCanSeeModal}
          dissmissModalFunction={dissmissModalFunction}
          clickOriginRef={whoCanSeeSelectRef}
        >
          <h3 className={styles.audienceTitle}>Selecione a audiência</h3>

          <div
            className={styles.audienceOption}
            onClick={() =>
              chooseAudience("Qualquer pessoa", styles.audienceAnyone)
            }
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
              chooseAudience("Roda do Twitter", styles.audienceGroup)
            }
          >
            <div className={styles.audienceOptionTag}>
              <div className={styles.greenCircle}>
                <RiUserHeartFill />
              </div>

              <div className={styles.twitterGroup}>
                <h4>Roda do Twitter</h4>
              </div>
            </div>

            {audience === "Roda do Twitter" ? (
              <AiOutlineCheck color="#1da1f2" />
            ) : null}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AudienceSelect;
