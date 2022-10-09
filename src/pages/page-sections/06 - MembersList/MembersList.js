import React, { useContext } from "react";

import PageContext from "../../../store/pageContext";
import MemberItem from "../../../components/MemberItem/MemberItem";

import styles from "./MembersList.module.css";

const MembersList = () => {
  const pageCtx = useContext(PageContext);

  const server = pageCtx.data.servers.filter((server) => {
    return server.id === pageCtx.activeServer;
  });

  return (
    <div>
      {server[0] && (
        <>
          {server[0].roles.map((role) => {
            return (
              <div key={role.id}>
                <div
                  className={`d-flex align-items-center ${styles.membergroup}`}
                >
                  {role.title}&nbsp;&nbsp;<i className="fa-solid fa-minus"></i>
                  &nbsp;&nbsp;
                  {server[0].members.reduce(
                    (count, item) => count + (item.role === role.id),
                    0
                  )}
                </div>

                <div
                  className={`${styles.members} ${
                    role.title === "offline" ? styles.offline : null
                  }`}
                >
                  {server[0].members.map((member) => {
                    if (member.role === role.id) {
                      return (
                        <MemberItem
                          key={member.id}
                          img={member.img}
                          name={member.name}
                          status={member.status}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default MembersList;
