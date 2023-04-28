import React, {useState} from "react";
import ReusableModal from "../common-component/dynamic/modal/ReusableModal";
import {Col, DatePicker, Row, Input, Button, Modal, message} from "antd";
import {Link, useNavigate} from "react-router-dom";
import axios from "../../api/axios";
import "./CreatePost.css";

const {TextArea} = Input;
const CreatePost = () => {
  const [posts, setPosts] = useState({
    start_date: "",
    end_date: "",
    additional_info: "",
  });
  const [size, setSize] = useState("large");
  // const [isMainModel, setMainModel] = useState(false);
  const [isSubModel, setSubModel] = useState(false); // Second Model
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onSubModel = () => {
    // setMainModel(stateMain);
    // setSubModel(stateSub);
    // setMainModel(false);
    setIsModalOpen(false);
    setSubModel(true);
    setDisable(true);
    navigate("/search");
  };
  const token = localStorage.getItem("token");
  // POST API INTEGRATE:
  const handleSubmit = async () => {
    console.log("payload::", posts);

    try {
      const response = await axios.post("/api/posts", posts, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("post response --->", response.data);
      messageApi.open({
        type: "success",
        content: "New Post Added",
      });
      navigate("/search");
    } catch (err) {
      messageApi.open({
        type: "error",
        content: err.response,
      });
    }
  };

  const ViewRequest = () => {
    handleSubmit();
    window.location.reload("/search");
  };
  return (
    <>
      {contextHolder}
      <ReusableModal
        title="Post a boarding request!"
        buttonText="Post"
        closable={false}
        footer={false}
        showModal={showModal}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
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
        {/* Additional Information */}
        <Row justify="center">
          <Col lg={24} xs={24}>
            <p className="post_para">
              Additional information about this request
            </p>
            <TextArea
              placeholder="Type here.."
              className="text_area"
              style={{width: 450, height: 90}}
              value={posts.additional_info}
              name="additional_info"
              onChange={(e) =>
                setPosts({
                  ...posts,
                  additional_info: e.target.value,
                })
              }
            />
          </Col>
        </Row>

        <br />
        {/* Button */}
        <Row>
          <Col lg={12} xs={12}>
            <Link to="/profileReg">
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
              <Button
              className="confirm_btn"
              onClick={onSubModel}
            >
              Confirm Request
            </Button>
            )}
          </Col>
        </Row>
        <br />
      </ReusableModal>

      {/* Sub Modal */}
      <Modal
        closable={false}
        footer={false}
        open={isSubModel}
        // onOk={(e) => onSubModel(e, false)}
        // onCancel={(e) => onSubModel(e, false)}
      >
        <Row>
          <Col lg={24} style={{marginTop: 40, marginBottom: 40}}>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="assets/favicoIcon/tick.svg" width={50} />
            </Row>
            <h1 className="submit_modal">Your request has been submitted!</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={12} xs={12}>
            <Link to="/search">
              <Button
                className="edit_btn"
                onClick={() => window.location.reload("/search")}
              >
                Back
              </Button>
            </Link>
          </Col>
          <Col lg={12} xs={12}>
            <Button className="confirm_btn" onClick={ViewRequest}>
              View request
            </Button>
          </Col>
        </Row>
      </Modal>
      <br />
    </>
  );
};

export default CreatePost;
