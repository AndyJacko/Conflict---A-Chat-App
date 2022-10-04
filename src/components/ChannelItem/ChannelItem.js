import React, { useState } from "react";

import styles from "./ChannelItem.module.css";

const ChannelItem = ({ channel }) => {
  const [open, setOpen] = useState(false);

  const onOpenHandler = () => {
    setOpen(!open);
  };

  return (
    <div className={`w-100 d-flex align-items-center ${styles.channelitem}`}>
      {!open && (
        <div className={styles.channel} onClick={onOpenHandler}>
          <i className="fa-solid fa-angle-right"></i>
          {channel.title}
        </div>
      )}

      {open && (
        <div>
          <div className={styles.channel} onClick={onOpenHandler}>
            <i className="fa-solid fa-angle-down"></i>
            {channel.title}
          </div>
          <div className={styles.list}>
            {channel.subs.map((sub) => {
              return (
                <div className={styles.sub} key={sub.id}>
                  <div>
                    <i className="fa-solid fa-hashtag"></i>
                  </div>
                  <div>{sub.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChannelItem;
