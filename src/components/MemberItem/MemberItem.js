import React from "react";

import styles from "./MemberItem.module.css";

const MemberItem = ({ img, name, sel }) => {
  return (
    <div className={`${styles.memberitem} ${sel ? styles.selected : null}`}>
      <div>
        <img src={`images/profileicons/${img}`} alt={name} />
      </div>
      <div>{name}</div>
    </div>
  );
};

export default MemberItem;
