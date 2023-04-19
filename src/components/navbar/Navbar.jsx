import {Avatar, Button, Col, Dropdown, Row, Space, message} from "antd";
// import styles from "../../../styles/sections/Navbar.module.css"
import {UserOutlined} from "@ant-design/icons";
import {Link, useLocation} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAuth } from "../../features/auth/authSlice";



const Navbar = () => {
  const location = useLocation();
  const dispatch=useDispatch()
  const authDetails = useSelector((state) => state?.auth?.userDetails);


  const firstName = authDetails?.firstname;
  const lastName = authDetails?.lastname;
  const profilePic = authDetails?.profile_pic;

 


  
     const logoutAuth=()=>{
      dispatch((logoutUserAuth()))
  }



  const itemsMenuAuth = [
    {
      key: "4",
      label: <Link to='/' onClick={logoutAuth}>Logout</Link>,
    },
   
  ];
     

  const itemsMenuNoAuth = [
    {
      key: "1",
      label: <Link to="/register">SignUp</Link>,
    },
    {
      key: "2",
      label: <Link to="/login">Login</Link>,
    },
  
  ];
  const menuPropsAuth = {
    items:itemsMenuAuth
    //   onClick: handleMenuClick,
  };
  const menuPropsNoAuth = {
    items:itemsMenuNoAuth
    //   onClick: handleMenuClick,
  };




  
  return (
    <>
      <Row
        className={
          location.pathname !== "/" ? "main_row_nav" : "main_row_nav_home"
        }
      >
        <Col lg={12} className="main_first_col">
          <Link to={!authDetails ? "/register" : "/search"}>
            {/* <img
        src="assets/header/Dogs-Mom-Circle (4) 1.svg"
        alt="Picture of the author"
           width={124.27}
       height={66}
    /> */}
            <LazyLoadImage
              src="/assets/header/Dogs-Mom-Circle (4) 1.svg"
              width={124.27}
              height={66}
              alt="dog mom nav image"
              effect="opacity"
            />{" "}
          </Link>
        </Col>
        <Col lg={12} className="main_sec_col">
          <Link href="/search-page">
   
               {location.pathname==='/'?(
                <>
                  <Dropdown menu={authDetails?menuPropsAuth:menuPropsNoAuth}>
                  <Button>
                    <Space>
                       
                        {!authDetails?'Account':`${firstName + " " +lastName}`}
                      
                        <UserOutlined />
                        {/* <Avatar size="small" src = {profilePic}/> */}

                    </Space>
                  </Button>
                </Dropdown>
                </>
               ):<>
                      <Dropdown menu={authDetails?menuPropsAuth:menuPropsNoAuth}>
                  <Button>
                    <Space>
                    {!authDetails?'Account':`${firstName + " " +lastName}`}

                      {/* <UserOutlined /> */}
                        {!authDetails ? <UserOutlined /> : <Avatar size="small" src = {profilePic}/>}
                    </Space>
                  </Button>
                </Dropdown>
               </>}

              {/* {authDetails ? (
              <>
                <Dropdown menu={menuProps}>
                  <Button>
                    <Space>
                    <b>{firstName + " " + lastName}</b>
                      <UserOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </>
            ) : (
              <>
                <Button icon={<UserOutlined />}>
                  {""}
                  <b>{firstName + " " + lastName}</b>
                </Button>
              </>
            )} */}
            {/* {location.pathname === "/" ? (
              <>
                <Dropdown menu={menuProps}>
                  <Button>
                    <Space>
                      Account
                      <UserOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </>
            ) : (
              <>
                <Button icon={<UserOutlined />}>
                  {""}
                  <b>{firstName + " " + lastName}</b>
                </Button>
              </>
            )} */}
            {/* <Button icon={<UserOutlined />}>
                  {''}
                  <b>
                   Bao
                   </b>
                   
                   </Button>
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  Account
                  <UserOutlined />
                </Space>
              </Button>
            </Dropdown> */}
          </Link>
        </Col>

        {/* {location.pathname!=='/'?(
                    <>
                             <Col lg={12} className="main_sec_col">
                    <Link href='/search-page'>
                <Button icon={<UserOutlined />}>
                  {''}
                  <b>
                   Bao
                   </b>
                   
                   </Button>
                   </Link>
                </Col>
                    </>
                ):<></>} */}
      </Row>
    </>
  );
};
export default Navbar;
