import React, { useState } from "react";
import {Avatar, Row, Col, List, Layout, Input, Button} from "antd";
const {Header, Content, Footer} = Layout;
import chats from "./chats.json";
import "./Chat.css";

const ChatMsg = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

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
      <Row justify="center">
        <Col lg={5} xs={5}>
          <h1>Messages</h1>

          <Row style={{display: "flex", flexDirection: "column"}}>
            {/* left side */}
            {chats.chats.map((val) => {
              return (
                <>
                  <Col
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 10,
                    }}
                  >
                    <Avatar size={64} src={val.img} />
                    <div>
                      <h1 className="name_heading">{val.name}</h1>
                      <p className="msg_para">{val.msg}</p>
                      <p className="time_para">{val.time}</p>
                    </div>
                  </Col>

                  {/* Right side */}
                  <Col style={{display: "flex", justifyContent: "flex-end"}}>
                    <img
                      // src="/assets/dropdownIcon/dropdownImg.svg"
                      src={val.dropdownImg}
                      // style={{marginTop: 25}}
                    />
                  </Col>
                </>
              );
            })}
          </Row>
        </Col>

        <div
          style={{
            width: 2,
            // height: 100,
            backgroundColor: "lightgrey",
            marginLeft: 20,
          }}
        ></div>

        <Col
          lg={14}
          xs={14}
          style={{
            display: "flex",
            flexDirection: "column",
            // columnGap: 20,
          }}
        >
          <div style={{marginLeft: 15, lineHeight: 1}}>
            <h1>Navena</h1>
            <p>Online</p>
          </div>

          <div style={{height: 2, backgroundColor: "lightgrey"}}></div>

          {/* Content */}
          <Content className="content">
            <List
              className="list"
              dataSource={messages}
              renderItem={(item) => <List.Item>{item.text}</List.Item>}
            />
          </Content>

          {/* Input and Button */}
          <Row style={{display: "flex", gap: 50}}>
            <Col>
              <Input placeholder="Enter Type here" style={{width: 500}}
               value={message}
               onChange={(event) => setMessage(event.target.value)}
               onKeyPress={handleKeyPress} />
            </Col>

            <Col>
              <Button onClick={handleSend}>Send</Button>
            </Col>
          </Row>
        </Col>
        <div
          style={{
            width: 2,
            // height: 100,
            backgroundColor: "lightgrey",
            // marginLeft: 20,
          }}
        ></div>

        <Col lg={5} xs={5}></Col>
      </Row>
    </>
  );
};

export default ChatMsg;
