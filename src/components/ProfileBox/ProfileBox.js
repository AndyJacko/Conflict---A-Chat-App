import React from "react";

import styles from "./ProfileBox.module.css";

const ProfileBox = () => {
  return (
    <div className={styles.profilebox}>
      <div className={styles.profileinfo}>
        <div>
          <img src="images/profileicons/andyjacko.png" alt="Andy Jacko" />
        </div>
        <div className={styles.profilename}>
          <div className="fw-bold text-white">AndyJacko</div>
          <div className={styles.profilenum}>#3354</div>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <div className={styles.profileicon}>
          <i className="fa-solid fa-microphone"></i>
        </div>

        <div className={styles.profileicon}>
          <i className="fa-solid fa-headphones"></i>
        </div>

        <div className={styles.profileicon}>
          <i className="fa-solid fa-gear"></i>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
