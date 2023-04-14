import React, {useState} from "react";
import {Row, Col, Steps, Input, Radio, Form, Button} from "antd";
import "./DogProfile.css";
import {useNavigate} from "react-router-dom";

const DogProfile_2 = () => {
  const [current, setCurrent] = useState(1);
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
            <h1 className="pets_heading">what's your zip code?</h1>
          </Row>

          {/* Row for Input Box */}
          <Row>
            <Input className="input_box" />
          </Row>

          <br />

          {/* Row for Breed  */}
          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">
              how far are you willing to travel for boarding?
            </h1>
              <Form>
                <Form.Item>
              <Radio.Group style={{display: "flex", flexDirection: "row", gap: 10}}
              defaultValue="">
                <Radio.Button className="radio_btn" value="10miles" style={{color:"black"}}>
                  {"<10 miles"}
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="10-25miles"
                  style={{color:"black"}}
                >
                  10-25 miles
                </Radio.Button>
                <Radio.Button className="radio_btn" value="25 miles" style={{color:"black"}}>
                  {">25 miles"}
                </Radio.Button>
              </Radio.Group>
              </Form.Item>
              </Form>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">
              What are you looking for ( Feel free to select multiple choices)?
            </h1>
             <Form>
               <Form.Item>
              <Radio.Group style={{display: "flex", flexDirection: "row", gap: 10}}
              defaultValue="">
                <Radio.Button
                  className="radio_btn"
                  value="Boarding"
                  style={{color:"black"}}
                >
                  Boarding
                </Radio.Button>
                <Radio.Button className="radio_btn" value="Daycare" style={{color:"black"}}>
                Daycare
                </Radio.Button>
                <Radio.Button className="radio_btn" value="Playdate" style={{color:"black"}}>
                  Playdate
                </Radio.Button>
              </Radio.Group>
              </Form.Item>
             </Form>
          </Row>
          <br />

          <Row justify="space-between" style={{marginRight: 100}}>
            <Col>
              <Button
                className="back_btn"
                onClick={() => navigate("/dogprofile1")}
              >
                <span style={{color:"black"}}>Back</span>
              </Button>
            </Col>
            <Col>
              <Button
                className="next_btn"
                onClick={() => navigate("/dogProfile3")}
              >
                <span style={{color:"white"}}>Next</span>
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

export default DogProfile_2;
