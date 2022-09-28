import React from "react";

import styles from "./ChatsPanel.module.css";

import ChatItem from "../../../components/ChatItem/ChatItem";

const DUMMY_CHATS = [
  { id: 1, time: "14:02", user: "DarthVader", chat: "You should see my new Tie-Fighter" },
  { id: 2, time: "14:02", user: "DarthVader", chat: "Its Sick AF" },
  { id: 3, time: "14:04", user: "AndyJacko", chat: "Sweet..." },
  { id: 4, time: "14:05", user: "DarthVader", chat: "Got bare weapons too" },
  { id: 5, time: "14:06", user: "AndyJacko", chat: "Nice..." },
  { id: 6, time: "14:10", user: "DarthVader", chat: "May destroy a planet later. I will stream it if you want to watch." },
];

const ChatPanel = () => {
  return (
    <>
      <div className="h-100 d-flex flex-column overflow-hidden">
        <div className={styles.chatsheader}>
          <div>@ friendname</div>
          <div>Icons</div>
        </div>

        <div className="h-100 d-flex flex-column overflow-hidden">
          <div className="h-100 overflow-hidden">
            <div className="h-100 d-flex flex-column justify-content-end">
              {DUMMY_CHATS.map((chat) => {
                return <ChatItem key={chat.id} id={chat.id} time={chat.time} user={chat.user} chat={chat.chat} />
              })}
              
            </div>
          </div>

          <div>MessageBox</div>
        </div>
      </div>
    </>
  );
};

export default ChatPanel;
