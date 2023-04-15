import React, {useState} from "react";
import {Row, Col, Steps, Input, Radio, Form, Button, Upload, Modal} from "antd";
import {useNavigate} from "react-router-dom";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import "./DogProfile.css";

const {TextArea} = Input;

const DogProfile_4 = () => {
  const [current, setCurrent] = useState(3);
  const [profileSuccess, setProfileSuccess] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [obj, setObj] = useState({

  });
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const navigate = useNavigate();



  




  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/search")
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


 
  const handleSubmit = async (values) => {

    try {
      const response = await axios.post(
        '/api/auth/additional-data',
        {
          id: values.id,
          zipCode: values.zipCode,
          willing_travel_distance: values.willing_travel_distance,
          activity_type: values.activity_type,
          spay_neuter_prefs: values.spay_neuter_prefs,
          shedding_prefs: values.shedding_prefs,
          house_training_prefs: values.house_training_prefs,
          dog_left_alone_prefs: values.dog_left_alone_prefs,
          have_a_cat: values.have_a_cat,
          additional_notes: values.additional_notes,
          profile_pic: values.profile_pic,
          dog_name: values.dog_name,
          dog_birthday: values.dog_birthday,
          dog_size: values.dog_size,
          dog_shedding: values.dog_shedding,
          dog_house_trained: values.dog_house_trained,
          dog_can_be_left_alone: values.dog_can_be_left_alone,
          dog_spayed_neutered: values.dog_spayed_neutered,
          dog_good_with_cats: values.dog_good_with_cats,
          dog_other_dog_size_compatibility: values.dog_other_dog_size_compatibility,
          dog_breed: values.dog_breed,
          image: values.image,
        },
      );
      console.log("response::", response.data);
      // navigate("/");
     
      setProfileSuccess(true);

    } catch (err) {
      // console.log(err.response.data.message);
      messageApi.open({
        type: "error",
        content: err.response.data.message,
      });
    }
  };


  return (
    <>
      {/* ProgressBar */}
    <Form>
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
            <h1 className="dog_size_heading">preference regarding spaying or neutering</h1>
              <Form>
                <Form.Item>
              <Radio.Group style={{display: "flex", flexDirection: "row", gap: 10}}
              defaultValue="">
                <Radio.Button className="radio_btn" value="No preference" style={{color:"black"}}>
                  No <span>preference</span>
                </Radio.Button>
                <Radio.Button
                  className="radio_btn"
                  style={{color:"black"}}
                  
                  value="preferDog"
                >
                  prefer the <br/><span>dog is fixed</span>
                </Radio.Button>
              </Radio.Group>
              </Form.Item>
              </Form>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Shedding type you'd prefer?</h1>
             <Form>
               <Form.Item>
               <Radio.Group style={{display: "flex", flexDirection: "row", gap: 10}}
              defaultValue="">
                <Radio.Button
                  className="radio_btn"
                  value="No shedding"
                  style={{color:"black"}}
                >
                  No shedding
                </Radio.Button>
                <Radio.Button className="radio_btn" value="Moderate shedding" style={{color:"black"}}>
                Moderate <br/>shedding
                </Radio.Button>
                <Radio.Button className="radio_btn" value="Shedding" style={{color:"black"}}>
                Shedding doesn’t <br/> bother me
                </Radio.Button>
              </Radio.Group>
              </Form.Item>
             </Form>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">House training level you'd prefer</h1>
              <Form>
                <Form.Item>
              <Radio.Group style={{display: "flex", flexDirection: "row", gap: 10}}
              defaultValue="">
                <Radio.Button className="radio_btn" value="No" style={{color:"black"}}>
                Fully house <br/>trained
                </Radio.Button>
                <Radio.Button className="radio_btn" value="working in progress" style={{color:"black"}}>
                Not house <br/>trained is ok
                </Radio.Button>
              </Radio.Group>
              </Form.Item>
              </Form>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Will the dog be left along?</h1>
             <Form>
               <Form.Item>
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
                  yes, a couple <br /> of hours
                </Radio.Button>
                <Radio.Button className="radio_btn" value="yes, a few of hours" style={{color:"black"}}>
                  yes, a few of <br /> hours
                </Radio.Button>
              </Radio.Group>
              </Form.Item>
             </Form>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}} gutter={16}>
            <h1 className="dog_size_heading">Do you have a cat?</h1>
             <Form>
               <Form.Item>
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
              </Form.Item>
             </Form>
          </Row>
          <br />

          <Row style={{display: "flex", flexDirection: "column"}}>
            <h1 className="add_info">
              Any other things you would like to add?
            </h1>
            <TextArea rows={4} style={{width: 340, height: 120}} />
          </Row>
          <br />

          {/*  Upload your profile picture */}
          <Row>
            <h1 className="upload_heading">Upload your profile picture</h1>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
              <PlusOutlined />
            </Upload>
          </Row>

          {/* Upload your dog pictures */}
          <Row>
            <h1 className="upload_heading">
              Upload your dog pictures{" "}
              <span style={{color: "#7A7777"}}>(upto 5)</span>
            </h1>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
              <PlusOutlined />
            </Upload>
          </Row>
          <br />
          <Row justify="space-between" style={{marginRight: 100}}>
            <Col>
              <Button
                className="back_btn"
                onClick={() => navigate("/dogprofile3")}
              >
                <span style={{color:"black"}}>Back</span>
              </Button>
            </Col>
            <Col>
              <Button className="next_btn" onClick={showModal}>
              <span style={{color:"white"}}>Save</span>
              </Button>
            </Col>
          </Row>

          <Row>
            <Modal
              className="modal_btn"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Row style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img src="assets/modal/modal.svg" width={50}/>
              </Row>
              <p>We have saved your information and will work hard to help find you a match!</p>
            </Modal>
          </Row>
        </Col>

        <Col lg={4}></Col>
      </Row>
      </Form>

      <br />
      <br />
    </>
  );
};

export default DogProfile_4;
