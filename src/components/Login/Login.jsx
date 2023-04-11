import React from 'react'
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import "./Login.css";
import { LockOutlined,  MailOutlined} from "@ant-design/icons"

// import { LockOutlined, MailOutline } from 'antd';

const Login = () => {
  return (
    <>
      <Row className="main_row_for_login" justify="center">
        <Col lg={5} xs={0}></Col>
        <Col
          lg={14}
          xs={24}
          style={{
            display:'flex',
            justifyContent:"center",
            background: "#FFFFFF",
            padding: "45px",
            borderRadius: "20px",
          }}
        >
          <Form>
            <Col lg={24} xs={24}>
                <div className='main_login_input'>
                    <Link to="/login">
                    <Button type="text"className='login_link' style={{color:"#EAB2BB"}}>Login</Button>
                    </Link>
                    {"  "}
                    <Link to="/register" className='signup_link'>
                    <Button type="text" className='login_link'>Sign Up</Button>
                    </Link>
                </div>
            </Col>
            <br />
            <Col lg={24} xs={24}>
             <Form.Item >
                <Input placeholder='Enter your email' className='login_input' prefix={<MailOutlined 
                style={{color: "#EAB2BB"}}/>}/>
             </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
            <Form.Item>
                <Input placeholder='Enter your password' className='login_input'
                prefix={<LockOutlined style={{color: "#EAB2BB"}}/>} />
             </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
              <Row justify="space-evenly">
              <Checkbox color="#EAB2BB">Remember me</Checkbox>
              {/* <Link to="/forget-password">
                {" "}
                <p className="forget_password_head">Forget Password?</p>
              </Link> */}
              </Row>
            </Col>
            <br />
            <Col lg={24} xs={24} className="login_btn_div">
              <Link to="/dogProfile1">
              <Button htmlType="submit" className="login_btn">
                Login
              </Button>
              </Link>
            </Col>
          </Form>
        </Col>
        <Col lg={5} xs={0}></Col>

      </Row>
      <br />
    </>
  )
}

export default Login
