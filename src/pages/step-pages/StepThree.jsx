import React, {useState} from "react";
import {Row, Col, Form, Radio, Checkbox} from "antd";
import "./StepPage.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StepThree = ({profileData, setProfileData}) => {
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const handleBoxSelection = (id) => {
    if (selectedBoxes.includes(id)) {
      setSelectedBoxes(selectedBoxes.filter((boxId) => boxId !== id));
    } else {
      setSelectedBoxes([...selectedBoxes, id]);
    }
  };
  return (
    <>
      <Row>
        <Col lg={4} xs={0}></Col>

        <Col lg={16} xs={24} className="main_form_box">
          {/* Row for Breed  */}
          <Row
            style={{display: "flex", flexDirection: "column", gap: 20}}
            gutter={16}
          >
            <h1 className="dog_size_heading">
              What is your dog's shedding level?
            </h1>
            <Form.Item>
              <Radio.Group
                className="radio_group"
                value={profileData.dog_shedding || ""}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    dog_shedding: e.target.value,
                  });
                }}
              >
                <Radio.Button
                  className="radio_btn"
                  value="no shedding"
                  style={{color: "black"}}
                >
                  Non shedding
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="moderate"
                  style={{color: "black"}}
                >
                  Moderate
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="alot"
                  style={{color: "black"}}
                >
                  Alot
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>
          <br />

          <Row
            style={{display: "flex", flexDirection: "column", gap: 20}}
            gutter={16}
          >
            <h1 className="dog_size_heading">Is your dog house trained?</h1>
            <Form.Item>
              <Radio.Group
                className="radio_group"
                value={profileData.dog_house_trained || ""}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    dog_house_trained: e.target.value,
                  });
                }}
              >
                <Radio.Button
                  className="radio_btn"
                  value="no"
                  style={{color: "black"}}
                >
                  No
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="work in progress"
                  style={{color: "black"}}
                >
                  working in progress
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="yes"
                  style={{color: "black"}}
                >
                  Yes
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>
          <br />

          <Row
            style={{display: "flex", flexDirection: "column", gap: 20}}
            gutter={16}
          >
            <h1 className="dog_size_heading">
              Can your dog be left alone? If so, how long?
            </h1>
            <Form.Item>
              <Radio.Group
                className="radio_group"
                value={profileData.dog_can_be_left_alone || ""}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    dog_can_be_left_alone: e.target.value,
                  });
                }}
              >
                <Radio.Button
                  className="radio_btn"
                  value="no"
                  style={{color: "black"}}
                >
                  No
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="couple hours"
                  style={{color: "black"}}
                >
                  yes, a couple of hours
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="a few hours"
                  style={{color: "black"}}
                >
                  yes, a few of hours
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>
          <br />

          <Row
            style={{display: "flex", flexDirection: "column", gap: 20}}
            gutter={16}
          >
            <h1 className="dog_size_heading">
              Has your dog been spayed or neutered?
            </h1>
            <Form.Item>
              <Radio.Group
                className="radio_group"
                value={profileData.dog_spayed_neutered || ""}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    dog_spayed_neutered: e.target.value,
                  });
                }}
              >
                <Radio.Button
                  className="radio_btn"
                  value="no"
                  style={{color: "black"}}
                >
                  No
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="yes"
                  style={{color: "black"}}
                >
                  Yes
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>
          <br />

          <Row
            style={{display: "flex", flexDirection: "column", gap: 20}}
            gutter={16}
          >
            <h1 className="dog_size_heading">
              Do your dog get along with cats?
            </h1>
            <Form.Item>
              <Radio.Group
                className="radio_group"
                value={profileData.dog_good_with_cats || ""}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    dog_good_with_cats: e.target.value,
                  });
                }}
              >
                <Radio.Button
                  className="radio_btn"
                  value="no"
                  style={{color: "black"}}
                >
                  No
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="unsure"
                  style={{color: "black"}}
                >
                  Unsure
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="yes"
                  style={{color: "black"}}
                >
                  Yes
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>
          <br />

          <Row gutter={16}>
            <h1 className="dog_size_heading">
              What size dogs does your dog get along with? (Feel free to select
              multiple choices)
            </h1>
            <Form.Item
              value={profileData.dog_other_dog_size_compatibility || ""}
              onChange={(e) => {
                setProfileData({
                  ...profileData,
                  dog_other_dog_size_compatibility: e.target.value,
                });
              }}
            >
              <div className="box-selection-container">
                <div
                  className={`box${
                    selectedBoxes.includes(1) ? " selected" : ""
                  }`}
                  onClick={() => handleBoxSelection(1)}
                >
                  <LazyLoadImage src="assets/size/small-dog.svg" alt="box-1" />
                  0-15lbs <span>Small</span>
                  <Checkbox value="0-15lbs" />
                </div>
                <div
                  className={`box${
                    selectedBoxes.includes(2) ? " selected" : ""
                  }`}
                  onClick={() => handleBoxSelection(2)}
                >
                  <LazyLoadImage src="assets/size/medium-dog.svg" alt="box-2" />
                  16-40lbs <span>Medium</span>
                  <Checkbox value="16-40lbs" />
                </div>
                <div
                  className={`box${
                    selectedBoxes.includes(3) ? " selected" : ""
                  }`}
                  onClick={() => handleBoxSelection(3)}
                >
                  <LazyLoadImage src="assets/size/large-dog.svg" alt="box-3" />
                  41-100lbs <span>Large</span>
                  <Checkbox value="41-100lbs" />
                </div>
                <div
                  className={`box${
                    selectedBoxes.includes(4) ? " selected" : ""
                  }`}
                  onClick={() => handleBoxSelection(4)}
                >
                  <LazyLoadImage src="assets/size/gaintdog.svg" alt="box-4" />
                  100+lbs <span>Giant</span>
                  <Checkbox value="100+lbs" />
                </div>
              </div>
            </Form.Item>
          </Row>
          <br />
        </Col>

        <Col lg={4} xs={0}></Col>
      </Row>
    </>
  );
};

export default StepThree;
