import { Button, Col, Form, Input, Modal, Row, message } from "antd"
// import styles from "../../../styles/sections/EmailSec.module.css"
import { MailOutlined, MessageFilled, MessageOutlined } from "@ant-design/icons"
import './EmailSec.css';
import { useState } from "react";

const EmailSec=()=>{
    const [email, setEmail]=useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
   

    const emailSent=()=>{
        if(email){
            messageApi.open({
                type: 'success',
                content: "Thank you for joining our waiting list! We'll notify you when a spot becomes available.",
              });
              setEmail('')
        }else{
            messageApi.open({
                type: 'error',
                content: "Please Fill This Field",
              });  
        }
        
    }
    return(
        <>
      {contextHolder}
        
          <Row style={{marginTop:50}}>
            <Col lg={8}></Col>
            <Col lg={8} xs={24} style={{display:'flex', justifyContent:'center'}}>
                <h1 className="main_head_email">Join our waitlist</h1>
            </Col>
            <Col lg={8}></Col>
    
            <Col lg={4}></Col>
            </Row>
            <Row style={{marginTop:40}}>
            <Col lg={8} xs={2}>
</Col>
<Col lg={8} xs={20}>
   
 
<Input value={email} type="email" onChange={(e)=>{setEmail(e.target.value)}} className="main_emailFiedl" size="large"  placeholder="Type your email address here" prefix={<MailOutlined className="mail_icon" />} suffix={<Button onClick={emailSent}  className="submit_icon"> Submit now</Button>}  />


</Col>
<Col lg={8} xs={2}>
</Col>
            </Row>
{/* </Form> */}
            
           
        </>
    )
}
export default EmailSec;