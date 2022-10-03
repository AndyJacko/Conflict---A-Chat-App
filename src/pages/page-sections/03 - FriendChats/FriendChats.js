import React from "react";

import MemberItem from "../../../components/MemberItem/MemberItem";
import ProfileBox from "../../../components/ProfileBox/ProfileBox";
import Input from "../../../components/UI/Input/Input";

import styles from "./FriendChats.module.css";

const DUMMY_FRIENDS = [
  {
    id: 1,
    name: "Darth Vader",
    img: "darthvader.png",
    sel: true,
    status: "online",
  },
  {
    id: 2,
    name: "Green Goblin",
    img: "greengoblin.png",
    sel: false,
    status: "idle",
  },
  { id: 3, name: "Kingpin", img: "kingpin.png", sel: false, status: "dnd" },
  {
    id: 4,
    name: "Lex Luthor",
    img: "lexluthor.png",
    sel: false,
    status: "offline",
  },
];

const FriendChats = () => {
  return (
    <>
      <div>
        <div className={styles.friendsheader}>
          <Input st="friendchats" ph="Find or start a conversation" />
        </div>

        <div className={styles.friendslist}>
          <MemberItem name={"Friends"} img={"friends.png"} />
          <MemberItem name={"Nitro"} img={"nitro.png"} />

          <div className="d-flex justify-content-between mt-4 mb-1">
            <div className={styles.dms}>Direct Messages</div>
            <div className={styles.newchat}>
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>

          {DUMMY_FRIENDS.map((friend) => {
            return (
              <MemberItem
                key={friend.id}
                name={friend.name}
                img={friend.img}
                sel={friend.sel}
                status={friend.status}
              />
            );
          })}
        </div>
      </div>

      <ProfileBox />
    </>
  );
};

export default FriendChats;
