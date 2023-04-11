import React from "react";
import {Row, Col, Form, Input, Button, Checkbox} from "antd";
import {Link} from "react-router-dom";
import "./SignUp.css";
import {LockOutlined, MailOutline} from "@mui/icons-material";

const Login = () => {
  return (
    <>
      <Row className="main_row_for_login" justify="center">
        <Col lg={5} xs={0}></Col>
        <Col
          lg={14}
          xs={24}
          style={{
            background: "#FFFFFF",
            padding: "45px",
            borderRadius: "20px",
          }}
        >
          <Form>
            <Col lg={24} xs={24}>
              <div className="main_login_input">
                <Link to="/login">
                  <Button type="text" className="login_link">
                    Login
                  </Button>
                </Link>
                {"  "}
                <Link to="register" className="signup_link">
                  <Button
                    type="text"
                    className="login_link"
                    style={{color: "#EAB2BB"}}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </Col>
            <br />
            <Col lg={24} xs={24}>
              <Form.Item>
                <Input placeholder="First name" className="login_input" />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
              <Form.Item>
                <Input placeholder="Last name" className="login_input" />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
              <Form.Item>
                <Input placeholder="Email" className="login_input" />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
              <Form.Item>
                <Input placeholder="Phone number" className="login_input" />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
              <Form.Item>
                <Input
                  placeholder="Password(6 digits at least)"
                  className="login_input"
                />
              </Form.Item>
            </Col>
            <Col lg={24} xs={24} className="login_btn_div">
              <Button htmlType="submit" className="login_btn">
                Create my account
              </Button>
            </Col>
          </Form>
          <Col lg={5} xs={0}></Col>
        </Col>
      </Row>
      <br />
    </>
  );
};

export default Login;
