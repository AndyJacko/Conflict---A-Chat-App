import React from "react";

import ServerList from "./page-sections/01 - ServerList/ServerList";
import FriendChats from "./page-sections/03 - FriendChats/FriendChats";
import ChatPanel from "./page-sections/04 - ChatPanel/ChatPanel";

const HomePage = () => {
  return (
    <div className="d-flex" id="page-container">
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
  );
};

export default HomePage;
