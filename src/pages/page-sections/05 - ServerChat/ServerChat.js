import React, { useContext } from "react";

import PageContext from "../../../store/pageContext";
import ChatItem from "../../../components/ChatItem/ChatItem";
import ChatBarIcons from "../../../components/ChatBarIcons/ChatBarIcons";
import MessageInput from "../../../components/MessageInput/MessageInput";
import MembersList from "../06 - MembersList/MembersList";
import ServerProfile from "../../../components/ServerProfile/ServerProfile";

import styles from "./ServerChat.module.css";

const ServerChat = () => {
  const pageCtx = useContext(PageContext);

  const server = pageCtx.data.servers.filter((server) => {
    return server.id === pageCtx.activeServer;
  });

  const selChannel = server[0].channels.filter((channel) => {
    return channel.sel === true;
  });

  const selSub = selChannel[0].subs.filter((sub) => {
    return sub.sel === true;
  });

  return (
    <>
      <div className="h-100 d-flex flex-column overflow-hidden">
        <div className={styles.chatsheader}>
          <div className="d-flex align-items-center">
            <div className={styles.hashicon}>
              <i className="fa-solid fa-hashtag"></i>
            </div>
            <div className={styles.channelname}>{selSub[0].title}</div>
          </div>
          <ChatBarIcons />
        </div>

        <div className="h-100 d-flex">
          <div className="h-100 w-100">
            <div className="h-100 d-flex flex-column overflow-hidden">
              <div className="h-100 overflow-hidden">
                <div className="h-100 d-flex flex-column justify-content-end">
                  <ServerProfile name={selSub[0].title} />

                  {selSub[0].messages.map((chat) => {
                    return (
                      <ChatItem
                        key={chat.id}
                        time={chat.time}
                        user={chat.user}
                        chat={chat.chat}
                      />
                    );
                  })}
                </div>
              </div>

              <MessageInput type="server" />
            </div>
          </div>

          <div id="members-list">
            <MembersList />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServerChat;
