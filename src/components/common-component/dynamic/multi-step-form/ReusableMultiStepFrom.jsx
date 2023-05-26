import React, {useState} from "react";

import StepOne from "../../../../pages/step-pages/StepOne";
import StepTwo from "../../../../pages/step-pages/StepTwo";
import StepThree from "../../../../pages/step-pages/StepThree";
import StepFour from "../../../../pages/step-pages/StepFour";
import axios from "../../../../api/axios";

import {Steps, Button, Row, Col, Modal, message, Form} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { storage, db } from "../../../../api/firebase";
import {LazyLoadImage} from "react-lazy-load-image-component";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import {doc, setDoc, updateDoc} from "firebase/firestore";
const {Step} = Steps;

const ReusableMultiStepFrom = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [err, setErr] = useState(false);
  const authDetails = useSelector((state) => state?.auth?.userGetId);
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  console.log("currentuser --->", currentUser);

  const [profileData, setProfileData] = useState({
    zipCode: "",
    willing_travel_distance: "",
    activity_type: [],
    spay_neuter_prefs: "",
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
    dog_other_dog_size_compatibility: [],
    dog_breed: "",
    user_profile: null,
    dog_profile: null,
  });

  const cloud_name = "dbwdp3ixw";
  const handleImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "profilePic");
    const res = await axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      setImage(res.data.secure_url);
      setErr(err)
      const date = new Date().getTime();
      const storageRef = ref(storage, `${res.data.secure_url, date}`);

      const uploadPic =  await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateDoc(doc(db, "users", currentUser.uid), {
            photoURL: downloadURL,
          });
        });
      });
  };

  const handleImage2 = (e) => {
    const selectedFiles = e.target.files;

    if (selectedFiles.length > 5) {
      const confirmation = window.confirm(
        "You can only upload a maximum of 5 images. Do you want to proceed with the first 5 selected images?"
      );

      if (confirmation) {
        // Slice the selectedFiles array to keep only the first 5 files
        const files = Array.from(selectedFiles).slice(0, 5);
        processFiles(files);
      } else {
        // Reset the file input
        e.target.value = null;
      }
    } else {
      processFiles(selectedFiles);
    }
  };

  const processFiles = (files) => {
    const uploadedFiles = [];

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("file", files[i]);
      formData.append("upload_preset", "dogPic");
      axios
        .post(
          `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
          formData
        )
        .then((response) => {
          uploadedFiles.push(response.data.secure_url);

          if (uploadedFiles.length === files.length) {
            setImage2(uploadedFiles);
          }
        });
    }
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFinish = async () => {
    try {
      const body = {
        id: authDetails,
        zipCode: profileData.zipCode,
        willing_travel_distance: profileData.willing_travel_distance,
        activity_type: profileData.activity_type,
        spay_neuter_prefs: profileData.spay_neuter_prefs,
        shedding_prefs: profileData.shedding_prefs,
        house_training_prefs: profileData.house_training_prefs,
        dog_left_alone_prefs: profileData.dog_left_alone_prefs,
        have_a_cat: profileData.have_a_cat,
        additional_notes: profileData.additional_notes,
        dog_name: profileData.dog_name,
        dog_birthday: profileData.dog_birthday,
        dog_shedding: profileData.dog_shedding,
        dog_size: profileData.dog_size,
        dog_house_trained: profileData.dog_house_trained,
        dog_can_be_left_alone: profileData.dog_can_be_left_alone,
        dog_spayed_neutered: profileData.dog_spayed_neutered,
        dog_good_with_cats: profileData.dog_good_with_cats,
        dog_other_dog_size_compatibility:
          profileData.dog_other_dog_size_compatibility,
        dog_breed: profileData.dog_breed,
        user_profile: image,
        dog_profile: image2,
      };

      const response = await axios.post("/api/auth/additional-data", body);
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

  function navigateToSearch() {
    const getToken = localStorage.getItem("tokenSignup");
    if (getToken) {
      navigate("/search");
    } else {
      navigate("/");
    }
  }
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
                image2={image2}
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
                // <Link to={localStorage.getItem("tokenSignup") ? "/search" : ""}>
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
