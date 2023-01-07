import React from "react";
import Layout from "../layouts/Layout";
import NavBar from "../features/navbar/NavBar";
import NewsBar from "../features/newsBar/NewsBar";
import MessagesList from "../features/messages/MessagesList";

const Messages = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <MessagesList />
        <NewsBar />
      </Layout>
    </>
  );
};

export default Messages;
