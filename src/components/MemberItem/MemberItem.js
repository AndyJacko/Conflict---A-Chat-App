import React from "react";

import ImageIcon from "../UI/ImageIcon/ImageIcon";

import styles from "./MemberItem.module.css";

const MemberItem = ({ img, name, sel, status }) => {
  return (
    <div className={`${styles.memberitem} ${sel ? styles.selected : null}`}>
      <div>
        <ImageIcon
          img={`images/profileicons/${img}`}
          name={name}
          status={status}
          sel={sel}
        />
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default MemberItem;
