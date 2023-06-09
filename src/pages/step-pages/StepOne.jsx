import React, {useEffect, useState} from "react";
import {Row, Col, Select, Input, DatePicker, Form, Radio} from "antd";
import axios from "../../api/axios";
import "./StepPage.css";
import {LazyLoadImage} from "react-lazy-load-image-component";

const StepOne = ({profileData, setProfileData}) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const loadBreeds = async () => {
      const breedResponse = await axios.get("/api/breeds");
      setBreeds(breedResponse?.data);
    };

    loadBreeds();
  }, []);
 

  const breedsDetails = breeds.sort((a, b) => a > b ? 1 : -1).map((el, index) => {
    const obj = {};
    obj.label = el;
    obj.value = index;
    return obj;
  });

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
                value={profileData.dog_birthday || ""}
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
                className="radio_group"
                value={profileData.dog_size || ""}
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
                    <LazyLoadImage
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
                    <LazyLoadImage src="assets/size/medium-dog.svg" />
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
                    <LazyLoadImage src="assets/size/large-dog.svg" />
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
                    <LazyLoadImage src="assets/size/gaintdog.svg" />
                    100+lbs <span>Giant</span>
                  </Row>
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>

          <Row
            style={{display: "flex", flexDirection: "column", gap: 20}}
            gutter={16}
          >
            <h1 className="dog_size_heading">The breed is</h1>
            <div>
              <Select
                style={{width: "180px"}}
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                className="input_box_1"
                options={[
                  {value: "0", label: `Select Breed`},
                  ...breedsDetails,
                ]}
                value={profileData.dog_breed || ""}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    dog_breed: breeds[e],
                  });
                }}
              ></Select>
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
