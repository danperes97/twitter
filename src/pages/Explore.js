import React from "react";
import Layout from "../layouts/Layout";
import NavBar from "../features/navbar/NavBar";
import NewsBar from "../features/newsBar/NewsBar";
import Trending from "../features/explore/Trending";

const Explore = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <Trending />
        <NewsBar />
      </Layout>
    </>
  );
};

export default Explore;
