import React from "react";
import Layout from "../layouts/Layout";
import NavBar from "../features/navbar/NavBar";
import NewsBar from "../features/newsBar/NewsBar";
import UserProfile from "../features/profile/UserProfile";

const Profile = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <UserProfile />
        <NewsBar />
      </Layout>
    </>
  );
};

export default Profile;
