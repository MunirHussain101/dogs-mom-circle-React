import React, {useContext, useEffect, useState} from "react";
import axios from "../../../../api/axios";
import {Row, Col, Layout, Button, Card, message} from "antd";
import ChatInput from "../../../../pages/chats/ChatInput/ChatInput";
import Messages from "../../../../pages/chats/Messages/Messages";
import {ChatContext} from "../../../../context/ChatContext";
import {LazyLoadImage} from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import { io } from 'socket.io-client';
import socket from "../../../../utils/socket";
import { db } from "../../../../api/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

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

export const ChatPortion2 = ({ targetUser }) => {
  const {data} = useContext(ChatContext);
  // const targetId = useSelector(state => state.auth.targetUserId)
  const id = useSelector(state => state.auth.userDetails?.id)
  const token = localStorage.getItem('token')
  const [request, setRequest] = useState(false)
  const [hostName, setHostName] = useState('')
  const [hostPic, setHostPic] = useState('')
  const [boardingId, setBoardingId] = useState(null)
  const [loadings, setLoadings] = useState([])
  const [isAccepted, setIsAccepted] = useState(false)
  const [isRejected, setIsRejected] = useState(false)
  const [congrats, setCongrats] = useState('')
  const [targetId, setTargetId] = useState(null)
  const [requestBtnMsg, setRequestBtnMsg] = useState('')
  const [reqMsg, setReqMsg] = useState('board their')

  const checkBoarding = async (targetId) => {
    console.log('be', targetUser)
    const response = await axios.post('/api/get_boarding',
      {
        myId: id,
        targetId
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    console.log('now')
    if(response.data === true) {
      setRequestBtnMsg('Request to board')
      setReqMsg('host your')
      return;
    }
    setRequestBtnMsg('Request to host')
    console.log({response: response.data})
  }
const temp = async () => {
  const d = await getDoc(doc(db, 'users', targetUser))
  const data = d.data()
  if(data) {
    setTargetId(data.dbId)
  }
  return data.dbId
  // console.log({data})
}
  useEffect(() => {
    socket.on('request', (data) => {
      setRequest(true)
      setHostName(`${data.user.firstname} ${data.user.lastname}`)
      setHostPic(data?.user?.profile_pic)
      setBoardingId(data?.hosting?.id)
    });
    socket.on('reject-request', data => {
      console.log({dddd: data})
      setIsRejected(true)
      // setTimeout(() => setIsRejected(false), 6000)
    })
    socket.on('accept-request', data => {
      setHostName(`${data.user.firstname} ${data.user.lastname}`)
      console.log({dBro: data})
      console.log(`${data.user.firstname} ${data.user.lastname}`)
      setIsAccepted(true)
      setCongrats(data.congrats_msg)
    })
    const tar = temp()
    if(tar) {
      checkBoarding(tar)
    }
  }, []);
  async function handleRequest() {
    const response = await axios.post(
      "/api/boarding",
      {
        id,
        targetId
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
  const handleRequestAction = async (action, index) => {
    setLoadings(prev => {
      const newLoadings = [...prev];
      newLoadings[index] = true;
      return newLoadings
    })
    const side = requestBtnMsg === 'Request to board' ? true : false
    const response = await axios.post(
      "/api/update_boarding_status",
      {
        action,
        id: boardingId,
        myId: id,
        side
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
        newLoadings[index] = true
        return newLoadings
      })
      setRequest(false)
    } else if(response.data.statusCode === 204) {
      setLoadings(prev => {
        const newLoadings = [...prev]
        newLoadings[index] = false
        return newLoadings
      })
      setRequest(false)
    }
  }

  const MyCard = () => {
    return (
      <Card hoverable style={{width: '100%'}}>
        <Row style={{}}>
          <Col>
            <LazyLoadImage
              src={hostPic}
              style={{width: '50px', height: '50px', borderRadius: '25px'}}
            />
          </Col>
          <Col style={{width: '80%', marginLeft: '2%'}}>
            <Row>
              <span>
                <span style={{color: '#EAB2BB'}}>{hostName}</span> Requested to {reqMsg} dog.
              </span>
            </Row>
            <Row style={{width: '100%'}}>
              <Button
                style={{background: "#EAB2BB", color: "white", width: '24%', marginRight: '2%'}}
                onClick={() => handleRequestAction(true, 0)}
                disabled={loadings[1]}
                loading={loadings[0]}
              >Accept</Button>
              <Button
                style={{color: "white", background: '#000000', width: '24%'}}
                onClick={() => handleRequestAction(false, 1)}
                disabled={loadings[0]}
                loading={loadings[1]}
              >
                Reject
              </Button>
            </Row>
          </Col>
        </Row>
      </Card>
    )
  }
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
            <Button onClick={handleRequest}>{requestBtnMsg}</Button>
          </Col>
        </Row>
        <div style={{height: 2, backgroundColor: "lightgrey"}}></div>
        <Content className="content">
          {
            request
            &&
            <MyCard />
          }
          {
            isAccepted
            &&
            <div style={{textAlign: 'center', background: '#EAB2BB', padding: '40px 40px', color: 'white'}}>
              <p>{congrats}</p>
            </div>
          }
          {
            isRejected
            &&
            <div style={{textAlign: 'center', background: '#EAB2BB', padding: '40px 40px'}}>
              <p>Your Request was rejected</p>
            </div>
          }
          <Messages />
        </Content>
        <Row style={{display: "flex", gap: 20}}>
          <Col>
            <ChatInput />
          </Col>
        </Row>
      </Col>
    </>
  );
};
