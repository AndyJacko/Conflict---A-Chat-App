import React from "react";

import PageHeader from "./page-sections/00 - PageHeader/PageHeader";
import ServerList from "./page-sections/01 - ServerList/ServerList";
import ServerChannels from "./page-sections/02 - ServerChannels/ServerChannels";
import ServerChat from "./page-sections/05 - ServerChat/ServerChat";

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
          <ServerChat />
        </div>
      </div>
    </div>
  );
};

export default ServerPage;
