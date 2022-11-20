import React from 'react'
import EmojiIcon from '../../components/EmojiIcon'
import GaleryIcon from '../../components/GaleryIcon'
import GifIcon from '../../components/GifIcon'
import LocationIcon from '../../components/LocationIcon'
import PoolIcon from '../../components/PoolIcon'
import ProgramIcon from '../../components/ProgramIcon'
import Hr from '../../components/Hr'
import styles from './TweetsList.module.css'
import ConfigSection from './components/ConfigSection'
import WriteMessageSection from './components/WriteMessageSection'

const TweetsList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Página Inicial</h3>

        <div className={styles.tweetSection}>
          <ConfigSection/>

          <WriteMessageSection/>
        </div>
      </div>
      
      <Hr/>

    </div>
  )
}

export default TweetsList