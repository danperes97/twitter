import React from "react";
import Layout from "../layouts/Layout";
import NavBar from "../features/navbar/NavBar";
import NewsBar from "../features/newsBar/NewsBar";
import NotificationList from "../features/notifications/NotificationList";

const Notifications = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <NotificationList />
        <NewsBar />
      </Layout>
    </>
  );
};

export default Notifications;
