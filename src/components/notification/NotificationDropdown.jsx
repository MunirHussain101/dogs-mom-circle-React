import React, {useEffect, useState} from "react";
import {Avatar, Badge, Dropdown, Menu} from "antd";
import {LazyLoadImage} from "react-lazy-load-image-component";

import "./NotificationDropdown.css";
import { useSelector } from "react-redux";
import socket from '../../utils/socket'

const NotificationDropdown = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const userDetail = useSelector((state) => state?.auth?.userDetails);
  const postDetails = useSelector((state) => state?.posts?.postDetails);

  const postMap = postDetails.map((val) => {
    console.log(val?.userId)
    return val?.userId;
  })
  useEffect(() => {
    socket?.on("new-review", (data) => {
      console.log({data})
      setNotifications((prev) => [...prev, data]);
    });
    socket?.on('accept-request', (data) => {
      setNotifications(prev => [...prev, data])
    })
    socket.on('reject-request', data => {
      console.log({dddd: data})
      setNotifications(prev => [...prev, data])
    })
    console.log('socket set')
  }, []);

  useEffect(() => {
    if(notifications?.length > 0)
    window.localStorage.setItem('notifications', JSON.stringify(notifications))
  }, [notifications])
  useEffect(() => {
    setNotifications(JSON.parse(window.localStorage.getItem('notifications')))
  }, [])

  const displayNotification = ({senderName, type, message}) => {
    let action;

    if (type === 1) {
      action = "review";
    } else if (type === 2) {
      action = "rating";
    } else {
      action = "comment";
    }
    return (
      type !== 3 
      ? <span className="notification">{`${userDetail?.firstname} ${action} your post.`}</span>
      : <span className="notification">{`${message}`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    localStorage.setItem('notifications', '[]')
    setOpen(false);
  };

  const menu = (
    <Menu className="main_menu">
      <>
        {notifications?.map((notification) => (
          <Menu.Item key={notification.id} className="menu_item">
            <Avatar size={50} src={userDetail.profile_pic} />
            &nbsp; &nbsp;
            {displayNotification(notification)}
          </Menu.Item>
        ))}
        <div className="notification-dropdown-header">
          <span
            onClick={handleRead}
            className="mark_read"
            style={{color: "#1F2124"}}
          >
            Mark all read
          </span>
        </div>
      </>
    </Menu>
  );
  return (
    <div className="notification-dropdown-container">
      <Dropdown overlay={menu} trigger={["click"]}>
        <div className="notification-dropdown-trigger">
          <Badge count={notifications.length}>
            <LazyLoadImage src="/assets/favicoIcon/bell.svg" />
          </Badge>
        </div>
      </Dropdown>
    </div>
  );
};

export default NotificationDropdown;
