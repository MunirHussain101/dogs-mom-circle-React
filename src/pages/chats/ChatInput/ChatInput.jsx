import React, {useState, useContext} from "react";
import {Row, Col, Input, Button} from "antd";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import {db, storage} from "../../../api/firebase";
import {AuthContext} from "../../../context/AuthContext";
import {ChatContext} from "../../../context/ChatContext";
import {v4 as uuid} from "uuid";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import "./ChatInput.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ChatInput = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <>
      <Row>
        <Col lg={24}>
          <div className="input">
            <Input
              placeholder="Enter Type here"
              style={{
                width: 500,
                marginLeft: 10,
                backgroundColor: "#F8F8F8",
                borderRadius: 12,
              }}
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <div className="send">
              <Input
                type="file"
                style={{display: "none"}}
                id="file"
                onChange={(e) => setImg(e.target.files[0])}
              />
              <label htmlFor="file">
                <LazyLoadImage src="assets/chat-img/img.png" alt="" />
              </label>
              <Button
                onClick={handleSend}
                style={{background: "#EAB2BB", color: "white"}}
              >
                Send
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ChatInput;
