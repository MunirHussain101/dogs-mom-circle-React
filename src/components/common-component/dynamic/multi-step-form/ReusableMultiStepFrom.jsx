import React, {useState} from "react";
import {Steps, Button, Row, Col, Modal, message, Form} from "antd";
import StepOne from "../../../../pages/step-pages/StepOne";
import StepTwo from "../../../../pages/step-pages/StepTwo";
import StepThree from "../../../../pages/step-pages/StepThree";
import StepFour from "../../../../pages/step-pages/StepFour";
import axios from "../../../../api/axios";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const {Step} = Steps;

const ReusableMultiStepFrom = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [err, setErr] = useState(false);
  const authDetails = useSelector((state) => state?.auth?.userGetId);
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const handleImage = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "profilePic");
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
        setImage(res.data.secure_url);
      })
      .then((err) => setErr(err));
  };

  const handleImage2 = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "dogPic");
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
        setImage2(res.data.secure_url);
      })
      .then((err) => setErr(err));
  };

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
  formData.append("user_profile", image);
  formData.append("dog_profile", image2);


  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFinish = async () => {
    try {
      const response = await axios.post("/api/auth/additional-data", formData);
    } catch (err) {
      messageApi.open({
        type: "error",
        content: err,
      });
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    handleFinish();
    navigate("/login");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Row>
        <Col lg={4} xs={2}></Col>
        <Col lg={16} xs={20} md={24}>
          <Steps
            current={currentStep}
            type="navigation"
            size="small"
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
          ></Steps>
          <br />
          <br />
          <Form>
            {currentStep === 0 && (
              <StepOne
                profileData={profileData}
                setProfileData={setProfileData}
              />
            )}
            {currentStep === 1 && (
              <StepTwo
                profileData={profileData}
                setProfileData={setProfileData}
              />
            )}
            {currentStep === 2 && (
              <StepThree
                profileData={profileData}
                setProfileData={setProfileData}
              />
            )}
            {currentStep === 3 && (
              <StepFour
                profileData={profileData}
                setProfileData={setProfileData}
                setImage={setImage}
                setImage2={setImage2}
                handleImage={handleImage}
                handleImage2={handleImage2}
              />
            )}

            <div style={{display: "flex", justifyContent: "space-between"}}>
              {currentStep > 0 && (
                <Button
                  className="back_btn"
                  onClick={handlePrev}
                  style={{color: "black", borderColor: "black"}}
                >
                  Back
                </Button>
              )}
              {currentStep === 0 && (
                <Link to="/login">
                  <Button
                    className="back_btn"
                    style={{color: "black", borderColor: "black"}}
                  >
                    Skip for now
                  </Button>
                </Link>
              )}
              {currentStep < 3 && (
                <Button
                  className="next_btn"
                  onClick={handleNext}
                  style={{
                    background: "#EAB2BB",
                    color: "white",
                    marginLeft: currentStep <= 0 ? "auto" : "",
                  }}
                >
                  Next
                </Button>
              )}

              {currentStep === 3 && (
                <Button
                  className="next_btn"
                  onClick={showModal}
                  style={{background: "#EAB2BB", color: "white"}}
                >
                  Submit
                </Button>
              )}
            </div>
          </Form>
        </Col>
        <Row>
          <Modal
            className="modal_btn"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okButtonProps={{style: {backgroundColor: "#EAB2BB"}}}
          >
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LazyLoadImage src="assets/modal/modal.svg" width={50} />
            </Row>
            <p>
              We have saved your information and will work hard to help find you
              a match!
            </p>
          </Modal>
        </Row>
        <Col lg={4} xs={2}></Col>
      </Row>
    </>
  );
};
export default ReusableMultiStepFrom;
