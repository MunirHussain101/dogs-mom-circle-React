import React, {useState, useEffect} from "react";
import {Row, Col, Form, Input, Button, Checkbox, message} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import axios from "../../api/axios";
import {getUserDetails} from "../../features/auth/authSlice";
import {useDispatch} from "react-redux";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../api/firebase";
import "../SignUp/SignUp.css";

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [userId, setUserId] = useState("");
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      // debugger
      const response = await axios.post("/api/auth/signin", {
        email: values.email,
        password: values.password,
      });
      setUserId(response?.data?.data?.user.id);
      localStorage.setItem("token", response?.data?.data?.token);
      const {email, password} = values;
      await signInWithEmailAndPassword(auth, email, password);

      setLoginSuccess(true);
    } catch (err) {
      messageApi.open({
        type: "error",
        content: err.response.data.message,
      });
    }
  };
  const tokenValue = localStorage.getItem("token");
  useEffect(() => {
    if (loginSuccess) {
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

            navigate("/search");
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
  }, [loginSuccess]);

  useEffect(() => {
    if (!tokenValue) {
      // navigate("/");
    // console.log({tokenValue})
    }
  }, []);

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
          <Form onFinish={handleSubmit}>
            <Col lg={24} xs={24}>
              <div className="main_login_input">
                <p className="login_link" style={{background: "none"}}>
                  Doesn't have an account? &nbsp;
                  <Link to="/register" style={{color: "#EAB2BB"}}>
                    Signup
                  </Link>
                </p>
              </div>
            </Col>
            <br />
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
                  placeholder="Enter your email"
                  className="login_input"
                  prefix={<MailOutlined style={{color: "#EAB2BB"}} />}
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
                  placeholder="Enter your password"
                  className="login_input"
                  prefix={<LockOutlined style={{color: "#EAB2BB"}} />}
                />
              </Form.Item>
            </Col>
            <Col>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                  <Checkbox style={{display: "flex"}}>Remember me</Checkbox>
                </div>
                <div>
                  <Link to="/forget-password">
                    <span className="forget_password_head">
                      Forget Password?
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
            <br />
            <Col lg={24} xs={24} className="login_btn_div">
              <Button
                htmlType="submit"
                className="login_btn"
                style={{border: "none", color: "white"}}
              >
                Login
              </Button>
            </Col>
          </Form>
        </Col>
        <Col lg={5} xs={0}></Col>
      </Row>
      <br />
    </>
  );
};

export default Login;
