import React from "react";
import {Row, Col, Input, Form, Radio, Checkbox} from "antd";
import "./StepPage.css";

const StepTwo = ({profileData, setProfileData}) => {
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
                // style={{display: "flex", flexDirection: "row", gap: 20}}
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
            style={{display: "flex", flexDirection: "column", gap: 20}}
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
              <Checkbox value="boarding">Boarding</Checkbox>
              <Checkbox value="daycare">Daycare</Checkbox>
              <Checkbox value="playdate">Playdate</Checkbox>
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
