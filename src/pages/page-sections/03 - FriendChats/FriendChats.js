import React, { useContext } from "react";

import PageContext from "../../../store/pageContext";
import MemberItem from "../../../components/MemberItem/MemberItem";
import ProfileBox from "../../../components/ProfileBox/ProfileBox";
import Input from "../../../components/UI/Input/Input";

import styles from "./FriendChats.module.css";

const FriendChats = () => {
  const pageCtx = useContext(PageContext);

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

          {pageCtx.data.friends.map((friend) => {
            return (
              <MemberItem
                key={friend.id}
                id={friend.id}
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
