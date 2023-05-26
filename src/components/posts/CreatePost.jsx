import React, {useEffect, useState} from "react";
import ReusableModal from "../common-component/dynamic/modal/ReusableModal";
import {Col, DatePicker, Row, Button, message} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import {Link, useNavigate} from "react-router-dom";
import axios from "../../api/axios";
import "./CreatePost.css";

const CreatePost = () => {
  const [posts, setPosts] = useState({
    start_date: "",
    end_date: "",
    additional_info: "",
  });
  const [size, setSize] = useState("large");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onSubModel = () => {
    setIsModalOpen(false);

    handleSubmit();
    navigate("/search");
    setDisable(true);
  };
  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/setPosts", posts, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      messageApi.open({
        type: "success",
        content: "New Post Added",
      });
    } catch (err) {
      messageApi.open({
        type: "error",
        content: err.response,
      });
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <ReusableModal
        title="Post a boarding request!"
        buttonText="Post"
        closable={true}
        centered
        footer={false}
        showModal={showModal}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* Paragraph */}
        <Row>
          <Col lg={24} xs={24}>
            <p className="post_para">Post a boarding request</p>
          </Col>
        </Row>

        {/* Date */}
        <Row>
          <Col lg={12} xs={12}>
            <p className="sub_post_para">Drop off</p>
            <DatePicker
              className="date_para"
              size={size}
              placeholder="mm/dd/yyyy"
              name="start_date"
              value={posts.start_date}
              onChange={(e) => {
                setPosts({...posts, start_date: e});
              }}
            />
          </Col>
          <Col lg={12} xs={12}>
            <p className="sub_post_para">Pickup</p>
            <DatePicker
              className="date_para"
              size={size}
              placeholder="mm/dd/yyyy"
              name="end_date"
              value={posts.end_date}
              onChange={(e) => {
                setPosts({...posts, end_date: e});
              }}
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col lg={12} xs={12}>
            <Link to="/profile-register">
              <Button className="edit_btn">Edit profile</Button>
            </Link>
          </Col>
          <Col lg={12} xs={12}>
            {disable ? (
              <Button
                className="confirm_btn"
                onClick={onSubModel}
                disabled={disable}
              >
                Confirm Request
              </Button>
            ) : (
              <Button className="confirm_btn" onClick={onSubModel}>
                Confirm Request
              </Button>
            )}
          </Col>
        </Row>
        <br />
      </ReusableModal>

      <br />
    </>
  );
};

export default CreatePost;
