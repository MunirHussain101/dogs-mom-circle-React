import React, {useState} from "react";
import {Row, Col, List, Layout, Input, Button} from "antd";
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
        <Row style={{display: "flex", gap: 20}}>
          <Col>
            <Input
              placeholder="Enter Type here"
              style={{width: 500, marginLeft:10, backgroundColor:"#F8F8F8", borderRadius:12}}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyPress={handleKeyPress}
            />
          </Col>

          <Col>
            <Button onClick={handleSend}
            style={{background:"#EAB2BB", color:"white"}}
            >Send</Button>
          </Col>
        </Row>
      </Col>
    </>
  );
};
