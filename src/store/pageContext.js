import React, { useState } from "react";

const DUMMY_DATA = {
  servers: [
    {
      id: 2,
      type: 2,
      name: "Fallout: London",
      img: "fallout.png",
      channels: [
        {
          id: 1,
          title: "Welcome",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
        {
          id: 2,
          title: "Channel 1",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
        {
          id: 3,
          title: "Channel 2",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
      ],
      members: [],
      messages: [],
    },
    {
      id: 3,
      type: 2,
      name: "DitchDown 44",
      img: "dd44.png",
      channels: [
        {
          id: 1,
          title: "Welcome",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
        {
          id: 2,
          title: "Channel 1",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
        {
          id: 3,
          title: "Channel 2",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
      ],
      members: [],
      messages: [],
    },
    {
      id: 4,
      type: 2,
      name: "UK Throwers",
      img: "ukthrowers.png",
      channels: [
        {
          id: 1,
          title: "Welcome",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
        {
          id: 2,
          title: "Channel 1",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
        {
          id: 3,
          title: "Channel 2",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
      ],
      members: [],
      messages: [],
    },
    {
      id: 5,
      type: 2,
      name: "Throw Smoke",
      img: "throwsmoke.png",
      channels: [
        {
          id: 1,
          title: "Welcome",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
        {
          id: 2,
          title: "Channel 1",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
        {
          id: 3,
          title: "Channel 2",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
      ],
      members: [],
      messages: [],
    },
    {
      id: 6,
      type: 2,
      name: "CN Master 41",
      img: "cn41.png",
      channels: [
        {
          id: 1,
          title: "Welcome",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
        {
          id: 2,
          title: "Channel 1",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
        {
          id: 3,
          title: "Channel 2",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
      ],
      members: [],
      messages: [],
    },
    {
      id: 7,
      type: 2,
      name: "Session: Skate Sim",
      img: "session.png",
      channels: [
        {
          id: 1,
          title: "Welcome",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
        {
          id: 2,
          title: "Channel 1",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
        {
          id: 3,
          title: "Channel 2",
          subs: [
            { id: 1, title: "Announcements" },
            { id: 2, title: "Introduce Yourself" },
          ],
        },
      ],
      members: [],
      messages: [],
    },
  ],
  friends: [
    {
      id: 1,
      name: "Darth Vader",
      img: "darthvader.png",
      sel: true,
      status: "online",
      messages: [
        {
          id: 1,
          time: "14:02",
          user: "DarthVader",
          chat: "You should see my new Tie-Fighter",
        },
        { id: 2, time: "14:02", user: "DarthVader", chat: "Its Sick AF" },
        { id: 3, time: "14:04", user: "AndyJacko", chat: "Sweet..." },
        {
          id: 4,
          time: "14:05",
          user: "DarthVader",
          chat: "Got bare weapons too",
        },
        { id: 5, time: "14:06", user: "AndyJacko", chat: "Nice..." },
        {
          id: 6,
          time: "14:10",
          user: "DarthVader",
          chat: "May destroy a planet later. I will stream it if you want to watch.",
        },
      ],
    },
    {
      id: 2,
      name: "Green Goblin",
      img: "greengoblin.png",
      sel: false,
      status: "idle",
      messages: [
        { id: 1, time: "14:02", user: "Green Goblin", chat: "message" },
        { id: 2, time: "14:02", user: "AndyJacko", chat: "message" },
      ],
    },
    {
      id: 3,
      name: "Kingpin",
      img: "kingpin.png",
      sel: false,
      status: "dnd",
      messages: [
        { id: 1, time: "14:02", user: "Kingpin", chat: "message" },
        { id: 2, time: "14:02", user: "AndyJacko", chat: "message" },
      ],
    },
    {
      id: 4,
      name: "Lex Luthor",
      img: "lexluthor.png",
      sel: false,
      status: "offline",
      messages: [
        { id: 1, time: "14:02", user: "Lex Luthor", chat: "message" },
        { id: 2, time: "14:02", user: "AndyJacko", chat: "message" },
      ],
    },
  ],
};

const PageContext = React.createContext({
  activePageType: 1,
  activeServer: 1,
  data: DUMMY_DATA,
  onPageChange: () => {},
  onFriendChange: () => {},
});

export const PageContextProvider = ({ children }) => {
  const [activePageType, setActivePageType] = useState(1);
  const [activeServer, setActiveServer] = useState(1);
  const [data, setData] = useState(DUMMY_DATA);

  const onPageChange = (id, type) => {
    if (id && type) {
      setActivePageType(type);
      setActiveServer(id);
    }
  };

  const onFriendChange = (id) => {
    if (id) {
      const servers = JSON.parse(JSON.stringify(data.servers));
      const friends = JSON.parse(JSON.stringify(data.friends));

      const newFriends = friends.map((friend) => {
        const newFriend = { ...friend };
        const messages = friend.messages;

        newFriend.sel = false;

        if (friend.id === id) {
          newFriend.messages = messages;
          newFriend.sel = true;
        }

        return newFriend;
      });

      const newData = { servers, friends: newFriends };

      setData(newData);
    }
  };

  return (
    <PageContext.Provider
      value={{
        activePageType: activePageType,
        activeServer: activeServer,
        data: data,
        onPageChange: onPageChange,
        onFriendChange: onFriendChange,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
