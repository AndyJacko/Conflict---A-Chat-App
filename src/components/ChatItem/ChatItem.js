import React from "react";

import styles from "./ChatItem.module.css";

const ChatItem = ({ chat, time, user }) => {
  return (
    <div className={styles.chatitem}>
      <div className={styles.time}>{time}</div>
      <div className={styles.user}>{user}</div>
      <div className={styles.chat}>{chat}</div>
    </div>
  );
};

export default ChatItem;
