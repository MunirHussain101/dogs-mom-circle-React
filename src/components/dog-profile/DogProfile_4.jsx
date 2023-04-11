import React, {useState} from "react";
import {Row, Col, Steps, Input, Radio, Form, Button, Upload, Modal} from "antd";
import {useNavigate} from "react-router-dom";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import "./DogProfile.css";

const {TextArea} = Input;

const DogProfile_4 = () => {
  const [current, setCurrent] = useState(3);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const navigate = useNavigate();


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/search")
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      {/* ProgressBar */}
      <Row>
        <Col lg={4}></Col>

        <Col lg={16}>
          <Steps
            type="navigation"
            size="small"
            current={current}
            onChange={onChange}
            className="site-navigation-steps"
            items={[
              {
                title: "Step 1",
                description: "Basic Info.",
              },
              {
                title: "Step 2",
                description: "About you",
              },
              {
                title: "Step 3",
                description: "Get to know your dog",
              },
              {
                title: "Step 4",
                description: " Get to know your hosting preference",
              },
            ]}
          />
        </Col>

        <Col lg={4}></Col>
      </Row>
      <br />

      {/* Content */}
      <Row>
        <Col lg={4}></Col>

        <Col lg={16}>
          {/* Row for Breed  */}
          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Dog size</h1>
            <Row style={{gap: 10}}>
              {/* <Form.Item style={{display:"flex", gap:20}}> */}
              <Radio.Group>
                <Radio.Button className="radio_btn" value="0-15lbs">
                  0-15lbs
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button
                  className="radio_btn"
                  style={{background: "#EAB2BB", color: "#fff"}}
                  value="16-40lbs"
                >
                  16-40lbs
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button className="radio_btn" value="41-100lbs">
                  41-100lbs
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button className="radio_btn" value="101+lbs">
                  101+lbs
                </Radio.Button>
              </Radio.Group>
              {/* </Form.Item> */}
            </Row>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Does your dog shed?</h1>
            <Row style={{gap: 10}}>
              {/* <Form.Item style={{display:"flex", gap:20}}> */}
              <Radio.Group>
                <Radio.Button
                  className="radio_btn"
                  value="No"
                  style={{background: "#EAB2BB", color: "#fff"}}
                >
                  No
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button className="radio_btn" value="Moderate">
                  Moderate
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button className="radio_btn" value="Alot">
                  Alot
                </Radio.Button>
              </Radio.Group>
              {/* </Form.Item> */}
            </Row>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Is your dog house trained?</h1>
            <Row style={{gap: 10}}>
              {/* <Form.Item style={{display:"flex", gap:20}}> */}
              <Radio.Group>
                <Radio.Button className="radio_btn" value="No">
                  No
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button className="radio_btn" value="working in progress">
                  working in <br />
                  progress
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button
                  className="radio_btn"
                  value="Yes"
                  style={{background: "#EAB2BB", color: "#fff"}}
                >
                  Yes
                </Radio.Button>
              </Radio.Group>
              {/* </Form.Item> */}
            </Row>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Can your dog be left along?</h1>
            <Row style={{gap: 10}}>
              {/* <Form.Item style={{display:"flex", gap:20}}> */}
              <Radio.Group>
                <Radio.Button
                  className="radio_btn"
                  value="No"
                  style={{background: "#EAB2BB", color: "#fff"}}
                >
                  No
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button className="radio_btn" value="coupleHour">
                  yes, a couple <br /> of hours
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button className="radio_btn" value="yes, a few of hours">
                  yes, a few of <br /> hours
                </Radio.Button>
              </Radio.Group>
              {/* </Form.Item> */}
            </Row>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Do you have a cat?</h1>
            <Row style={{gap: 10}}>
              {/* <Form.Item style={{display:"flex", gap:20}}> */}
              <Radio.Group>
                <Radio.Button
                  className="radio_btn"
                  value="No"
                  style={{background: "#EAB2BB", color: "#fff"}}
                >
                  No
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button className="radio_btn" value="Yes">
                  Yes
                </Radio.Button>
              </Radio.Group>
              {/* </Form.Item> */}
            </Row>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}}>
            <h1 className="add_info">
              Any other things you would like to add?
            </h1>
            <TextArea rows={4} style={{width: 340, height: 120}} />
          </Row>
          <br />

          {/*  Upload your profile picture */}
          <Row>
            <h1 className="upload_heading">Upload your profile picture</h1>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
              <PlusOutlined />
            </Upload>
          </Row>

          {/* Upload your dog pictures */}
          <Row>
            <h1 className="upload_heading">
              Upload your dog pictures{" "}
              <span style={{color: "#7A7777"}}>(upto 5)</span>
            </h1>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
              <PlusOutlined />
            </Upload>
          </Row>
          <br />
          <Row justify="space-between" style={{marginRight: 100}}>
            <Col>
              <Button
                className="back_btn"
                onClick={() => navigate("/dogprofile3")}
              >
                Back
              </Button>
            </Col>
            <Col>
              <Button className="next_btn" onClick={showModal}>
                Save
              </Button>
            </Col>
          </Row>

          <Row>
            <Modal
              className="modal_btn"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Row style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img src="assets/modal/modal.svg" width={50}/>
              </Row>
              <p>We have saved your information and will work hard to help find you a match!</p>
            </Modal>
          </Row>
        </Col>

        <Col lg={4}></Col>
      </Row>

      <br />
      <br />
    </>
  );
};

export default DogProfile_4;
