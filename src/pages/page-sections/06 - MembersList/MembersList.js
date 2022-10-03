import React from "react";

import MemberItem from "../../../components/MemberItem/MemberItem";

import styles from "./MembersList.module.css";

const DUMMY_ROLES = [
  { id: 1, title: "admin" },
  { id: 2, title: "online" },
  { id: 3, title: "offline" },
];

const DUMMY_MEMBERS = [
  {
    id: 1,
    name: "Darth Vader",
    img: "darthvader.png",
    sel: true,
    status: "online",
    role: "admin",
  },
  {
    id: 2,
    name: "Green Goblin",
    img: "greengoblin.png",
    sel: false,
    status: "idle",
    role: "online",
  },
  {
    id: 3,
    name: "Kingpin",
    img: "kingpin.png",
    sel: false,
    status: "dnd",
    role: "online",
  },
  {
    id: 4,
    name: "Lex Luthor",
    img: "lexluthor.png",
    sel: false,
    status: "offline",
    role: "offline",
  },
];

const MembersList = () => {
  return (
    <div>
      {DUMMY_ROLES.map((role) => {
        return (
          <div key={role.id}>
            <div className={`d-flex align-items-center ${styles.membergroup}`}>
              {role.title}&nbsp;&nbsp;<i className="fa-solid fa-minus"></i>
              &nbsp;&nbsp;
              {DUMMY_MEMBERS.reduce(
                (count, item) => count + (item.role === role.title),
                0
              )}
            </div>

            <div
              className={`${styles.members} ${
                role.title === "offline" ? styles.offline : null
              }`}
            >
              {DUMMY_MEMBERS.map((member) => {
                if (member.role === role.title) {
                  return (
                    <MemberItem
                      key={member.id}
                      img={member.img}
                      name={member.name}
                      status={member.status}
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MembersList;
