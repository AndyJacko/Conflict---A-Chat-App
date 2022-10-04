import React, { useContext } from "react";

import PageContext from "../../store/pageContext";
import Input from "../UI/Input/Input";

import styles from "./MessageInput.module.css";

const MessageInput = ({ type }) => {
  const pageCtx = useContext(PageContext);

  let recipient;
  let recip;

  if (type === "friend") {
    recipient = pageCtx.data.friends.filter((friend) => {
      return friend.sel === true;
    });

    recip = "@" + recipient[0].name;
  } else {
    recipient = pageCtx.data.servers.filter((server) => {
      return server.id === pageCtx.activeServer;
    });

    const selChannel = recipient[0].channels.filter((channel) => {
      return channel.sel === true;
    });

    const selSub = selChannel[0].subs.filter((sub) => {
      return sub.sel === true;
    });

    recip = "#" + selSub[0].title;
  }

  return (
    <div className={styles.messageinputbox}>
      <div className="w-100 d-flex align-items-center">
        <div>
          <i className="fa-solid fa-circle-plus"></i>
        </div>

        <div className="w-100">
          <Input
            st="messagebox"
            id={recipient[0].id}
            ph={`Message ${recip}`}
            type={type}
          />
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
