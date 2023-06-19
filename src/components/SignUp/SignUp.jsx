import React, {useEffect, useState} from "react";
import axios from "../../api/axios";
import {getUserId} from "../../features/auth/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {getUserDetails} from "../../features/auth/authSlice";
import {Row, Col, Form, Input, Button, Checkbox, message} from "antd";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth, db, storage} from "../../api/firebase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {doc, setDoc} from "firebase/firestore";
import "./SignUp.css";

const SignUp = () => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = async (values, e) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
        phone: values.phone,
      });
      dispatch(getUserId(response?.data?.data?.id));
      localStorage.setItem("signUpToken",response?.data?.data?.token);
      const {firstname, lastname, email, phone, password, file} = values;
      const displayName = firstname + lastname;
      //Create user
      // debugger
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log({ res })
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          //Update profile
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });
          //create user on firestore
          const r = await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            phone,
            photoURL: downloadURL,
            dbId: response?.data?.data?.id
          });
          console.log({r})
          //create empty user chats on firestore
          await setDoc(doc(db, "userChats", res.user.uid), {});
          
        });
      });

      navigate("/profile-register");
      setRegisterSuccess(true);
    } catch (err) {
      setErr(err);
      messageApi.open({
        type: "error",
        content: err.response.data.message,
      });
    }
  };

  useEffect(() => {
    if (registerSuccess) {
      const userDetails = async () => {
        try {
          const response = await axios.post(`/api/user/get-profile`, {
            id: userId,
            token: tokenValue,
          });
          dispatch(getUserDetails(response.data));
          messageApi.open({
            type: "success",
            content: "Logged In SuccessFully",
          });
          setTimeout(() => {
            form.resetFields();
          }, 1000);
        } catch (err) {
          messageApi.open({
            type: "error",
            content: err.response,
          });
        }
      };
      userDetails();
    }
  }, [registerSuccess]);

  return (
    <>
      {contextHolder}
      <Row className="main_row_for_login" justify="center">
        <Col lg={5} xs={0}></Col>
        <Col
          lg={14}
          xs={24}
          style={{
            display: "flex",
            justifyContent: "center",
            background: "#FFFFFF",
            padding: "45px",
            borderRadius: "20px",
          }}
        >
          <Form onFinish={handleSubmit} scrollToFirstError>
            <Col lg={24} xs={24}>
              <div className="main_login_input">
                <p className="login_link" style={{background: "none"}}>
                  Already a member? &nbsp;
                  <Link to="/login" style={{color: "#EAB2BB"}}>
                    Login here
                  </Link>
                </p>
              </div>
            </Col>
            <br />
            <Col lg={24} xs={24}>
              <Form.Item
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: "FirstName is required",
                  },
                ]}
              >
                <Input
                  placeholder="First name"
                  className="login_input"
                  style={{color: "black"}}
                />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
              <Form.Item
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "LastName is required",
                  },
                ]}
              >
                <Input
                  placeholder="Last name"
                  className="login_input"
                  style={{color: "black"}}
                />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Email is required",
                  },
                ]}
              >
                <Input
                  type="email"
                  placeholder="Email"
                  className="login_input"
                  style={{color: "black"}}
                />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Phone is required",
                  },
                ]}
              >
                <Input
                  placeholder="Phone number"
                  className="login_input"
                  style={{color: "black"}}
                />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Password is required",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Password(6 digits at least)"
                  className="login_input"
                  style={{color: "black"}}
                />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24} className="login_btn_div">
              <Button
                htmlType="submit"
                className="login_btn"
                style={{border: "none", color: "white"}}
              >
                Create my account
              </Button>
            </Col>

            <Col
              lg={24}
              xs={24}
              className="login_btn_div"
              style={{marginTop: 22}}
            >
              <Row>
                <Form.Item>
                  <Checkbox style={{width: "360px"}}>
                    By using this platform, you accept full responsibility for
                    the safety of yourself and your dog during any exchanges.The
                    platform is not liable for any incidents or damages that may
                    occur. Please use caution and due diligence when interacting
                    with other users.
                  </Checkbox>
                </Form.Item>
              </Row>
            </Col>
          </Form>
        </Col>
        <Col lg={5} xs={0}></Col>
      </Row>
      <br />
    </>
  );
};

export default SignUp;
