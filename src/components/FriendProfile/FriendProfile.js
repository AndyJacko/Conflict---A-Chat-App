import React from "react";

import styles from "./FriendProfile.module.css";

const FriendProfile = ({ img, name }) => {
  return (
    <div className={styles.friendprofile}>
      <div>
        <img src={`images/profileicons/${img}`} alt={name} />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.beginning}>
        This is the beginning of your direct message history with @DarthVader
      </div>
      <div className={styles.server}>
        <div>
          <img src="/images/servericons/cn41.png" alt="Mutual Server Icon" />
        </div>
        <div className={styles.mutual}>1 Mutual Server</div>
        <div className={`${styles.button} ${styles.addfriend}`}>Add Friend</div>
        <div className={`${styles.button} ${styles.block}`}>Block</div>
        <div className={`${styles.button} ${styles.spam}`}>Report Spam</div>
      </div>
    </div>
  );
};

export default FriendProfile;
