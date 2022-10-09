import React, { useContext } from "react";

import PageContext from "../../../store/pageContext";
import ChannelItem from "../../../components/ChannelItem/ChannelItem";
import ProfileBox from "../../../components/ProfileBox/ProfileBox";

import styles from "./ServerChannels.module.css";

const ServerChannels = () => {
  const pageCtx = useContext(PageContext);

  const server = pageCtx.data.servers.filter((server) => {
    if (server.id === pageCtx.activeServer) {
      return server;
    }

    return null;
  });

  return (
    <>
      <div>
        <div
          className={`d-flex justify-content-between ${styles.serverheader}`}
        >
          <div>{server[0].name}</div>
          <div>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>

        {server[0] && (
          <div>
            {server[0].channels.map((channel) => {
              return <ChannelItem key={channel.id} channel={channel} />;
            })}
          </div>
        )}
      </div>

      <ProfileBox />
    </>
  );
};

export default ServerChannels;
