import React, {useState} from "react";
import {Avatar, Row, Col, Dropdown, Space} from "antd";
import chats from "./chats.json";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import "./Chat.css";
import {
  ChatPortion,
  ChatPortion2,
} from "../../components/common-component/dynamic/chat-portion/ChatPortion";

const Chat = () => {
  const [chat, setChat] = useState(false);
  return (
    <>
      <Row style={{marginLeft: 100}}>
        <Col lg={6} xs={6}>
          <h1>Messages</h1>

          <Row justify="space-between">
            {/* left side */}
            {chats.chats.map((val) => {
              return (
                <>
                 <Col
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 10,
                      cursor:"pointer"
                    }}
                    onClick={() => setChat(true)}
                  >
                    <Avatar size={74} src={val.img} />
                    <div >
                      <h1>{val.name}</h1>
                      <p>{val.msg}</p>
                      <p>{val.time}</p>
                    </div>
                  </Col>
                 

                  {/* Right side */}
                  <Col>
                    {/*  */}
                    <img
                      // src="/assets/dropdownIcon/dropdownImg.svg"
                      src={val.dropdownImg}
                      style={{marginTop: 25,}}
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
            backgroundColor: "#7A7777",
            marginLeft: 20,
          }}
        ></div>

        {/* <ChatPortion /> */}

        {/* <ChatPortion2 /> */}
        {chat == false ? <ChatPortion /> : <ChatPortion2 />}
        {/* <Col 
          lg={12}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img width={100} src="/assets/dropdownIcon/message.svg" />
          <p>Messages sent and received will be shown here</p>
        </Col> */}
        <div
          style={{
            width: 2,
            // height: 100,
            backgroundColor: "#7A7777",
            // marginLeft: 20,
          }}
        ></div>
        <Col lg={6} xs={6}></Col>
      </Row>
    </>
  );
};

export default Chat;
