import React from "react";

import Input from "../Input/Input";

import styles from "./ChatBarIcons.module.css";

const ChatBarIcons = () => {
  return (
    <div className={styles.icons}>
      <div>
        <i className="fa-solid fa-phone-volume"></i>
      </div>
      <div>
        <i className="fa-solid fa-video"></i>
      </div>
      <div>
        <i className="fa-solid fa-thumbtack"></i>
      </div>
      <div>
        <i className="fa-solid fa-user-plus"></i>
      </div>
      <div>
        <Input st="search" ph="Search" />
      </div>
      <div>
        <i className="fa-solid fa-inbox"></i>
      </div>
      <div>
        <i className="fa-solid fa-circle-info"></i>
      </div>
    </div>
  );
};

export default ChatBarIcons;
