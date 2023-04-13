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
            <h1 className="dog_size_heading">What is your dog's shedding level?</h1>
            <Row style={{gap: 10}}>
              {/* <Form.Item style={{display:"flex", gap:20}}> */}
              <Radio.Group style={{display: "flex", flexDirection: "row", gap: 10}}
              defaultValue="">
                <Radio.Button
                  className="radio_btn"
                  value="No shedding"
                  style={{color:"black"}}
                  
                >
                  No shedding
                </Radio.Button>
                <Radio.Button className="radio_btn" value="Moderate" style={{color:"black"}}>
                  Moderate
                </Radio.Button>
                <Radio.Button className="radio_btn" value="Alot" style={{color:"black"}}>
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
              <Radio.Group style={{display: "flex", flexDirection: "row", gap: 10}}
              defaultValue="">
                <Radio.Button className="radio_btn" value="No" 
                  style={{color:"black"}}
                  >
                  No
                </Radio.Button>
                <Radio.Button className="radio_btn" value="working in progress" style={{color:"black"}}>
                  working in <br />
                  progress
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="Yes"
                  style={{color:"black"}}
                >
                  Yes
                </Radio.Button>
              </Radio.Group>
              {/* </Form.Item> */}
            </Row>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Can your dog be left alone? If so, how long?</h1>
            <Row style={{gap: 10}}>
              {/* <Form.Item style={{display:"flex", gap:20}}> */}
              <Radio.Group style={{display: "flex", flexDirection: "row", gap: 10}}
              defaultValue="">
                <Radio.Button
                  className="radio_btn"
                  value="No"
                  style={{color:"black"}}
                  
                >
                  No
                </Radio.Button>
                <Radio.Button className="radio_btn" value="coupleHour" style={{color:"black"}}>
                  yes, a couple <br />
                  of hours
                </Radio.Button>
                <Radio.Button className="radio_btn" value="fewHour" style={{color:"black"}}>
                  yes, a few of <br />
                  hours
                </Radio.Button>
              </Radio.Group>
              {/* </Form.Item> */}
            </Row>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Has your dog been spayed or neutered?</h1>
            <Row style={{gap: 10}}>
              {/* <Form.Item style={{display:"flex", gap:20}}> */}
              <Radio.Group style={{display: "flex", flexDirection: "row", gap: 10}}
              defaultValue="">
                <Radio.Button
                  className="radio_btn"
                  value="No"
                  style={{color:"black"}}
                  
                >
                  No
                </Radio.Button>
                <Radio.Button className="radio_btn" value="Yes" style={{color:"black"}}>
                 Yes
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
              <Radio.Group style={{display: "flex", flexDirection: "row", gap: 10}}
              defaultValue="">
                <Radio.Button className="radio_btn" value="No" style={{color:"black"}}>
                  No
                </Radio.Button>
                <Radio.Button className="radio_btn" value="Unsure" style={{color:"black"}}>
                  Unsure
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="Yes"
                  style={{color:"black"}}
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
              <Radio.Group style={{display: "flex", flexDirection: "row", gap: 10}}
              defaultValue="">
                <Radio.Button
                  className="radio_btn_2"
                  value="Small"
                  style={{color:"black"}}
                >
                 <Row style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                  <img src="assets/size/small-dog.svg"  />
                  0-15lbs Small
                  </Row>
                </Radio.Button>
                <Radio.Button className="radio_btn_2" value="Medium" style={{color:"black"}}>
                <Row style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                  <img src="assets/size/medium-dog.svg"  />
                  16-40lbs Medium
                  </Row>
                </Radio.Button>
                <Radio.Button className="radio_btn_2" value="Large" style={{color:"black"}}>
                <Row style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                  <img src="assets/size/large-dog.svg"  />
                  141-100lbs Large
                  </Row>
                </Radio.Button>
                <Radio.Button className="radio_btn_2" value="Giant" style={{color:"black"}}>
                <Row style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                  <img src="assets/size/gaintdog.svg"  />
                  101+lbs Giant
                  </Row>
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
