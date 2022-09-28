import React from "react";

import PageHeader from "./page-sections/00 - PageHeader/PageHeader";
import ServerList from "./page-sections/01 - ServerList/ServerList";
import ServerChannels from "./page-sections/02 - ServerChannels/ServerChannels";
import ChatPanel from "./page-sections/04 - ChatPanel/ChatPanel";
import MembersList from "./page-sections/05 - MembersList/MembersList";

const ServerPage = () => {
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
          <ServerChannels />
        </div>

        <div id="chat-panel">
          <ChatPanel />
        </div>
        
        <div id="members-list">
          <MembersList />
        </div>
      </div>
    </div>
  );
};

export default ServerPage;
