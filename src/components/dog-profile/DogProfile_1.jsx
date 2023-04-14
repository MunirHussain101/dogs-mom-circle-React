import React, {useState} from "react";
import {
  Row,
  Col,
  Steps,
  Input,
  Radio,
  Form,
  Button,
  DatePicker,
  Select
} from "antd";
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import "./DogProfile.css";

const { Option } = Select;


const DogProfile_1 = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  // const [radioBtnActive, setRadioBtnActive] = useState(false);

  // const radioBtnColorChange = () => {
  //   setRadioBtnActive(!radioBtnActive);
  // };

  // const styles = {
  //   popup: {
  //     background: radioBtnActive ? "#EAB2BB" : "",
  //   },
  // };

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
          <Row style={{display: "flex", flexDirection: "column"}}>
            <h1 className="pets_heading">What's your dog name?</h1>
            <Input className="input_box" name="dog_name" />
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column", gap: 10}}>
            <h1 className="pets_heading">
              The dog was born in year xx month xx
            </h1>
            <Row style={{gap: 10}}>
              <Col>
                <DatePicker
                  // onChange={onChange}
                  picker="month"
                  placeholder="Select month and year"
                  className="input_box"
                  name="dog_birthday"
                />
              </Col>
              {/* <Col><DatePicker onChange={onChange} picker="year"  className="input_box" /></Col> */}
            </Row>
          </Row>
          <br />

          {/* Row for Breed  */}
          <Row style={{display: "flex", flexDirection: "column"}} >
            <h1 className="dog_size_heading">Dog Size</h1>
            {/* <Row> */}
             <Form>
             <Form.Item name="dog_size">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
              >
                <Radio.Button className="radio_btn_2" > 
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color:"black"
                    }}
                  >
                    <img src="assets/size/small-dog.svg" style={{color:"black"}} />
                    0-15lbs <span>Small</span>
                  </div>
                </Radio.Button>

                <Radio.Button className="radio_btn_2" value="16-40lbs" >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color:"black"
                    }}
                  >
                    <img src="assets/size/medium-dog.svg" />
                    16-40lbs <span>Medium</span>
                  </div>
                </Radio.Button>
                <Radio.Button className="radio_btn_2" value="Alot" >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color:"black"
                    }}
                  >
                    <img src="assets/size/large-dog.svg" />
                    141-100lbs <span>Large</span>
                  </div>
                </Radio.Button>
                <Radio.Button className="radio_btn_2" value="101+lbs">
                  <Row
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color:"black"
                    }}
                  >
                    <img src="assets/size/gaintdog.svg" />
                    101+lbs <span>Giant</span>
                  </Row>
                </Radio.Button>
              </Radio.Group>
              </Form.Item>
             </Form>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">The breed is</h1>
            <Row style={{gap: 10}}>
              {/* <Form.Item style={{display:"flex", gap:20}}> */}
              {/* <Dropdown
                menu={{
                  items,
                }}
                className="input_box_1"
              >
                <Button className="btn_breed">
                  <Space>
                    Breed
                    <DownOutlined className="btn_breed" />
                  </Space>
                </Button>
              </Dropdown> */}
               <Select defaultValue="Select Breed" style={{ width: 120 }}
               name="dog_breed" onChange={handleChange} className="input_box_1">
              <Option value="German">German Shepherd</Option>
              <Option value="bulldog">Bulldog</Option>
              <Option value="Siberian">Siberian Husky</Option>
              <Option value="Golden">Golden Retriever</Option>
              <Option value="French">French Bulldog</Option>
              <Option value="Alaskan">Alaskan Malamute</Option>
              <Option value="Poodle">Poodle</Option>
              <Option value="Chihuahua">Chihuahua</Option>
              <Option value="Poodle">Afghan Hound</Option>
              </Select>

              {/* </Form.Item> */}
            </Row>
          </Row>
          <br />

          <Row style={{display: "flex", justifyContent: "space-around"}}>
            <Col>
              <Button
                className="next_btn"
                onClick={() => navigate("/dogProfile2")}
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

export default DogProfile_1;
