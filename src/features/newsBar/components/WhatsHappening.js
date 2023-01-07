import React from "react";
import styles from "./WhatsHappening.module.css";
import { BsThreeDots } from "react-icons/bs";

const WhatsHappening = () => {
  return (
    <>
      <div className={styles.whatsHapenningSection}>
        <div className={styles.whatsHapenningSectionContent}>
          <h3 className={styles.whatsHapenningTitle}>O que está acontecendo</h3>

          <div className={styles.cardWithPhoto}>
            <div className={styles.cardLeftSection}>
              <p>Televisão · Começa a partir d...</p>
              <h4>Mais Você</h4>
            </div>
            <img
              src="https://pbs.twimg.com/semantic_core_img/1324688671358906370/0ucPGYx7?format=jpg&name=240x240"
              alt=""
            />
          </div>

          <div className={styles.cardWithoutPhoto}>
            <div className={styles.cardLeftSection}>
              <p>Assuntos do Momento</p>
              <h4>Muzy</h4>
              <p>43,3 mil Tweets</p>
            </div>
            <BsThreeDots />
          </div>

          <div className={styles.cardWithoutPhoto}>
            <div className={styles.cardLeftSection}>
              <p>Assuntos do Momento</p>
              <h4>BRASIL ACIMA DE TUDO</h4>
              <p>9.765 Tweets</p>
            </div>
            <div>
              <BsThreeDots />
            </div>
          </div>

          <div className={styles.cardWithoutPhoto}>
            <div className={styles.cardLeftSection}>
              <p>Assuntos do Momento</p>
              <h4>Meu Instagram</h4>
              <p>9.765 Tweets</p>
            </div>
            <div>
              <BsThreeDots />
            </div>
          </div>

          <div className={styles.cardWithoutPhoto}>
            <div className={styles.cardLeftSection}>
              <p>Assuntos do Momento</p>
              <h4>OLED</h4>
              <p>9.765 Tweets</p>
            </div>
            <div>
              <BsThreeDots />
            </div>
          </div>
        </div>

        <div className={styles.showMore}>
          <p>Mostrar mais</p>
        </div>
      </div>
    </>
  );
};

export default WhatsHappening;
