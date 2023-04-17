import React,{ useState, useEffect } from 'react'
import { Row, Col, Form, Input, Button, Checkbox, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { LockOutlined,  MailOutlined} from "@ant-design/icons"
import InputField from '../common-component/dynamic/form/InputField';
import axios from '../../api/axios';
import { getUserDetails } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [userId, setUserId] = useState("");
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {

    try {
      const response = await axios.post(
        '/api/auth/signin',
        {
          email: values.email,
          password: values.password,
        },
      );
      setUserId(response?.data?.data?.user.id)
      localStorage.setItem("token", response?.data?.data?.token);
      setLoginSuccess(true);

    } catch (err) {
      messageApi.open({
        type: "error",
        content: err.response.data.message,
      });
    }
  }
  const tokenValue = localStorage.getItem("token");


  useEffect(()=>{

    if(loginSuccess){
      const userDetails=async()=>{
        try {

        const response =await axios.post(`/api/user/get-profile`, {
          
            id:userId,
            token:tokenValue
        }, 
        
      
        
        );
        dispatch((getUserDetails(response.data)))
        messageApi.open({
          type: "success",
          content: "Logged In SuccessFully",
        });
        setTimeout(()=>{
        form.resetFields()

    navigate('/search')
        },1000)
      
    }catch(err){

      messageApi.open({
        type: "error",
        content: err.response,
      });
    }
  }
      userDetails()  
      }
    
  },[loginSuccess])
  
  return (
    <> 
      {contextHolder}
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
          <Form onFinish={handleSubmit}>
            <Col lg={24} xs={24}>
                <div className='main_login_input'>
                    <Link to="/login">
                    <Button type="text"className='login_link' style={{color:"#EAB2BB", background:"none"}} >Login</Button>
                    </Link>
                    {"  "}
                    <Link to="/register" className='signup_link'>
                    <Button type="text" className='login_link' style={{background:"none"}}>Sign Up</Button>
                    </Link>
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
              }
            ]}>
                <Input placeholder='Enter your email' className='login_input' prefix={<MailOutlined 
                style={{color: "#EAB2BB"}} />} />
                {/* <InputField fieldName="email" placeHolder="Enter your email"
                 className='login_input' prefix={<MailOutlined 
                  style={{color: "#EAB2BB"}} />} /> */}
             </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
            <Form.Item 
            name="password"
            rules={[
              {
                required: true,
                message: "Password is required",
              }
            ]}>
                <Input.Password placeholder='Enter your password' className='login_input'
                prefix={<LockOutlined style={{color: "#EAB2BB"}}/>} />
             </Form.Item>
            </Col>
            <Col lg={24} xs={24}>
              <Row >
              <Col><Checkbox color="#EAB2BB" style={{display:"flex", alignItems:"center"}}>Remember me</Checkbox></Col>
              {/* <Col><Link to="/forget-password">
                <p className="forget_password_head">Forget Password?</p>
              </Link>
              </Col> */}
              </Row>
            </Col>
            <br />
            <Col lg={24} xs={24} className="login_btn_div">
              {/* <Link to="/"> */}
              <Button htmlType="submit" className="login_btn"  style={{border:"none", color:"white"}}>
                Login
              </Button>
              {/* </Link> */}
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
