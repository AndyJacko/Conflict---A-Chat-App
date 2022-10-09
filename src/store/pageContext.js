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
          sel: true,
          subs: [
            {
              id: 1,
              title: "announcements",
              sel: false,
              messages: [
                {
                  id: 1,
                  time: "14:02",
                  user: "Duke",
                  chat: "Welcome to the server, I will post any important stuff here.",
                },
              ],
            },
            {
              id: 2,
              title: "Introduce-Yourself",
              sel: true,
              messages: [
                {
                  id: 1,
                  time: "11:06",
                  user: "Preston",
                  chat: "Hi I'm Preston, I've got something a little different for you.",
                },
                {
                  id: 2,
                  time: "13:45",
                  user: "Dogmeat",
                  chat: "Woof...Woof...",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Fallout: London",
          sel: false,
          subs: [
            {
              id: 1,
              title: "Coming-Soon",
              sel: false,
              messages: [],
            },
            {
              id: 2,
              title: "Known-Bugs",
              sel: false,
              messages: [],
            },
            {
              id: 3,
              title: "Request-A-Feature",
              sel: false,
              messages: [],
            },
          ],
        },
      ],
      members: [
        {
          id: 1,
          name: "Duke",
          img: "fallout/duke.png",
          status: "online",
          role: 1,
        },
        {
          id: 2,
          name: "Foxy Roxy",
          img: "fallout/roxy.png",
          status: "idle",
          role: 4,
        },
        {
          id: 3,
          name: "Preston Garvey",
          img: "fallout/preston.png",
          status: "dnd",
          role: 3,
        },
        {
          id: 4,
          name: "Ann Codman",
          img: "fallout/anncodman.png",
          status: "offline",
          role: 5,
        },
        {
          id: 5,
          name: "Travis Miles",
          img: "fallout/travismiles.png",
          status: "offline",
          role: 5,
        },
        {
          id: 6,
          name: "Bobbi No-Nose",
          img: "fallout/bobbinonose.png",
          status: "offline",
          role: 5,
        },
        {
          id: 7,
          name: "Wayne Delancy",
          img: "fallout/waynedelancy.png",
          status: "offline",
          role: 5,
        },
        {
          id: 8,
          name: "Codsworth",
          img: "fallout/codsworth.png",
          status: "idle",
          role: 4,
        },
        {
          id: 9,
          name: "Dogmeat",
          img: "fallout/dogmeat.png",
          status: "online",
          role: 4,
        },
        {
          id: 10,
          name: "Kasumi Nakago",
          img: "fallout/kasuminakago.png",
          status: "idle",
          role: 2,
        },
      ],
      roles: [
        { id: 1, title: "head of department" },
        { id: 2, title: "public relations" },
        { id: 3, title: "3d artist" },
        { id: 4, title: "online" },
        { id: 5, title: "offline" },
      ],
    },
    {
      id: 3,
      type: 2,
      name: "Session: Skate Sim",
      img: "session.png",
      channels: [
        {
          id: 1,
          title: "Session Info",
          sel: true,
          subs: [
            {
              id: 1,
              title: "welcome",
              sel: true,
              messages: [
                {
                  id: 1,
                  time: "23:59",
                  user: "Donovan Strain",
                  chat: "Welcome skaters. Don't waste time online. GO SKATE!",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Session",
          sel: false,
          subs: [
            {
              id: 1,
              title: "skate-chat",
              sel: false,
              messages: [],
            },
            {
              id: 2,
              title: "clips-and-pics",
              sel: false,
              messages: [],
            },
            {
              id: 3,
              title: "videos",
              sel: false,
              messages: [],
            },
          ],
        },
      ],
      members: [
        {
          id: 1,
          name: "Billy Marks",
          img: "session/billymarks.png",
          status: "online",
          role: 2,
        },
        {
          id: 2,
          name: "Daewon Song",
          img: "session/daewonsong.png",
          status: "dnd",
          role: 3,
        },
        {
          id: 3,
          name: "Dane Burman",
          img: "session/daneburman.png",
          status: "idle",
          role: 3,
        },
        {
          id: 4,
          name: "Donovan Strain",
          img: "session/donovanstrain.png",
          status: "idle",
          role: 1,
        },
        {
          id: 5,
          name: "Annie Guglia",
          img: "session/annieguglia.png",
          status: "offline",
          role: 4,
        },
        {
          id: 6,
          name: "AntiFerg",
          img: "session/antiferg.png",
          status: "offline",
          role: 4,
        },
        {
          id: 7,
          name: "Ribsman",
          img: "session/ribsman.png",
          status: "offline",
          role: 4,
        },
      ],
      roles: [
        { id: 1, title: "admin" },
        { id: 2, title: "regular" },
        { id: 3, title: "goofy" },
        { id: 4, title: "offline" },
      ],
    },
    {
      id: 4,
      type: 2,
      name: "Half-Life",
      img: "halflife.png",
      channels: [
        {
          id: 1,
          title: "Server Info",
          sel: true,
          subs: [
            {
              id: 1,
              title: "welcome",
              sel: true,
              messages: [
                {
                  id: 1,
                  time: "12:00",
                  user: "G Man",
                  chat: "We've been rather busy in your absence, Mister Freeman.",
                },
                {
                  id: 2,
                  time: "12:05",
                  user: "Gordon Freeman",
                  chat: "My hazard suit itches.",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Half-Life",
          sel: false,
          subs: [
            {
              id: 1,
              title: "chat",
              sel: false,
              messages: [],
            },
            {
              id: 2,
              title: "clips-and-pics",
              sel: false,
              messages: [],
            },
            {
              id: 3,
              title: "bug reports",
              sel: false,
              messages: [],
            },
          ],
        },
        {
          id: 3,
          title: "Half-Life 2",
          sel: false,
          subs: [
            {
              id: 1,
              title: "chat",
              sel: true,
              messages: [],
            },
            {
              id: 2,
              title: "clips-and-pics",
              sel: false,
              messages: [],
            },
            {
              id: 3,
              title: "bug reports",
              sel: false,
              messages: [],
            },
          ],
        },
        {
          id: 4,
          title: "Half-Life 2: EP1",
          sel: false,
          subs: [
            {
              id: 1,
              title: "chat",
              sel: true,
              messages: [],
            },
            {
              id: 2,
              title: "clips-and-pics",
              sel: false,
              messages: [],
            },
            {
              id: 3,
              title: "bug reports",
              sel: false,
              messages: [],
            },
          ],
        },
        {
          id: 5,
          title: "Half-Life 2: EP2",
          sel: false,
          subs: [
            {
              id: 1,
              title: "chat",
              sel: true,
              messages: [],
            },
            {
              id: 2,
              title: "clips-and-pics",
              sel: false,
              messages: [],
            },
            {
              id: 3,
              title: "bug reports",
              sel: false,
              messages: [],
            },
          ],
        },
      ],
      members: [
        {
          id: 1,
          name: "G Man",
          img: "halflife/gman.png",
          status: "dnd",
          role: 1,
        },
        {
          id: 2,
          name: "Gordon Freeman",
          img: "halflife/gman.png",
          status: "online",
          role: 2,
        },
        {
          id: 3,
          name: "Barney Calhoun",
          img: "halflife/barney.png",
          status: "idle",
          role: 2,
        },
        {
          id: 4,
          name: "Eli Vance",
          img: "halflife/elivance.png",
          status: "online",
          role: 2,
        },
        {
          id: 5,
          name: "Combine Soldier",
          img: "halflife/combinesoldier.png",
          status: "online",
          role: 3,
        },
        {
          id: 6,
          name: "Combine Grunt",
          img: "halflife/combinegrunt.png",
          status: "idle",
          role: 3,
        },
        {
          id: 7,
          name: "Alyx Vance",
          img: "halflife/alyxvance.png",
          status: "offline",
          role: 4,
        },
        {
          id: 8,
          name: "Isaac Kleiner",
          img: "halflife/isaackleiner.png",
          status: "offline",
          role: 4,
        },
        {
          id: 9,
          name: "Wallace Breen",
          img: "halflife/wallacebreen.png",
          status: "offline",
          role: 4,
        },
        {
          id: 10,
          name: "Judith Mossman",
          img: "halflife/judithmossman.png",
          status: "offline",
          role: 4,
        },
        {
          id: 11,
          name: "Father Grigori",
          img: "halflife/fathergrigori.png",
          status: "offline",
          role: 4,
        },
      ],
      roles: [
        { id: 1, title: "admin" },
        { id: 2, title: "black mesa" },
        { id: 3, title: "combine" },
        { id: 4, title: "offline" },
      ],
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
        {
          id: 1,
          time: "08:02",
          user: "Green Goblin",
          chat: "Spiderman is such a dick",
        },
        {
          id: 2,
          time: "08:03",
          user: "AndyJacko",
          chat: "Wot has he done now?",
        },
        {
          id: 3,
          time: "08:07",
          user: "Green Goblin",
          chat: "Webbed up half my mansion",
        },
        {
          id: 4,
          time: "08:07",
          user: "Green Goblin",
          chat: "Gonna take ages to clean all this shit off the walls :(",
        },
      ],
    },
    {
      id: 3,
      name: "Kingpin",
      img: "kingpin.png",
      sel: false,
      status: "dnd",
      messages: [
        {
          id: 1,
          time: "10:00",
          user: "Kingpin",
          chat: "You should be my sidekick mate",
        },
        {
          id: 2,
          time: "10:02",
          user: "AndyJacko",
          chat: "Na mate...you literally stole my bald and mean look I had going on...",
        },
        {
          id: 3,
          time: "10:05",
          user: "Kingpin",
          chat: "Hahaha I look better in a suit tho",
        },
        {
          id: 4,
          time: "10:19",
          user: "AndyJacko",
          chat: "I have never even owned a suit...",
        },
      ],
    },
    {
      id: 4,
      name: "Lex Luthor",
      img: "lexluthor.png",
      sel: false,
      status: "offline",
      messages: [
        {
          id: 1,
          time: "19:47",
          user: "Lex Luthor",
          chat: "You still got that kryptonite bro?",
        },
        {
          id: 2,
          time: "19:47",
          user: "AndyJacko",
          chat: "Ye mate...tryin to piss Superman off again?",
        },
        {
          id: 3,
          time: "19:48",
          user: "Lex Luthor",
          chat: "All day, every day bro.",
        },
        {
          id: 4,
          time: "19:52",
          user: "AndyJacko",
          chat: "No worries...I will sort it out n drop it off later...",
        },
        { id: 5, time: "19:53", user: "Lex Luthor", chat: "Buzzin. Nice one." },
      ],
    },
  ],
};

const PageContext = React.createContext({
  activePageType: 1,
  activeServer: 1,
  data: DUMMY_DATA,
  onPageChange: () => {},
  onChannelChange: () => {},
  onFriendChange: () => {},
  onChatSubmit: () => {},
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

  const onChannelChange = (chn, subId) => {
    if (chn && subId) {
      const servers = JSON.parse(JSON.stringify(data.servers));
      const friends = JSON.parse(JSON.stringify(data.friends));

      const newServers = servers.map((server) => {
        const newServer = { ...server };

        if (server.id === activeServer) {
          const channels = [...server.channels];
          const selChannel = channels.filter((channel) => {
            if (channel.id === chn) {
              return channel;
            }
            return null;
          });

          const selChannelSubs = [...selChannel[0].subs];
          const newChannelSubs = selChannelSubs.map((sub) => {
            const subMessages = sub.messages;

            if (sub.id === subId) {
              return {
                id: sub.id,
                title: sub.title,
                messages: subMessages,
                sel: true,
              };
            }
            return {
              id: sub.id,
              title: sub.title,
              messages: subMessages,
              sel: false,
            };
          });

          const newChannels = channels.map((channel) => {
            const subChannels = channel.subs;
            if (channel.id === chn) {
              return {
                id: channel.id,
                title: channel.title,
                sel: true,
                subs: newChannelSubs,
              };
            }
            return {
              id: channel.id,
              title: channel.title,
              sel: false,
              subs: subChannels,
            };
          });

          newServer.channels = newChannels;
        }
        return newServer;
      });

      const newData = { servers: newServers, friends };

      setData(newData);
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

  const onChatSubmit = (chat, id, type) => {
    if (chat && id && type) {
      if (type === "friend") {
        const servers = JSON.parse(JSON.stringify(data.servers));
        const friends = JSON.parse(JSON.stringify(data.friends));

        const newFriends = friends.map((friend) => {
          const newFriend = { ...friend };

          const now = new Date();
          const time = now.getHours() + ":" + now.getMinutes();

          if (friend.id === id) {
            const messages = friend.messages;
            messages.push({
              id: friend.messages.length + 1,
              time: time,
              user: "AndyJacko",
              chat: chat,
            });

            newFriend.messages = messages;
          }

          return newFriend;
        });

        const newData = { servers, friends: newFriends };

        setData(newData);
      } else {
        const servers = JSON.parse(JSON.stringify(data.servers));
        const friends = JSON.parse(JSON.stringify(data.friends));

        const newServers = servers.map((server) => {
          const newServer = { ...server };

          const now = new Date();
          const time = now.getHours() + ":" + now.getMinutes();

          if (server.id === activeServer) {
            const channels = [...server.channels];
            const selChannel = channels.filter((channel) => {
              if (channel.sel === true) {
                return channel;
              }
              return null;
            });

            const selChannelSubs = [...selChannel[0].subs];
            const selSub = selChannelSubs.filter((sub) => {
              if (sub.sel === true) {
                return sub;
              }
              return null;
            });

            const selSubMessages = [...selSub[0].messages];
            selSubMessages.push({
              id: selSubMessages.length + 1,
              time: time,
              user: "AndyJacko",
              chat: chat,
            });

            const newSub = { ...selSub[0], messages: selSubMessages };
            const newChannelSubs = selChannelSubs.map((sub) => {
              if (sub.sel === true) {
                return newSub;
              }
              return sub;
            });

            const newSelChannelSubs = {
              ...selChannel[0],
              subs: newChannelSubs,
            };
            const newChannel = selChannel.map((channel) => {
              if (channel.sel === true) {
                return newSelChannelSubs;
              }
              return channel;
            });

            const newChannels = channels.map((channel) => {
              if (channel.title === newChannel[0].title) {
                return newChannel[0];
              }
              return channel;
            });

            newServer.channels = newChannels;
          }

          return newServer;
        });

        const newData = { servers: newServers, friends };

        setData(newData);
      }
    }
  };

  return (
    <PageContext.Provider
      value={{
        activePageType: activePageType,
        activeServer: activeServer,
        data: data,
        onPageChange: onPageChange,
        onChannelChange: onChannelChange,
        onFriendChange: onFriendChange,
        onChatSubmit: onChatSubmit,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
