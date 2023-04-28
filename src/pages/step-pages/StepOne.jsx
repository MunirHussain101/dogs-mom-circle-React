import React, {useEffect, useState} from "react";
import {Row, Col, Select, Input, DatePicker, Form, Radio} from "antd";
import axios from "../../api/axios";
import "./StepPage.css";

const StepOne = ({profileData, setProfileData}) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const loadBreeds = async () => {
      const breedResponse = await axios.get("/api/breeds");
      setBreeds(breedResponse?.data);
    };

    loadBreeds();
  }, []);
  
  const breedsDetails = breeds.map((el, index) => {
    const obj = {};
    obj.label = el; 
    obj.value = index;
    return obj;
  });
  // const renderOptions = () => {
  //   return breeds.map((option) => (
  //     <Option key={option.value} value={option.value}>
  //       {option.label}
  //     </Option>
  //   ));
  // };
  return (
    <>
      <Row>
        <Col lg={4} xs={0}></Col>

        <Col lg={16} xs={24} className="main_form_box">
          <Row style={{display: "flex", flexDirection: "column", gap: 20}}>
            <h1 className="pets_heading">What's your dog name?</h1>
            <Input
              className="input_box"
              name="dog_name"
              onChange={(e) => {
                setProfileData({
                  ...profileData,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column", gap: 20}}>
            <h1 className="pets_heading">The dog was born</h1>
            <Col>
              <DatePicker
                placeholder="Select Date of Birth"
                className="input_box"
                name="dog_birthday"
                value={profileData.dog_birthday}
                onChange={(e) => {
                  setProfileData({...profileData, dog_birthday: e});
                }}
              />
            </Col>
          </Row>
          <br />

          {/* Row for Breed  */}
          <Row style={{display: "flex", flexDirection: "column", gap: 20}}>
            <h1 className="dog_size_heading">Dog Size</h1>
            {/* <Row> */}
            <Form.Item>
              <Radio.Group
                // style={{display: "flex", flexDirection: "row"}}
                className="radio_group"
                value={profileData.dog_size}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    dog_size: e.target.value,
                  });
                }}
              >
                <Radio.Button className="radio_btn_2" value="0-15lbs">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <img
                      src="assets/size/small-dog.svg"
                      style={{color: "black"}}
                    />
                    0-15lbs <span>Small</span>
                  </div>
                </Radio.Button>

                <Radio.Button className="radio_btn_2" value="16-40lbs">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <img src="assets/size/medium-dog.svg" />
                    16-40lbs <span>Medium</span>
                  </div>
                </Radio.Button>
                <Radio.Button className="radio_btn_2" value="41-100lbs">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <img src="assets/size/large-dog.svg" />
                    41-100lbs <span>Large</span>
                  </div>
                </Radio.Button>
                <Radio.Button className="radio_btn_2" value="100+lbs">
                  <Row
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <img src="assets/size/gaintdog.svg" />
                    100+lbs <span>Giant</span>
                  </Row>
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>
          {/* <br /> */}

          <Row
            style={{display: "flex", flexDirection: "column", gap: 20}}
            gutter={16}
          >
            <h1 className="dog_size_heading">The breed is</h1>
            <div>
              <Select
               style={{width: 120}}
               className="input_box_1"
                // showSearch
                placeholder={"Select Breed"}
                // optionFilterProp="children"
                // filterOption={(input, option) =>
                //   (option?.label ?? "").includes(input)
                // }
                options={[
                  {value: "0", label: `Select Breed`},
                  // {value: "1", label: `Pug2`},
                  // {value: "2", label: `Pug3`},
                  ...breedsDetails,
                ]}
              >
                {/* {breeds.map((option) => {
                  return <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                })} */}
                </Select>
              {/* <Select
                style={{width: 120}}
                className="input_box_1"
                showSearch
                value={profileData.dog_breed}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    dog_breed: e,
                  });
                }} */}
                {/* // options={[...breedsDetails]} */}
              {/* // > */}
                {/* {renderOptions()} */}
                {/* <Option value="pug">Pug</Option> */}
              {/* </Select> */}

              {/* </Form.Item> */}
            </div>
          </Row>
          <br />
        </Col>

        <Col lg={4} xs={0}></Col>
      </Row>
    </>
  );
};

export default StepOne;

// add more steps as needed
