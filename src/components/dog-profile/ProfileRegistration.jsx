import React, {useEffect, useState} from "react";
import {
  Row,
  Col,
  Steps,
  Input,
  Radio,
  Form,
  Button,
  DatePicker,
  Select,
  Upload,
  Modal,
  message,
} from "antd";
import {
  UploadOutlined,
} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import "./DogProfile.css";
import {useSelector} from "react-redux";
import axios from "../../api/axios";

const {TextArea} = Input;

const ProfileRegistration = () => {
  const [current, setCurrent] = useState(0);
  const authDetails = useSelector((state) => state?.auth?.userGetId);
  const [profileData, setProfileData] = useState({
    zipCode: "",
    willing_travel_distance: "",
    activity_type: "",
    spay_neuter_prefes: "",
    shedding_prefs: "",
    house_training_prefs: "",
    dog_left_alone_prefs: "",
    have_a_cat: "",
    additional_notes: "",
    profile_pic: "",
    dog_name: "",
    dog_birthday: "",
    dog_size: "",
    dog_shedding: "",
    dog_house_trained: "",
    dog_can_be_left_alone: "",
    dog_spayed_neutered: "",
    dog_good_with_cats: "",
    dog_other_dog_size_compatibility: "",
    dog_breed: "",
    user_profile: null,
    dog_profile: null,
  });

  const cloud_name = "dbwdp3ixw";
  const [images, setImages] = useState();
  const [images2, setImages2] = useState();

  const handleImage = (e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "profilePic");
  axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,  formData)
  .then(res => {
    console.log(res.data)
    setImages(res.data.secure_url)
  })
  .then(err => console.log(err))
}

const handleImage2 = (e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "dogPic");
  axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,  formData)
  .then(res => {
    console.log(res.data.secure_url)
    setImages2(res.data.secure_url)
  })
  .then(err => console.log(err))
}

  let formData = new FormData();
  formData.append("id", authDetails);
  formData.append("zipCode", profileData.zipCode);
  formData.append(
    "willing_travel_distance",
    profileData.willing_travel_distance
  );
  formData.append("activity_type", profileData.activity_type);
  formData.append("spay_neuter_prefes", profileData.spay_neuter_prefes);
  formData.append("shedding_prefs", profileData.shedding_prefs);
  formData.append("house_training_prefs", profileData.house_training_prefs);
  formData.append("dog_left_alone_prefs", profileData.dog_left_alone_prefs);
  formData.append("have_a_cat", profileData.have_a_cat);
  formData.append("additional_notes", profileData.additional_notes);
  formData.append("dog_name", profileData.dog_name);
  formData.append("dog_birthday", profileData.dog_birthday);
  formData.append("dog_shedding", profileData.dog_shedding);
  formData.append("dog_size", profileData.dog_size);
  formData.append("dog_house_trained", profileData.dog_house_trained);
  formData.append("dog_can_be_left_alone", profileData.dog_can_be_left_alone);
  formData.append("dog_spayed_neutered", profileData.dog_spayed_neutered);
  formData.append("dog_good_with_cats", profileData.dog_good_with_cats);
  formData.append(
    "dog_other_dog_size_compatibility",
    profileData.dog_other_dog_size_compatibility
  );
  formData.append("dog_breed", profileData.dog_breed);
  formData.append("user_profile", images);
  formData.append("dog_profile", images2);

  

  const navigate = useNavigate();


  const handleSubmit = async (values) => {
    if (current == 0) {
      setCurrent(current + 1);
    } else if (current == 1) {
      setCurrent(current + 1);
    } else if (current == 2) {
      setCurrent(current + 1);
    } else if (current == 3) {
      setCurrent(navigate("/login"));
      try {
        const response = await axios.post(
          "/api/auth/additional-data",
          formData
        );
        setProfileSuccess(true);
      } catch (err) {
        messageApi.open({
          type: "error",
          content: err,
        });
      }
    }
  };

  const conditionalComponent = () => {
    switch (current) {
      case 0:
        return (
          <ProfileRegistration1
            profileData={profileData}
            setProfileData={setProfileData}
          />
        );
      case 1:
        return (
          <ProfileRegistration2
            profileData={profileData}
            setProfileData={setProfileData}
          />
        );
      case 2:
        return (
          <ProfileRegistration3
            profileData={profileData}
            setProfileData={setProfileData}
          />
        );
      case 3:
        return (
          <ProfileRegistration4
            profileData={profileData}
            setProfileData={setProfileData}
            handleImage={handleImage}
            handleImage2={handleImage2}
          />
        );
      default:
        <></>;
    }
  };

  return (
    <>
      <Row>
        <Col lg={4}></Col>

        <Col lg={16}>
          <Steps
            type="navigation"
            size="small"
            current={current}
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
          <Form>
            {conditionalComponent()}

            <div style={{display: "flex", justifyContent: "space-around"}}>
              {current > 0 && (
                <Button
                  className="back_btn"
                  onClick={() => setCurrent(current - 1)}
                >
                  Back
                </Button>
              )}
              <Button
                onClick={handleSubmit}
                className="next_btn"
                style={{color: "white"}}
              >
                {current == 0 || current == 1 || current == 2
                  ? "Next"
                  : "Submit"}
              </Button>
            </div>
          </Form>
        </Col>

        <Col lg={4}></Col>
      </Row>
    </>
  );
};

