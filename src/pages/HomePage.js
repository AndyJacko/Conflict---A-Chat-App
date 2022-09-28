import React from "react";

import PageHeader from "./page-sections/00 - PageHeader/PageHeader";
import ServerList from "./page-sections/01 - ServerList/ServerList";
import FriendChats from "./page-sections/03 - FriendChats/FriendChats";
import ChatPanel from "./page-sections/04 - ChatPanel/ChatPanel";

const HomePage = () => {
  return (
    <div id="page-container">
      <div id="page-header">
        <PageHeader />
      </div>

      <div id="content-container">
        <div id="server-list">
          <ServerList />
        </div>
        <div id="friend-chats">
          <FriendChats />
        </div>

        <div id="chat-panel">
          <ChatPanel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
