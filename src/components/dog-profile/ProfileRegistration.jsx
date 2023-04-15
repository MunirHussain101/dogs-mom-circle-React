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
  Select,
  Upload,
  Modal,
} from "antd";
import {DownOutlined, LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import "./DogProfile.css";
import { useSelector } from "react-redux";
import axios from "../../api/axios";

const {TextArea} = Input;

const ProfileRegistration = () => {
  const [current, setCurrent] = useState(0);
  const authDetails = useSelector((state) => state?.auth?.userDetails);

  console.log(authDetails?.id);
  // const id = authDetails?.id;
  const [profileData, setProfileData] = useState({
      id: authDetails?.id,
      zipCode: "",
      willing_travel_distance: "",
      activity_type: "",
      spay_neuter_prefs: "",
      shedding_prefs:"",
      house_training_prefs:"",
      dog_left_alone_prefs: "",
      have_a_cat: "",
      additional_notes: "",
      profile_pic: "",
      dog_name: "",
      dog_birthday:"",
      dog_size: "",
      dog_shedding: "",
      dog_house_trained: "",
      dog_can_be_left_alone: "",
      dog_spayed_neutered:"",
      dog_good_with_cats: "",
      dog_other_dog_size_compatibility:"",
      dog_breed: "",
      image: "",
  });

  // const onInputChange = (e) =>{
  //   setProfileData({...profileData, [e.target.name] : e.target.value});
  // }


  const navigate = useNavigate();

  const onFinishForwardStep = () => {
    setCurrent(current + 1);
  };

  const onChange = (value) => {
    // console.log("onChange:", value);
    setCurrent(value);
  };

  // console.log("current --> ", current);

  const handleSubmit = async (values) => {
    if(current == 0) {
      setCurrent(current + 1);
    } else if(current == 1) {
      setCurrent(current + 1);
    } else if(current == 2) {
      setCurrent(current + 1);
    } else if(current == 3) {
      setCurrent(navigate("/search"));
      try {
        const response = await axios.post(
          "/api/auth/additional-data",
          profileData
          // {
          //   id: values.id,
          //   zipCode: values.zipCode,
          //   willing_travel_distance: values.willing_travel_distance,
          //   activity_type: values.activity_type,
          //   spay_neuter_prefs: values.spay_neuter_prefs,
          //   shedding_prefs: values.shedding_prefs,
          //   house_training_prefs: values.house_training_prefs,
          //   dog_left_alone_prefs: values.dog_left_alone_prefs,
          //   have_a_cat: values.have_a_cat,
          //   additional_notes: values.additional_notes,
          //   profile_pic: values.profile_pic,
          //   dog_name: values.dog_name,
          //   dog_birthday: values.dog_birthday,
          //   dog_size: values.dog_size,
          //   dog_shedding: values.dog_shedding,
          //   dog_house_trained: values.dog_house_trained,
          //   dog_can_be_left_alone: values.dog_can_be_left_alone,
          //   dog_spayed_neutered: values.dog_spayed_neutered,
          //   dog_good_with_cats: values.dog_good_with_cats,
          //   dog_other_dog_size_compatibility:
          //     values.dog_other_dog_size_compatibility,
          //   dog_breed: values.dog_breed,
          //   image: values.image,
          // }
        );
        console.log("response::", response?.data);
        // navigate("/");
        setProfileSuccess(true);
      } catch (err) {
        console.log(err);
        // messageApi.open({
        //   type: "error",
        //   content: err.response.data.message,
        // });
      }
    }
  };

  const conditionalComponent = () => {
    switch (current) {
      case 0:
        return <ProfileRegistration1 profileData={profileData} setProfileData={setProfileData} />;
      case 1:
        return <ProfileRegistration2 profileData={profileData} setProfileData={setProfileData} />;
      case 2:
        return <ProfileRegistration3 profileData={profileData} setProfileData={setProfileData} />;
      case 3:
        return <ProfileRegistration4 profileData={profileData} setProfileData={setProfileData} />;
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
          <Form>
            {conditionalComponent()}

            <div style={{display: "flex", justifyContent: "space-evenly"}}>
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
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Row>
        <Col lg={4}></Col>

        <Col lg={16}>
          <Row style={{display: "flex", flexDirection: "column"}}>
            <h1 className="pets_heading">What's your dog name?</h1>
            <Input className="input_box" name="dog_name" 
             onChange={(e) => {
              setProfileData({...profileData, [e.target.name] : e.target.value})
            }}
            value={profileData.dog_name}  />
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
                    setProfileData({ ...profileData, dog_birthday: e });
                  }}
                />
              </Col>
              {/* <Col><DatePicker onChange={onChange} picker="year"  className="input_box" /></Col> */}
            </Row>
          </Row>
          <br />

          {/* Row for Breed  */}
          <Row style={{display: "flex", flexDirection: "column"}}>
            <h1 className="dog_size_heading">Dog Size</h1>
            {/* <Row> */}
            <Form.Item name="dog_size">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
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
                <Radio.Button className="radio_btn_2" value="141-100lbs">
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
                <Radio.Button className="radio_btn_2" value="101+lbs">
                  <Row
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <img src="assets/size/gaintdog.svg" />
                    101+lbs <span>Giant</span>
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
                defaultValue="Select Breed"
                style={{width: 120}}
                name="dog_breed"
                value={profileData.dog_breed}
                onChange={(e) => {
                  setProfileData({
                    ...profileData,
                      dog_breed: e,
                  });
                }}
                className="input_box_1"
              >
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
            <Input className="input_box" name="zipCode"
            value={profileData.zipCode} 
            onChange={(e) => 
              setProfileData({...profileData, [e.target.name] : e.target.value}) }
             />
          </Row>

          <br />

          {/* Row for Breed  */}
          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">
              how far are you willing to travel for boarding?
            </h1>
            <Form.Item name="willing_travel_distance">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
                value={profileData.willing_travel_distance} 
                onChange={(e) => {
                  setProfileData({...profileData, willing_travel_distance:e.target.value});
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
            <Form.Item name="activity_type">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
                value={profileData.activity_type} 
                onChange={(e) => {
                  setProfileData({...profileData, activity_type:e.target.value});
                 }}
              >
                <Radio.Button
                  className="radio_btn"
                  value="Boarding"
                  style={{color: "black"}}
                >
                  Boarding
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="Daycare"
                  style={{color: "black"}}
                >
                  Daycare
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="Playdate"
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
            <Form.Item name="dog_shedding">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
                value={profileData.dog_shedding} 
                onChange={(e) => {
                  setProfileData({...profileData, dog_shedding:e.target.value});
                 }}

              >
                <Radio.Button
                  className="radio_btn"
                  value="No Shedding"
                  style={{color: "black"}}
                >
                  No shedding
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="Moderate"
                  style={{color: "black"}}
                >
                  Moderate
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="Alot"
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
            <Form.Item name="dog_house_trained">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
                value={profileData.dog_house_trained} 
                onChange={(e) => {
                  setProfileData({...profileData, dog_house_trained:e.target.value});
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
                  value="working in progress"
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
            <Form.Item name="dog_can_be_left_alone">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
                value={profileData.dog_can_be_left_alone} 
                onChange={(e) => {
                  setProfileData({...profileData, dog_can_be_left_alone:e.target.value});
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
                  value="coupleHour"
                  style={{color: "black"}}
                >
                  yes, a couple <br />
                  <span>of hour</span>
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="fewHour"
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
            <Form.Item name="dog_spayed_neutered">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
                value={profileData.dog_spayed_neutered} 
                onChange={(e) => {
                  setProfileData({...profileData, dog_spayed_neutered:e.target.value});
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
            <Form.Item name="dog_good_with_cats">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
                value={profileData.dog_good_with_cats} 
                onChange={(e) => {
                  setProfileData({...profileData, dog_good_with_cats:e.target.value});
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
            <Form.Item name="dog_other_dog_size_compatibility">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
                value={profileData.dog_other_dog_size_compatibility} 
                onChange={(e) => {
                  setProfileData({...profileData, dog_other_dog_size_compatibility:e.target.value});
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
                  value="141-100lbs"
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
                    141-100lbs <span>Large</span>
                  </Row>
                </Radio.Button>
                <Radio.Button
                  className="radio_btn_2"
                  value="101+lbs"
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
                    101+lbs <span>Giant</span>
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

function ProfileRegistration4({profileData, setProfileData}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/search");
  };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  const [loading, setLoading] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => {
    setIsModalOpen(false);
    setPreviewOpen(false);
  };
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({fileList: newFileList, e}) => {
    setFileList(newFileList)
    setProfileData({...profileData, image:e.target.value})
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

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
            <Form.Item name="spay_neuter_prefs">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
                value={profileData.spay_neuter_prefs}
                onChange={(e) => {
                  setProfileData({...profileData, spay_neuter_prefs:e.target.value});
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
                  value="prefer Dog"
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
            <Form.Item name="shedding_prefs">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
                value={profileData.shedding_prefs}
                onChange={(e) => {
                  setProfileData({...profileData, shedding_prefs:e.target.value});
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
                  value="shedding"
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
            <Form.Item name="house_training_prefs">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
                value={profileData.house_training_prefs}
                onChange={(e) => {
                  setProfileData({...profileData, house_training_prefs:e.target.value});
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
                  value="not house trained"
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
            <Form.Item name="dog_left_alone_prefs">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
                value={profileData.dog_left_alone_prefs}
                onChange={(e) => {
                  setProfileData({...profileData, dog_left_alone_prefs:e.target.value});
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
                  value="coupleHour"
                  style={{color: "black"}}
                >
                  yes, a couple <br /> of hours
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  value="fewHours"
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
            <Form.Item name="have_a_cat">
              <Radio.Group
                style={{display: "flex", flexDirection: "row", gap: 10}}
                defaultValue=""
                value={profileData.have_a_cat}
                onChange={(e) => {
                  setProfileData({...profileData, have_a_cat:e.target.value});
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
              name="additional_notes"
              value={profileData.additional_notes}
              onChange={(e) => {
                setProfileData({...profileData, additional_notes:e.target.value});
               }}
            />
          </Row>
          <br />

          {/*  Upload your profile picture */}
          <Row>
            <h1 className="upload_heading">Upload your profile picture</h1>
            {/* <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              name="image"
              onPreview={handlePreview}
              value={profileData.image}
              onChange={handleChange}
              
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload> */}
            <input type="file" value={profileData.images} onChange={(e) => 
              setProfileData({...profileData, image:e.target.files})} />
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{width: "100%"}} src={previewImage} />
            </Modal>
          </Row>

          {/* Upload your dog pictures */}
          <Row>
            <h1 className="upload_heading">
              Upload your dog pictures{" "}
              <span style={{color: "#7A7777"}}>(upto 5)</span>
            </h1>
            <input type="file" value={profileData.images} onChange={(e) => 
              setProfileData({...profileData, image:e.target.files})} />
            {/* <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              // onChange={handleChange}
              name="image"
               value={profileData.image}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{width: "100%"}} src={previewImage} />
            </Modal> */}
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