function ProfileRegistration1({profileData, setProfileData}) {
  return (
    <>
      <Row>
        <Col lg={4}></Col>

        <Col lg={16}>
          <Row style={{display: "flex", flexDirection: "column"}}>
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

          <Row style={{display: "flex", flexDirection: "column", gap: 10}}>
            <h1 className="pets_heading">
              The dog was born in year xx month xx
            </h1>
            <Row style={{gap: 10}}>
              <Col>
                <DatePicker
                  picker="month"
                  placeholder="Select month and year"
                  className="input_box"
                  name="dog_birthday"
                  value={profileData.dog_birthday}
                  onChange={(e) => {
                    setProfileData({...profileData, dog_birthday: e});
                  }}
                />
              </Col>
            </Row>
          </Row>
          <br />

          {/* Row for Breed  */}
          <Row style={{display: "flex", flexDirection: "column"}}>
            <h1 className="dog_size_heading">Dog Size</h1>
            {/* <Row> */}
            <Form.Item>
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
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
                    141-100lbs <span>Large</span>
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
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">The breed is</h1>
            <div>
              <Select
                style={{width: 120}}
                value={profileData.dog_breed}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    dog_breed: e,
                  });
                }}
                className="input_box_1"
              >
                <Option value="pug">Pug</Option>
              </Select>

              {/* </Form.Item> */}
            </div>
          </Row>
          <br />
        </Col>

        <Col lg={4}></Col>
      </Row>
    </>
  );
}

function ProfileRegistration2({profileData, setProfileData}) {
  return (
    <>
      <Row>
        <Col lg={4}></Col>

        <Col lg={16}>
          <Row>
            <h1 className="pets_heading">what's your zip code?</h1>
          </Row>

          {/* Row for Input Box */}
          <Row>
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
          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">
              how far are you willing to travel for boarding?
            </h1>
            <Form.Item>
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
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
                  style={{color: "black"}}
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
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">
              What are you looking for ( Feel free to select multiple choices)?
            </h1>
            <Form.Item>
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                value={profileData.activity_type}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    activity_type: e.target.value,
                  });
                }}
              >
                <Radio.Button
                  className="radio_btn"
                  value="boarding"
                  style={{color: "black"}}
                >
                  Boarding
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="daycare"
                  style={{color: "black"}}
                >
                  Daycare
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="playdate"
                  style={{color: "black"}}
                >
                  Playdate
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>
          <br />
        </Col>

        <Col lg={4}></Col>
      </Row>
    </>
  );
}

