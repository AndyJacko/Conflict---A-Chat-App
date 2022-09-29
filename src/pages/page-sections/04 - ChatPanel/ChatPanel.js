import React from "react";

import ChatItem from "../../../components/ChatItem/ChatItem";
import ChatBarIcons from "../../../components/ChatBarIcons/ChatBarIcons";
import MessageInput from "../../../components/MessageInput/MessageInput";
import FriendProfile from "../../../components/FriendProfile/FriendProfile";

import styles from "./ChatsPanel.module.css";

const DUMMY_CHATS = [
  {
    id: 1,
    time: "14:02",
    user: "DarthVader",
    chat: "You should see my new Tie-Fighter",
  },
  { id: 2, time: "14:02", user: "DarthVader", chat: "Its Sick AF" },
  { id: 3, time: "14:04", user: "AndyJacko", chat: "Sweet..." },
  { id: 4, time: "14:05", user: "DarthVader", chat: "Got bare weapons too" },
  { id: 5, time: "14:06", user: "AndyJacko", chat: "Nice..." },
  {
    id: 6,
    time: "14:10",
    user: "DarthVader",
    chat: "May destroy a planet later. I will stream it if you want to watch.",
  },
];

const ChatPanel = () => {
  return (
    <>
      <div className="h-100 d-flex flex-column overflow-hidden">
        <div className={styles.chatsheader}>
          <div className="d-flex align-items-center">
            <div className={styles.aticon}>
              <i className="fa-solid fa-at"></i>
            </div>
            <div className={styles.friendname}>Darth Vader</div>
          </div>
          <ChatBarIcons />
        </div>

        <div className="h-100 d-flex flex-column overflow-hidden">
          <div className="h-100 overflow-hidden">
            <div className="h-100 d-flex flex-column justify-content-end">
              <FriendProfile name="DarthVader" img="darthvader.png" />

              {DUMMY_CHATS.map((chat) => {
                return (
                  <ChatItem
                    key={chat.id}
                    id={chat.id}
                    time={chat.time}
                    user={chat.user}
                    chat={chat.chat}
                  />
                );
              })}
            </div>
          </div>

          <MessageInput />
        </div>
      </div>
    </>
  );
};

export default ChatPanel;
