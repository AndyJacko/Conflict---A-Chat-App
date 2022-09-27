import React from "react";

import ServerList from "./page-sections/01 - ServerList/ServerList";
import ServerChannels from "./page-sections/02 - ServerChannels/ServerChannels";
import ChatPanel from "./page-sections/04 - ChatPanel/ChatPanel";
import MembersList from "./page-sections/05 - MembersList/MembersList";

const ServerPage = () => {
  return (
    <div className="d-flex" id="page-container">
      <div id="server-list">
        <ServerList />
      </div>

      <div id="friend-chats">
        <ServerChannels />
      </div>

      <div id="chat-panel">
        <ChatPanel />
      </div>

      <div id="members-list">
        <MembersList />
      </div>
    </div>
  );
};

export default ServerPage;
