import React, { useContext, useEffect, useState } from "react";
import Message from "../Message/Message";
import { doc, onSnapshot } from "firebase/firestore";
import { ChatContext } from "../../../context/ChatContext";
import { db } from "../../../api/firebase";
import {Col, Row} from "antd";
import "./Messages.css";



const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);


  return (
    <Row>
      <Col lg={24}>
        <div className="messages">
        {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
          
        </div>
      </Col>
    </Row>
  );
};

export default Messages;
