import React, {useState} from "react";
import {Row, Col, Form, Radio, Input, Upload} from "antd";
import "./StepPage.css";

const {TextArea} = Input;

const StepFour = ({profileData, setProfileData, handleImage, handleImage2}) => {
  return (
    <>
      <Row>
        <Col lg={4} xs={0}></Col>

        <Col lg={16} xs={24} className="main_form_box" >
          <Row
            style={{display: "flex", flexDirection: "column", gap: 20}}
            gutter={16}
          >
            <h1 className="dog_size_heading">
              Preference regarding spaying or neutering
            </h1>
            <Form.Item>
              <Radio.Group
                // style={{display: "flex", flexDirection: "row", gap: 20}}
                className="radio_group"
                value={profileData.spay_neuter_prefes}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    spay_neuter_prefes: e.target.value,
                  });
                }}
              >
                <Radio.Button
                  className="radio_btn"
                  value="no preference"
                  style={{color: "black"}}
                >
                  No <span>preference</span>
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  style={{color: "black"}}
                  value="prefer fixed dog"
                >
                  prefer the <br />
                  <span>dog is fixed</span>
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>
          <br />

          <Row
            style={{display: "flex", flexDirection: "column", gap: 20}}
            gutter={16}
          >
            <h1 className="dog_size_heading">Shedding type you'd prefer</h1>
            <Form.Item>
              <Radio.Group
                // style={{display: "flex", flexDirection: "row", gap: 20}}
                className="radio_group"
                value={profileData.shedding_prefs}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    shedding_prefs: e.target.value,
                  });
                }}
              >
                <Radio.Button
                  className="radio_btn"
                  value="no shedding"
                  style={{color: "black"}}
                >
                  No shedding
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="moderate"
                  style={{color: "black"}}
                >
                  Moderate <br />
                  shedding
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="doesnt bother"
                  style={{color: "black"}}
                >
                  Shedding doesn’t <br /> bother me
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
              House training level you'd prefer
            </h1>
            <Form.Item>
              <Radio.Group
                className="radio_group"
                value={profileData.house_training_prefs}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    house_training_prefs: e.target.value,
                  });
                }}
              >
                <Radio.Button
                  className="radio_btn"
                  value="fully trained"
                  style={{color: "black"}}
                >
                  Fully house <br />
                  trained
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="doesnt bother"
                  style={{color: "black"}}
                >
                  Not house <br />
                  trained is ok
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>
          <br />

          <Row
            style={{display: "flex", flexDirection: "column", gap: 20}}
            gutter={16}
          >
            <h1 className="dog_size_heading">Will the dog be left along?</h1>
            <Form.Item>
              <Radio.Group
                // style={{display: "flex", flexDirection: "row", gap: 20}}
                className="radio_group"
                value={profileData.dog_left_alone_prefs}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    dog_left_alone_prefs: e.target.value,
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
                  yes, a couple <br /> of hours
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="a few hours"
                  style={{color: "black"}}
                >
                  yes, a few of <br /> hours
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>
          <br />

          <Row
            style={{display: "flex", flexDirection: "column", gap: 20}}
            gutter={16}
          >
            <h1 className="dog_size_heading">Do you have a cat?</h1>
            <Form.Item>
              <Radio.Group
                // style={{display: "flex", flexDirection: "row", gap: 20}}
                className="radio_group"
                value={profileData.have_a_cat}
                onChange={(e) => {
                  setProfileData({...profileData, have_a_cat: e.target.value});
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

          <Row style={{display: "flex", flexDirection: "column", gap: 20}}>
            <h1 className="add_info">
              Any other things you would like to add?
            </h1>
            <TextArea
              rows={4}
              style={{width: 340, height: 120}}
              value={profileData.additional_notes}
              onChange={(e) => {
                setProfileData({
                  ...profileData,
                  additional_notes: e.target.value,
                });
              }}
            />
          </Row>
          <br />

          {/*  Upload your profile picture */}
          <Row style={{display: "flex", flexDirection: "column", gap: 20}}>
            <h1 className="upload_heading">Upload your profile picture</h1>
            <Form.Item name="user_profile">
              <input
                type="file"
                accept="image/*"
                value={profileData.image}
                onChange={handleImage}
              />
              {/* <Upload
                name="user_profile"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={true}
              >
                Dog Profile
              </Upload> */}
            </Form.Item>
          </Row>

          {/* Upload your dog pictures */}
          <Row style={{display: "flex", flexDirection: "column", gap: 20}}>
            <h1 className="upload_heading">
              Upload your dog pictures{" "}
              <span style={{color: "#7A7777"}}>(upto 5)</span>
            </h1>
            <Form.Item name="dog_profile">
              <input
                type="file"
                accept="image/*"
                multiple
                value={profileData.image2}
                onChange={handleImage2}
              />
              {/* <Upload
                name="dog_profile"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={true}
              >
                Dog Profile
              </Upload> */}
            </Form.Item>
            {/* <Form.Item 
            valuePropName="fileList"
            name="dog_profile"
            getValueFromEvent={(event) => {
              return event?.fileList
            }}
            rules={[
              {
                required: true,
                message: "Please upload your profile"
              },
              {
                validator(_, fileList) {
                  return new Promise((resolve, reject) => {
                    if(fileList && fileList[0].size > 9000000) {
                      reject("File size exceeded")
                    } else {
                      resolve("success")
                    }
                  })
                }
              }
            ]}>
            <Upload
              maxCount={1}
              beforeUpload={(file) => {
                return new Promise((resolve, reject) => {
                  if(file.size > 9000000) {
                    reject("File size exceeded")
                  } else {
                    resolve("success")
                  }
                })
              }}
              name="dog_profile"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={true}
            >
              <PlusOutlined />
            </Upload>
              
            </Form.Item> */}
          </Row>
          <br />

          {/* Modal */}
        </Col>

        <Col lg={4} xs={0}></Col>
      </Row>
    </>
  );
};

export default StepFour;
