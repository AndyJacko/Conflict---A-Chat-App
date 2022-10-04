import React from "react";

import styles from "./ServerProfile.module.css";

const ServerProfile = ({ name }) => {
  return (
    <div className={styles.serverprofile}>
      <div>
        <i className="fa-solid fa-hashtag"></i>
      </div>
      <div className={styles.name}>Welcome to #{name}</div>
      <div className={styles.beginning}>
        This is the start of #{name} channel.
      </div>
    </div>
  );
};

export default ServerProfile;
