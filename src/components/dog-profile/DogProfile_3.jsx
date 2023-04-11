import React, {useState} from "react";
import {Row, Col, Steps, Input, Radio, Form, Button} from "antd";
import "./DogProfile.css";
import {useNavigate} from "react-router-dom";

const DogProfile_3 = () => {
  const [current, setCurrent] = useState(2);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const navigate = useNavigate();

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
                  {"Alot"}
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
                  yes, a couple <br />
                  of hours
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button className="radio_btn" value="fewHour">
                  yes, a few of <br />
                  hours
                </Radio.Button>
              </Radio.Group>
              {/* </Form.Item> */}
            </Row>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">
              Do your dog get along with cats?
            </h1>
            <Row style={{gap: 10}}>
              {/* <Form.Item style={{display:"flex", gap:20}}> */}
              <Radio.Group>
                <Radio.Button className="radio_btn" value="No">
                  No
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button className="radio_btn" value="UnSure">
                  Unsure
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
            <h1 className="dog_size_heading">
              What size dogs does your dog get along with? (Feel free to select
              multiple choices)
            </h1>
            <Row style={{gap: 10}}>
              {/* <Form.Item style={{display:"flex", gap:20}}> */}
              <Radio.Group>
                <Radio.Button
                  className="radio_btn"
                  value="Small"
                  style={{background: "#EAB2BB", color: "#fff"}}
                >
                  Small
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button className="radio_btn" value="Medium">
                  Medium
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button className="radio_btn" value="Large">
                  Large
                </Radio.Button>
              </Radio.Group>
              <Radio.Group>
                <Radio.Button className="radio_btn" value="Giant">
                  Giant
                </Radio.Button>
              </Radio.Group>
              {/* </Form.Item> */}
            </Row>
          </Row>
          <br />

          <Row justify="space-between" style={{marginRight: 100}}>
            <Col>
              <Button
                className="back_btn"
                onClick={() => navigate("/dogprofile2")}
              >
                Back
              </Button>
            </Col>
            <Col>
              <Button
                className="next_btn"
                onClick={() => navigate("/dogProfile4")}
              >
                Next
              </Button>
            </Col>
          </Row>
        </Col>

        <Col lg={4}></Col>
      </Row>

      <br />
      <br />
    </>
  );
};

export default DogProfile_3;
