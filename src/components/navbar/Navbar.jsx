import {Avatar, Button, Col, Dropdown, Row, Space, message} from "antd";
// import styles from "../../../styles/sections/Navbar.module.css"
import {UserOutlined} from "@ant-design/icons";
import {Link, useLocation} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "./Navbar.css";
import {useDispatch, useSelector} from "react-redux";
import {logoutUserAuth} from "../../features/auth/authSlice";
import CreatePost from "../posts/CreatePost";
import NotificationDropdown from "../notification/NotificationDropdown";
import Chat from "../../pages/chats/Chat";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const authDetails = useSelector((state) => state?.auth?.userDetails);

  const firstName = authDetails?.firstname;
  const lastName = authDetails?.lastname;
  const profilePic = authDetails?.profile_pic;

  const logoutAuth = () => {
    dispatch(logoutUserAuth());
  };

  const itemsMenuAuth = [
    {
      key: "4",
      label: <Link to="/">Profile</Link>,
    },
    {
      key: "5",
      label: <Link to="/">Settings</Link>,
    },
    {
      key: "6",
      label: (
        <Link to="/" onClick={logoutAuth}>
          Logout
        </Link>
      ),
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
    items: itemsMenuAuth,
  };
  const menuPropsNoAuth = {
    items: itemsMenuNoAuth,
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
          <Row style={{display: "flex", gap: 25, alignItems: "center"}}>
            <Col>
              {location.pathname === "/" ||
              location.pathname === "/register" ||
              location.pathname === "/login" ||
              location.pathname === "/profileReg" ? (
                <></>
              ) : (
                <CreatePost />
              )}
              {/* <Button
              style={{background:"#EAB2BB", borderRadius:7, color:"white", borderColor:"#EAB2BB"}}
              >Post
             </Button> */}
            </Col>
            <Col>
              {location.pathname === "/" ||
              location.pathname === "/register" ||
              location.pathname === "/login" ||
              location.pathname === "/profileReg" ? (
                <></>
              ) : (
                <NotificationDropdown />
              )}
            </Col>

            <Col>
              {location.pathname === "/" ||
              location.pathname === "/register" ||
              location.pathname === "/login" ||
              location.pathname === "/profileReg" ? (
                <></>
              ) : (
                // <LazyLoadImage src="/assets/favicoIcon/message.svg" />
                <Link to="/chats">
                  <LazyLoadImage src="/assets/favicoIcon/message.svg" />
                </Link>
              )}
            </Col>
            <Col>
              <Link href="/search-page">
                {location.pathname === "/" ||
                location.pathname === "/register" ||
                location.pathname === "/login" ||
                location.pathname === "/profileReg" ? (
                  <>
                    <Dropdown
                      menu={authDetails ? menuPropsAuth : menuPropsNoAuth}
                    >
                      <Button>
                        <Space>
                          {!authDetails
                            ? "Account"
                            : `${firstName + " " + lastName}`}

                          <UserOutlined />
                        </Space>
                      </Button>
                    </Dropdown>
                  </>
                ) : (
                  <>
                    <Dropdown
                      menu={authDetails ? menuPropsAuth : menuPropsNoAuth}
                    >
                      <Button>
                        <Space>
                          {!authDetails
                            ? "Account"
                            : `${firstName + " " + lastName}`}

                          {/* <UserOutlined /> */}
                          {!authDetails ? (
                            <UserOutlined />
                          ) : (
                            <Avatar size="small" src={profilePic} />
                          )}
                        </Space>
                      </Button>
                    </Dropdown>
                  </>
                )}
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Navbar;
