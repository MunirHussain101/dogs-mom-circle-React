import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { getUserId } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Row, Col, Form, Input, Button, Checkbox, message} from "antd";


import "./SignUp.css";
// import axios from "axios";

const SignUp = () => {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  const handleSubmit = async (values) => {

    try {
      const response = await axios.post(
        '/api/auth/signup',
        {
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          password: values.password,
          phone: values.phone,
        },
      );
      dispatch(getUserId(response?.data?.data?.id));

      navigate("/profileReg");
      setRegisterSuccess(true);

    } catch (err) {
      messageApi.open({
        type: "error",
        content: err.response.data.message,
      });
    }
  };  

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
                <p className="login_link" style={{background:"none"}}>
                 Already a member?
                 &nbsp;
                 <Link to="/login" style={{color:"#EAB2BB"}}>
                 Login here
                 </Link>
                </p>
                {/* <Link to="/login">
                  <Button type="text" className="login_link" style={{background:"none"}}>
                    Login
                  </Button>
                </Link>
                {"  "}
                <Link to="/register" className="signup_link">
                  <Button
                    type="text"
                    className="login_link"
                    style={{color: "#EAB2BB", background:"none"}}
                  >
                    Sign Up
                  </Button>
                </Link> */}
              </div>
            </Col>
            <br />
            <Col lg={24} xs={24}>
              <Form.Item name="firstname"  rules={[
                  {
                    required: true,
                    message: "FirstName is required",
                  }
                ]} >
                <Input placeholder="First name" className="login_input" style={{color:"black"}} />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
              <Form.Item  name="lastname" 
               rules={[
                {
                  required: true,
                  message: "LastName is required",
                }
              ]} >
                <Input placeholder="Last name" className="login_input" style={{color:"black"}} />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
              <Form.Item name="email" 
               rules={[
                {
                  required: true,
                  message: "Email is required",
                }
              ]} >
                <Input type="email" placeholder="Email" className="login_input" style={{color:"black"}}
                />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
              <Form.Item name="phone"  rules={[
                  {
                    required: true,
                    message: "Phone is required",
                  }
                ]} >
                <Input placeholder="Phone number"  className="login_input" style={{color:"black"}} />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
              <Form.Item name="password" 
               rules={[
                {
                  required: true,
                  message: "Password is required",
                }
              ]} >
                <Input.Password
                  placeholder="Password(6 digits at least)"
                  className="login_input"
                  style={{color:"black"}}
                  
                />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24} className="login_btn_div">
              <Button htmlType="submit" className="login_btn" style={{border:"none", color:"white"}}>
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
                  <Checkbox style={{width:"360px"}}>
                  By using this platform, you accept full responsibility for the
                  safety of yourself and your dog during any exchanges.The
                  platform is not liable for any incidents or damages that may
                  occur. Please use caution and due diligence when interacting
                  with other users.
                </Checkbox>
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
