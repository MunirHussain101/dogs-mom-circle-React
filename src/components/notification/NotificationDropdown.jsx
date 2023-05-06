import React, {useState} from "react";
import {Avatar, Badge, Dropdown, Menu} from "antd";
import {LazyLoadImage} from "react-lazy-load-image-component";

import "./NotificationDropdown.css";

const notifications = [
  {
    id: 1,
    img: "assets/home-cards/new13.svg",
    message: "Nevena gave you a review",
    read: false,
  },
  {
    id: 2,
    img: "assets/home-cards/new22.svg",
    message: "Kristin commented on your post",
    read: true,
  },
  {
    id: 3,
    img: "assets/home-cards/new21.svg",
    message: "Oceane commented on your post",
    read: false,
  },
];

const NotificationDropdown = () => {
  const [unReadNotifications, setUnReadNotifications] = useState(
    notifications.filter((notification) => !notification.read)
  );

  const markAllRead = () => {
    const updatedNotifications = notifications.map((notification) =>
      notification.read ? notification : {...notification, read: true}
    );
    setUnReadNotifications([]);
  };

  const notificationCount = unReadNotifications.length;

  const menu = (
    <Menu className="main_menu">
      <>
        {notifications.map((notification) => (
          <Menu.Item key={notification.id} className="menu_item">
            <Avatar size={50} src={notification.img} />
            &nbsp; &nbsp;
            {notification.message}
          </Menu.Item>
        ))}
        <div className="notification-dropdown-header">
          {notificationCount > 0 && (
            <span
              onClick={markAllRead}
              className="mark_read"
              style={{color: "#1F2124"}}
            >
              Mark all read
            </span>
          )}
        </div>
      </>
    </Menu>
  );

  return (
    <div className="notification-dropdown-container">
      <Dropdown overlay={menu} trigger={["click"]}>
        <div className="notification-dropdown-trigger">
          <Badge count={notificationCount}>
            <LazyLoadImage src="/assets/favicoIcon/bell.svg" />
          </Badge>
        </div>
      </Dropdown>
    </div>
  );
};

export default NotificationDropdown;
