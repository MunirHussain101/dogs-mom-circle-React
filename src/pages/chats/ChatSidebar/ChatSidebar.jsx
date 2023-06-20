import React, {useContext, useEffect, useState} from "react";
import {Avatar, Row, Col, Dropdown, message} from "antd";
import {doc, collection, onSnapshot, deleteDoc} from "firebase/firestore";
import "./ChatSidebar.css";
import {
  ChatPortion,
  ChatPortion2,
} from "../../../components/common-component/dynamic/chat-portion/ChatPortion";
import Search from "../Search/Search";
import {AuthContext} from "../../../context/AuthContext";
import {ChatContext} from "../../../context/ChatContext";
import {db} from "../../../api/firebase";
import {LazyLoadImage} from "react-lazy-load-image-component";

const ChatSidebar = ({socket}) => {
  const [chat, setChat] = useState(false);
  const [chats, setChats] = useState([]);
  const [messageApi, contextHolder] = message.useMessage()
  const {currentUser} = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    console.log({abc: currentUser.uid})
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const [targetUser, setTargetUser] = useState('')
  const handleSelect = (u) => {
    setTargetUser(u.uid)
    dispatch({type: "CHANGE_USER", payload: u});
  };

  const handleDeleteChat = async (chatId) => {
    try {
      await deleteDoc(doc(db, 'userChats', chatId));
      setChats(prevState => {
        const updatedChats = {...prevState};
        delete updatedChats[chatId];
        return updatedChats;
      });
      messageApi.open({
        type:"success",
        content: 'Chat deleted successfully'
      });
    } catch (error) {
      messageApi.open({
        type:"error",
        content:'Error deleting chat',
      })
    }
  };


  const items = [
    {
      key: "1",
      label: <p>Delete</p>,
    },
  ];
  function getTimeAgo(timestamp) {
    const now = new Date().getTime();
    const seconds =
      (now - timestamp?.seconds * 1000 - timestamp?.nanoseconds / 1000000) /
      1000;
    const minutes = Math.floor(seconds / 60);

    if (minutes === 0) {
      return "just now";
    } else if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else {
      const hours = Math.floor(minutes / 60);
      if (hours < 24) {
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
      } else {
        const days = Math.floor(hours / 24);
        return `${days} ${days === 1 ? "day" : "days"} ago`;
      }
    }
  }
  // (function i() {
  //   Object.entries(chats).map((chat) => console.log({chat[1]?.userInfo}))
  // })()
  // console.log({chats: chats})
  return (
    <>
      {contextHolder}
      <Row justify="center" style={{minHeight:"80vh"}}>
        <Col lg={8} xs={6} >
          <h1>Messages</h1>
          <Search />

          {Object.entries(chats)
            ?.sort((a, b) => b[1].date - a[1].date)
            .map((chat, index) => {
              return (
                <>
                  <Row justify="space-between">
                    <Col
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        marginTop: 20,
                        // height:100
                      }}
                      key={chat[0]}
                      onClick={() => handleSelect(chat[1].userInfo)}
                    >
                      <Avatar
                        size={70}
                        src={chat[1]?.userInfo?.photoURL}
                      />
                      <Col
                        onClick={() => setChat(true)}
                        style={{cursor: "pointer"}}
                      >
                        <h1 className="name_heading">
                          {chat[1]?.userInfo?.displayName}
                        </h1>
                        <p className="msg_para">{chat[1].lastMessage?.text}</p>
                        <p className="time_para">{getTimeAgo(chat[1]?.date)}</p>
                      </Col>
                    </Col>

                    <Col
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Dropdown
                        menu={{
                          items,
                        }}
                      > 
                        <a onClick={() => handleDeleteChat(chat[index])}>
                        <LazyLoadImage src="/assets/dropdownIcon/dropdownImg.svg"  />
                        </a>
                      </Dropdown>
                    </Col>
                  </Row>
                </>
              );
            })}
        </Col>

        <div
          style={{
            width: 2,
            backgroundColor: "#7A7777",
            marginLeft: 20,
          }}
        ></div>

        {chat == false ? <ChatPortion /> : <ChatPortion2 socket={socket} targetUser={targetUser} />}
        <div
          style={{
            width: 2,
            backgroundColor: "#7A7777",
          }}
        ></div>
      </Row>
    </>
  );
};

export default ChatSidebar;
