import React from 'react'
import Hr from '../../components/Hr'
import styles from './TweetsList.module.css'
import ConfigSection from './components/ConfigSection'
import WriteMessageSection from './components/WriteMessageSection'
import TweetCard from './components/TweetCard'

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
      {[1,2,3,4,5,6,21,21,21,21,21].map((n) => {
        return (
          <>
            <TweetCard/>
            <Hr/>
          </>
        )
      })}
    </div>
  )
}

export default TweetsList