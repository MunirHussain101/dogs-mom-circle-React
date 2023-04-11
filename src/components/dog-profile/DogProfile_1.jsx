import React, {useState} from "react";
import {Row, Col, Steps, Input, Radio, Form, Button} from "antd";
import {useNavigate} from "react-router-dom";
import "./DogProfile.css";

const DogProfile_1 = () => {
  const [current, setCurrent] = useState(0);
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
          <Row>
            <h1 className="pets_heading">What's your dog name?</h1>
          </Row>

          {/* Row for Input Box */}
          <Row>
            <Input className="input_box" />
          </Row>

          <br />

          {/* Row for Breed  */}
          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Dog Size</h1>
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
                <Radio.Button className="radio_btn" value="Alot">
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
            <h1 className="dog_size_heading">The breed is</h1>
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
                <Radio.Button className="radio_btn" value="Alot">
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

          <Row style={{display: "flex", justifyContent: "space-evenly"}}>
            <Col>
              <Button
                className="next_btn"
                onClick={() => navigate("/dogProfile2")}
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

export default DogProfile_1;
