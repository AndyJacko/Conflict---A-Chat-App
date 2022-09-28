import React from "react";

import ServerIcon from "../../../components/ServerIcon/ServerIcon";

import styles from "./ServerList.module.css";

const DUMMY_SERVERS = [
  { id: 1, type: 1, name: "Direct Messages", img: "conflictlogo.png" },
  { id: 2, type: 2, name: "Fallout: London", img: "fallout.png" },
  { id: 3, type: 2, name: "DitchDown 44", img: "dd44.png" },
  { id: 4, type: 2, name: "UK Throwers", img: "ukthrowers.png" },
  { id: 5, type: 2, name: "Throw Smoke", img: "throwsmoke.png" },
  { id: 6, type: 2, name: "CN Master 41", img: "cn41.png" },
  { id: 7, type: 2, name: "Session: Skate Sim", img: "session.png" },
  { id: 8, type: 2, name: "Add a Server", img: "addserver.png" },
  { id: 9, type: 2, name: "Explore Public Servers", img: "exploreservers.png" },
];

const ServerList = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {DUMMY_SERVERS.map((server) => {
        if (server.type === 1) {
          return (
            <div key={server.id}>
              <ServerIcon
                id={server.id}
                name={server.name}
                img={server.img}
                type={server.type}
              />
              <div className={styles.homespacer}></div>
            </div>
          );
        } else {
          return (
            <ServerIcon
              key={server.id}
              id={server.id}
              name={server.name}
              img={server.img}
              type={server.type}
            />
          );
        }
      })}
    </div>
  );
};

export default ServerList;
