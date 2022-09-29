import React from "react";

import styles from "./Input.module.css";

const Input = ({ ph, st }) => {
  let inptstyle;

  switch (st) {
    case "friendchats":
      inptstyle = styles.friendchats;
      break;
    case "messagebox":
      inptstyle = styles.friendchats;
      break;
    default:
      break;
  }

  return <input className={inptstyle} type="text" placeholder={ph} />;
};

export default Input;
