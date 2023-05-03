import React, { useState } from "react";
import {Row, Col, Input, Form, Radio, Checkbox} from "antd";
import "./StepPage.css";

const StepTwo = ({profileData, setProfileData}) => {
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
          <Row style={{display: "flex", flexDirection: "column", gap: 20}}>
            <h1 className="pets_heading">what's your zip code?</h1>
            <Input
              className="input_box"
              name="zipCode"
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Row>

          <br />
          {/* Row for Breed  */}
          <Row
            style={{display: "flex", flexDirection: "column", gap: 20}}
            gutter={16}
          >
            <h1 className="dog_size_heading">
              how far are you willing to travel for boarding?
            </h1>
            <Form.Item>
              <Radio.Group
                className="radio_group"
                value={profileData.willing_travel_distance}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    willing_travel_distance: e.target.value,
                  });
                }}
              >
                <Radio.Button
                  className="radio_btn"
                  value="<10 miles"
                  style={{color: "black"}}
                >
                  {"<10 miles"}
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="10-25 miles"
                  style={{color: "black", textAlign: "center"}}
                >
                  10-25 miles
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value=">25 miles"
                  style={{color: "black"}}
                >
                  {">25 miles"}
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>
          <Row
            gutter={16}
          >
            <h1 className="dog_size_heading">
              What are you looking for ( Feel free to select multiple choices)?
            </h1>
            <Form.Item
              value={profileData.activity_type}
              onChange={(e) => {
                setProfileData({
                  ...profileData,
                  activity_type: e.target.value,
                });
              }}
            >
              <div className="box-selection-container">
                <div
                  className={`box_2${
                    selectedBoxes.includes(1) ? " selected" : ""
                  }`}
                  onClick={() => handleBoxSelection(1)}
                >
                  <p className="box_heading">Boarding</p>
                  <Checkbox
                    value="boarding"
                    // checked={selectedBoxes.includes(1)}
                  />
                </div>
                <div
                  className={`box${
                    selectedBoxes.includes(2) ? " selected" : ""
                  }`}
                  onClick={() => handleBoxSelection(2)}
                >
                  <p className="box_heading">Daycare</p>

                  <Checkbox
                    value="daycare"
                    // checked={selectedBoxes.includes(2)}
                  />
                </div>
                <div
                  className={`box${
                    selectedBoxes.includes(3) ? " selected" : ""
                  }`}
                  onClick={() => handleBoxSelection(3)}
                >
                  <p className="box_heading">Playdate</p>

                  <Checkbox
                    value="playdate"
                    // checked={selectedBoxes.includes(3)}
                  />
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

export default StepTwo;
