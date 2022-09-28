import React from "react";

import styles from "./FriendChats.module.css";

import MemberItem from "../../../components/MemberItem/MemberItem";
import ProfileBox from "../../../components/ProfileBox/ProfileBox";

const DUMMY_FRIENDS = [
  { id: 1, name: "Darth Vader", img: "" },
  { id: 2, name: "Green Goblin", img: "" },
  { id: 3, name: "Kingpin", img: "" },
  { id: 4, name: "Lex Luthor", img: "" },
];

const FriendChats = () => {
  return (
    <>
      <div>
        <div className={styles.friendsheader}>search box</div>

        <div className={styles.friendslist}>
          <MemberItem />
          <MemberItem />

          <div className="d-flex justify-content-between">
            <div>Direct Messages</div>
            <div>+</div>
          </div>

          {DUMMY_FRIENDS.map((friend) => {
            return (
              <MemberItem id={friend.id} name={friend.name} img={friend.img} />
            );
          })}
        </div>
      </div>

      <ProfileBox />
    </>
  );
};

export default FriendChats;
