import React, {useContext, useState} from "react";
import {Row, Col, List, Layout, Input, Button} from "antd";
import ChatInput from "../../../../pages/chats/ChatInput/ChatInput";
import Messages from "../../../../pages/chats/Messages/Messages";
import { ChatContext } from "../../../../context/ChatContext";
const {Header, Content, Footer} = Layout;

export const ChatPortion = () => {
  return (
    <>
      <Col
        lg={12}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width={100} src="/assets/dropdownIcon/message.svg" />
        <p>Messages sent and received will be shown here</p>
      </Col>
    </>
  );
};

export const ChatPortion2 = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const { data } = useContext(ChatContext);

  const handleSend = () => {
    if (message.trim() === "") return;
    setMessages([...messages, {id: Date.now(), text: message}]);
    setMessage("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };
  return (
    <>
      <Col
        lg={12}
        style={{
          display: "flex",
          flexDirection: "column",
          // columnGap: 20,
        }}
      >
        <div style={{marginLeft: 15, lineHeight: 1}}>

          <h1>{data?.user?.displayName}</h1>
          <p>{data?.user?.displayName ? "Online" : ""}</p>
        </div>

        <div style={{height: 2, backgroundColor: "lightgrey"}}></div>

        {/* Content */}
        <Content className="content">
          <Messages />
        </Content>

        {/* Input and Button */}
        <Row style={{display: "flex", gap: 20}}>
          <Col>
          <ChatInput />
         </Col>
        </Row>
      </Col>
    </>
  );
};
