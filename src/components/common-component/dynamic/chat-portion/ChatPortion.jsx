import React, {useContext, useState} from "react";
import {Row, Col, Layout, Button} from "antd";
import ChatInput from "../../../../pages/chats/ChatInput/ChatInput";
import Messages from "../../../../pages/chats/Messages/Messages";
import {ChatContext} from "../../../../context/ChatContext";
import {LazyLoadImage} from "react-lazy-load-image-component";
const { Content } = Layout;

export const ChatPortion = () => {
  return (
    <>
      <Col
        lg={12}
        xs={24}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LazyLoadImage width={100} src="/assets/dropdownIcon/message.svg" />
        <p>Messages sent and received will be shown here</p>
      </Col>
    </>
  );
};

export const ChatPortion2 = () => {
  const {data} = useContext(ChatContext);
  
  return (
    <>
      <Col
        lg={12}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        xs={24}
      >
        <Row justify="space-between">
          <Col>
            <div style={{marginLeft: 15, lineHeight: 1}}>
              <h1>{data?.user?.displayName}</h1>
              <p>{data?.user?.displayName ? "Online" : ""}</p>
            </div>
          </Col>
          <Col style={{marginTop:25, marginRight:50, marginLeft:50}}>
            <Button>Request to host</Button>
          </Col>
        </Row>

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
