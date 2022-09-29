import React from "react";

import ChannelItem from "../../../components/ChannelItem/ChannelItem";
import ProfileBox from "../../../components/ProfileBox/ProfileBox";

import styles from "./ServerChannels.module.css";

const ServerChannels = () => {
  return (
    <>
      <div>
        <div className={`d-flex justify-content-between ${styles.serverheader}`}>
          <div>Server Name</div>
          <div><i className="fa-solid fa-angle-down"></i></div>
        </div>

        <div className={styles.friendslist}>
          <ChannelItem />
          <ChannelItem />
          <ChannelItem />
          <ChannelItem />
          <ChannelItem />
        </div>
      </div>

      <ProfileBox />
    </>
  );
};

export default ServerChannels;
