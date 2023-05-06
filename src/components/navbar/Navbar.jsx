import {Avatar, Button, Col, Dropdown, Row, Space, message} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {Link, useLocation} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {useDispatch, useSelector} from "react-redux";
import {logoutUserAuth} from "../../features/auth/authSlice";
import CreatePost from "../posts/CreatePost";
import NotificationDropdown from "../notification/NotificationDropdown";
import "./Navbar.css";

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
              location.pathname === "/profile-register" ? (
                <></>
              ) : (
                <CreatePost />
              )}
            </Col>
            <Col>
              {location.pathname === "/" ||
              location.pathname === "/register" ||
              location.pathname === "/login" ||
              location.pathname === "/profile-register" ? (
                <></>
              ) : (
                <NotificationDropdown />
              )}
            </Col>

            <Col>
              {location.pathname === "/" ||
              location.pathname === "/register" ||
              location.pathname === "/login" ||
              location.pathname === "/profile-register" ? (
                <></>
              ) : (
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
                location.pathname === "/profile-register" ? (
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
