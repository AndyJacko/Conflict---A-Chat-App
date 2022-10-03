import React, { useContext } from "react";

import PageContext from "../../store/pageContext";

import styles from "./ServerIcon.module.css";

const ServerIcon = ({ id, img, name, type }) => {
  const pageCtx = useContext(PageContext);

  const onPageChange = () => {
    pageCtx.onPageChange(id, type);
  };

  return (
    <div
      className={`${styles.icon} ${
        pageCtx.activeServer === id ? styles.selected : null
      }`}
      onClick={onPageChange}
    >
      <img src={`images/servericons/${img}`} alt={name} />
    </div>
  );
};

export default ServerIcon;
