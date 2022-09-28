import React from "react";

import styles from "./PageHeader.module.css";

const PageHeader = () => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className={styles.brandname}>Conflict</div>
      <div className="d-flex">
        <div className={`${styles.icon} ${styles.minfull}`}>
          <i className="fa-solid fa-minus"></i>
        </div>
        <div className={`${styles.icon} ${styles.minfull}`}>
          <i className="fa-regular fa-square"></i>
        </div>
        <div className={`${styles.icon} ${styles.close}`}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
