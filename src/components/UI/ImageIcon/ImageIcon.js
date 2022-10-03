import React from "react";

import styles from "./ImageIcon.module.css";

const ImageIcon = ({ img, name, sel, status }) => {
  let statusIcon;
  switch (status) {
    case "online":
      statusIcon = <i className={`fa-solid fa-circle ${styles.online}`}></i>;
      break;
    case "offline":
      statusIcon = (
        <i className={`fa-solid fa-circle-dot ${styles.offline}`}></i>
      );
      break;
    case "idle":
      statusIcon = <i className={`fa-solid fa-moon ${styles.idle}`}></i>;
      break;
    case "dnd":
      statusIcon = <i className={`fa-solid fa-circle-minus ${styles.dnd}`}></i>;
      break;
    default:
      statusIcon = null;
      break;
  }

  return (
    <div className={styles.imageicon}>
      <img src={img} alt={name} />
      {}
      <div className={`${styles.status} ${sel ? styles.selected : null}`}>
        {statusIcon}
      </div>
    </div>
  );
};

export default ImageIcon;
