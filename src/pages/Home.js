import React from 'react'
import NavBar from '../features/navbar/NavBar'
import NewsBar from '../features/newsBar/NewsBar'
import Layout from '../layouts/Layout'
import TweetsList from '../features/tweetsList/TweetsList'

const Home = () => {
  return (
    <>
      <Layout>
        <NavBar/>
        <TweetsList/>
        <NewsBar/>
      </Layout>
    </>
  )
}

export default Home