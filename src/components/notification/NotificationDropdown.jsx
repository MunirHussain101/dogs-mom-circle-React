import React, {useEffect, useState} from "react";
import {Avatar, Badge, Dropdown, Menu} from "antd";
import {LazyLoadImage} from "react-lazy-load-image-component";

import "./NotificationDropdown.css";
import { useSelector } from "react-redux";

const NotificationDropdown = ({socket}) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const userDetail = useSelector((state) => state?.auth?.userDetails);
  const postDetails = useSelector((state) => state?.posts?.postDetails);

 


  useEffect(() => {
    // const data = {
    //   targetUserId: postMap, // Replace with the target user's identifier
    //   message: 'New notification message',
    // };
    // socket?.on("new-review", data);
    socket?.on("new-review", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const displayNotification = ({senderName, type}) => {
    let action;

    if (type === 1) {
      action = "review";
    } else if (type === 2) {
      action = "rating";
    } else {
      action = "comment";
    }
    return (
      <span className="notification">{`${userDetail?.firstname} ${action} your post.`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  const menu = (
    <Menu className="main_menu">
      <>
        {notifications.map((notification) => (
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
