import React from "react";

import styles from "./ChannelItem.module.css";

const ChannelItem = () => {
  return (
    <div className={`d-flex align-items-center ${styles.channelitem}`}>
      <i className="fa-solid fa-angle-right"></i>Welcome
    </div>
  );
};

export default ChannelItem;
