import React, { useContext } from "react";

import PageContext from "../../../store/pageContext";
import ServerIcon from "../../../components/ServerIcon/ServerIcon";

import styles from "./ServerList.module.css";

const ServerList = () => {
  const pageCtx = useContext(PageContext);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div>
        <ServerIcon
          id={1}
          name="Direct Messages"
          img="conflictlogo.png"
          type={1}
        />
        <div className={styles.homespacer}></div>

        {pageCtx.data.servers.map((server) => {
          return (
            <ServerIcon
              key={server.id}
              id={server.id}
              name={server.name}
              img={server.img}
              type={server.type}
            />
          );
        })}

        <ServerIcon name="Add a Server" img="addserver.png" />

        <ServerIcon name="Explore Public Servers" img="exploreservers.png" />
      </div>
    </div>
  );
};

export default ServerList;
