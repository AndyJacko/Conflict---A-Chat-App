import React from "react";

import Input from "../UI/Input/Input";

import styles from "./MessageInput.module.css";

const MessageInput = () => {
  return (
    <div className={styles.messageinputbox}>
      <div className="w-100 d-flex align-items-center">
        <div>
          <i className="fa-solid fa-circle-plus"></i>
        </div>

        <div className="w-100">
          <Input st="messagebox" ph="Message #channel" />
        </div>
      </div>

      <div className="d-flex align-items-center">
        <div>
          <i className="fa-solid fa-gift"></i>
        </div>
        <div>
          <i className="fa-solid fa-image"></i>
        </div>
        <div>
          <i className="fa-solid fa-file"></i>
        </div>
        <div>
          <i className="fa-solid fa-face-grimace"></i>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
