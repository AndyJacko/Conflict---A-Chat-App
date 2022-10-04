import React, { useContext } from "react";

import PageContext from "../../../store/pageContext";
import ChatItem from "../../../components/ChatItem/ChatItem";
import ChatBarIcons from "../../../components/ChatBarIcons/ChatBarIcons";
import MessageInput from "../../../components/MessageInput/MessageInput";
import FriendProfile from "../../../components/FriendProfile/FriendProfile";

import styles from "./ChatsPanel.module.css";

const ChatPanel = () => {
  const pageCtx = useContext(PageContext);

  const friend = pageCtx.data.friends.filter((friend) => {
    return friend.sel === true;
  });

  return (
    <>
      <div className="h-100 d-flex flex-column overflow-hidden">
        <div className={styles.chatsheader}>
          <div className="d-flex align-items-center">
            <div className={styles.aticon}>
              <i className="fa-solid fa-at"></i>
            </div>
            <div className={styles.friendname}>{friend[0].name}</div>
          </div>
          <ChatBarIcons />
        </div>

        <div className="h-100 d-flex flex-column overflow-hidden">
          <div className="h-100 overflow-hidden">
            <div className="h-100 d-flex flex-column justify-content-end">
              <FriendProfile name={friend[0].name} img={friend[0].img} />

              {friend[0].messages.map((chat) => {
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

          <MessageInput type="friend" />
        </div>
      </div>
    </>
  );
};

export default ChatPanel;
