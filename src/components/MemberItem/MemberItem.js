import React, { useContext } from "react";

import PageContext from "../../store/pageContext";
import ImageIcon from "../UI/ImageIcon/ImageIcon";

import styles from "./MemberItem.module.css";

const MemberItem = ({ id, img, name, sel, status }) => {
  const pageCtx = useContext(PageContext);

  const onFriendChange = () => {
    pageCtx.onFriendChange(id);
  };

  return (
    <div
      className={`${styles.memberitem} ${sel ? styles.selected : null}`}
      onClick={onFriendChange}
    >
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