function ProfileRegistration3({profileData, setProfileData}) {
  return (
    <>
      <Row>
        <Col lg={4}></Col>

        <Col lg={16}>
          {/* Row for Breed  */}
          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">
              What is your dog's shedding level?
            </h1>
            <Form.Item>
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                value={profileData.dog_shedding}
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
                  No shedding
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

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Is your dog house trained?</h1>
            <Form.Item>
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                value={profileData.dog_house_trained}
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
                  working in <br />
                  <span>progress</span>
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

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">
              Can your dog be left alone? If so, how long?
            </h1>
            <Form.Item>
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                value={profileData.dog_can_be_left_alone}
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
                  yes, a couple <br />
                  <span>of hour</span>
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="a few hours"
                  style={{color: "black"}}
                >
                  yes, a few of <br />
                  <span>hours</span>
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">
              Has your dog been spayed or neutered?
            </h1>
            <Form.Item>
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                value={profileData.dog_spayed_neutered}
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

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">
              Do your dog get along with cats?
            </h1>
            <Form.Item>
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                value={profileData.dog_good_with_cats}
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

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">
              What size dogs does your dog get along with? (Feel free to select
              multiple choices)
            </h1>
            <Form.Item>
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                value={profileData.dog_other_dog_size_compatibility}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                    dog_other_dog_size_compatibility: e.target.value,
                  });
                }}
              >
                <Radio.Button
                  className="radio_btn_2"
                  value="0-15lbs"
                  style={{color: "black"}}
                >
                  <Row
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img src="assets/size/small-dog.svg" />
                    0-15lbs <span>Small</span>
                  </Row>
                </Radio.Button>
                <Radio.Button
                  className="radio_btn_2"
                  style={{color: "black"}}
                  value="16-40lbs"
                >
                  <Row
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img src="assets/size/medium-dog.svg" />
                    16-40lbs <span>Medium</span>
                  </Row>
                </Radio.Button>
                <Radio.Button
                  className="radio_btn_2"
                  value="41-100lbs"
                  style={{color: "black"}}
                >
                  <Row
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img src="assets/size/large-dog.svg" />
                    41-100lbs <span>Large</span>
                  </Row>
                </Radio.Button>
                <Radio.Button
                  className="radio_btn_2"
                  value="100+lbs"
                  style={{color: "black"}}
                >
                  <Row
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img src="assets/size/gaintdog.svg" />
                    100+lbs <span>Giant</span>
                  </Row>
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Row>
          <br />
        </Col>

        <Col lg={4}></Col>
      </Row>
    </>
  );
}

function ProfileRegistration4({profileData, setProfileData, handleImage, handleImage2}) {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/search");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <Row>
        <Col lg={4}></Col>

        <Col lg={16}>
          {/* Row for Breed  */}
          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">
              preference regarding spaying or neutering
            </h1>
            <Form.Item>
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
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

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Shedding type you'd prefer?</h1>
            <Form.Item>
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
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

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">
              House training level you'd prefer
            </h1>
            <Form.Item>
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
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

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Will the dog be left along?</h1>
            <Form.Item>
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
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

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Do you have a cat?</h1>
            <Form.Item>
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
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

          <Row style={{display: "flex", flexDirection: "column"}}>
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
          <Row style={{display: "flex", flexDirection: "column"}}>
            <h1 className="upload_heading">Upload your profile picture</h1>
            <Form.Item
              name="user_profile"
              onChange={handleImage}
            >
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </Row>

          {/* Upload your dog pictures */}
          <Row style={{display: "flex", flexDirection: "column"}}>
            <h1 className="upload_heading">
              Upload your dog pictures{" "}
              <span style={{color: "#7A7777"}}>(upto 5)</span>
            </h1>
            <Form.Item
              name="dog_profile"
              onChange={handleImage2}
            >
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>

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
          <Row>
            <Modal
              className="modal_btn"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="assets/modal/modal.svg" width={50} />
              </Row>
              <p>
                We have saved your information and will work hard to help find
                you a match!
              </p>
            </Modal>
          </Row>
        </Col>

        <Col lg={4}></Col>
      </Row>
    </>
  );
}

export default ProfileRegistration;
