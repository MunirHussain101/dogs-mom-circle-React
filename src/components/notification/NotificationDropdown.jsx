import React, {useEffect, useState} from "react";
import {Avatar, Badge, Button, Dropdown, Menu} from "antd";
import {LazyLoadImage} from "react-lazy-load-image-component";

import "./NotificationDropdown.css";
import { useSelector } from "react-redux";
import socket from '../../utils/socket'
import axios from "../../api/axios";

const NotificationDropdown = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const [loadings, setLoadings] = useState([])
  const [isAccepted, setIsAccepted] = useState(false)
  const [isRejected, setIsRejected] = useState(false)
  const [boardingId, setBoardingId] = useState(null)
  const id = useSelector(state => state.auth.userDetails?.id)
  const token = localStorage.getItem('token')
  const userDetail = useSelector((state) => state?.auth?.userDetails);
  const postDetails = useSelector((state) => state?.posts?.postDetails);

  const postMap = postDetails.map((val) => {
    console.log(val?.userId)
    return val?.userId;
  })
  useEffect(() => {
    socket?.on("new-review", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
    socket?.on('accept-request', (data) => {
      if(data?.message) setNotifications(prev => [...prev, data])
    })
    socket?.on('reject-request', data => {
      // if(data?.message)
      setNotifications(prev => [...prev, data])
    })
    socket?.on('request', data => {
      if(window.location.href.endsWith('/chats')) return
      setBoardingId(data?.boardingId)
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

  const handleRequestAction = async (action, index, notificationId) => {
    setLoadings(prev => {
      const newLoadings = [...prev];
      newLoadings[index] = true;
      return newLoadings
    })
    const response = await axios.post(
      "/api/update_boarding_status",
      {
        action,
        id: boardingId,
        myId: id,
        // side
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    if(response.data.statusCode === 200) {
      setLoadings(prev => {
        const newLoadings = [...prev]
        newLoadings[index] = false
        return newLoadings
      })
      setNotifications(prev => prev.filter(noti => noti.notificationId !== notificationId))
      setIsAccepted(true)
    } else if(response.data.statusCode === 204) {
      setLoadings(prev => {
        const newLoadings = [...prev]
        newLoadings[index] = false
        return newLoadings
      })
      setIsRejected(true)
      setNotifications(prev => prev.filter(noti => noti.notificationId !== notificationId))
    }
    setLoadings([false, false])
  }
  
  const displayNotification = (data) => {
    console.log({bo: data})
    const {senderName, type, message, notificationId} = data
    let action;

    if (type === 1) {
      action = "review";
    } else if (type === 2) {
      action = "rating";
    } else {
      action = "comment";
    }
    return (
      type === 3
      ? <span className="notification">{`${message}`}</span>
      : type === 4
      ? <span className="notification">
          <p>{message}</p>
          <span style={{width: '100%'}}>
          <Button
            style={{background: "#EAB2BB", color: "white", width: '40%', marginRight: '2%'}}
            onClick={() => handleRequestAction(true, 0, notificationId)}
            disabled={loadings[1]}
            loading={loadings[0]}
          >Accept</Button>
          <Button
            style={{color: "white", background: '#000000', width: '40%'}}
            onClick={() => handleRequestAction(false, 1, notificationId)}
            disabled={loadings[0]}
            loading={loadings[1]}
          >
            Reject
          </Button>
          </span>
        </span>
      : <span className="notification">{`${userDetail?.firstname} ${action} your post.`}</span>
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
