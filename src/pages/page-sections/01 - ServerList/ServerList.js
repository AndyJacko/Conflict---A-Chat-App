import React from "react";

const DUMMY_SERVERS = [
  { id: 1, type: 1, name: "Direct Messages", img: "" },
  { id: 2, type: 2, name: "Fallout: London", img: "" },
  { id: 3, type: 2, name: "DitchDown 44", img: "" },
  { id: 4, type: 2, name: "UK Throwers", img: "" },
  { id: 5, type: 2, name: "Throw Smoke", img: "" },
  { id: 6, type: 2, name: "CN Master 41", img: "" },
];

const ServerList = () => {
  return (
    <div className="d-flex flex-column">
      {DUMMY_SERVERS.map((server) => {
        if (server.type === 1) {
          return <p>home</p>;
        } else {
          return <p>server</p>;
        }
      })}
    </div>
  );
};

export default ServerList;
