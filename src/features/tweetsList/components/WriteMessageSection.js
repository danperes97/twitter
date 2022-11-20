import React from 'react'
import GaleryIcon from '../../../components/GaleryIcon'
import GifIcon from '../../../components/GifIcon'
import PoolIcon from '../../../components/PoolIcon'
import EmojiIcon from '../../../components/EmojiIcon'
import ProgramIcon from '../../../components/ProgramIcon'
import LocationIcon from '../../../components/LocationIcon'
import Hr from '../../../components/Hr'
import styles from './WriteMessageSection.module.css'

const WriteMessageSection = () => {
  return (
    <div className={styles.messageSection}>
      <p className={styles.inputPlaceholder}>O que está acontecendo?</p>
      <p className={styles.awnserConfig}>🌐 Qualquer pessoa pode responder</p>
      <Hr/>

      <div className={styles.btnsSection}>
        <div className={styles.initBtns}>
          <p><GaleryIcon/></p>
          <p><GifIcon/></p>
          <p><PoolIcon/></p>
          <p><EmojiIcon/></p>
          <p><ProgramIcon/></p>
          <p><LocationIcon/></p>
        </div>

        <button>Tweetar</button>
      </div>
    </div>
  )
}

export default WriteMessageSection