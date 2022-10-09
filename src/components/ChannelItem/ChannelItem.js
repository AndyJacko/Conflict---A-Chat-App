import React, { useContext, useState } from "react";

import PageContext from "../../store/pageContext";

import styles from "./ChannelItem.module.css";

const ChannelItem = ({ channel }) => {
  const [open, setOpen] = useState(false);
  const pageCtx = useContext(PageContext);

  const onOpenHandler = () => {
    setOpen(!open);
  };

  const onChannelChange = (e) => {
    pageCtx.onChannelChange(channel.id, +e.target.parentElement.id);
  };

  return (
    <div className={`d-flex align-items-center ${styles.channelitem}`}>
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
                <div
                  id={sub.id}
                  className={`${styles.sub} ${
                    sub.sel && channel.sel ? styles.selected : null
                  }`}
                  key={sub.id}
                  onClick={onChannelChange}
                >
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
