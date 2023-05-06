import React, {useContext, useEffect, useRef, useState} from "react";
import {Row, Col, Spin} from "antd";
import {AuthContext} from "../../../context/AuthContext";
import {ChatContext} from "../../../context/ChatContext";
import "./Message.css";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);
  const [loading, setLoading] = useState(false);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: "smooth"});
  }, [message]);

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

  function getTime(timestampObj) {
    const dateObj = new Date(timestampObj.seconds * 1000);
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime =
      (hours % 12 || 12) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      " " +
      ampm;
    // console.log(formattedTime); // Output: "09:52 PM"
    return formattedTime;
  }

  return (
    <Row>
      <Col lg={24}>
        <div
          ref={ref}
          className={`message ${
            message.senderId === currentUser.uid ? "owner" : "owner_2"
          }`}
        >
          <div className="messageInfo">
            <LazyLoadImage
              src="https://images.unsplash.com/photo-1632498301446-5f78baad40d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwYW5kJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80"
              // src={
              //   message.senderId === currentUser.uid
              //     ? currentUser.photoURL
              //     : data.user.photoURL
              // }
              alt=""
            />
          </div>
          <div className={message.img ? "messageContent_2" : "messageContent"}>
            <p>{message.text}</p>
            <span>{getTime(message?.date)}</span>
            {message.img && <LazyLoadImage src={message.img} alt="" />}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Message;
