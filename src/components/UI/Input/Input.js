import React, { useContext, useRef } from "react";

import PageContext from "../../../store/pageContext";

import styles from "./Input.module.css";

const Input = ({ id, ph, st, type }) => {
  const pageCtx = useContext(PageContext);

  const input_ref = useRef();

  let inptstyle;

  switch (st) {
    case "friendchats":
      inptstyle = styles.friendchats;
      break;
    case "messagebox":
      inptstyle = styles.messagebox;
      break;
    case "search":
      inptstyle = styles.search;
      break;
    default:
      break;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const chat = input_ref.current.value;
    input_ref.current.value = "";

    pageCtx.onChatSubmit(chat, id, type);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        className={inptstyle}
        type="text"
        placeholder={ph}
        ref={input_ref}
      />
    </form>
  );
};

export default Input;
