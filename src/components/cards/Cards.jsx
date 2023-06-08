import {useEffect, useState} from "react";
import {Button, Col, Input, Rate, Row, message} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";
import cards from "./cards.json";
import axios from "../../api/axios";
import "./Cards.css";
import { getPostDetails } from "../../features/posts/postSlice";
import { useDispatch } from "react-redux";


const Cards = () => {
  const [usersWithPost, setUsersWithPost] = useState([]);
  const [usersWithoutPost, setUsersWithoutPost] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [btnValue, setBtnValue] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  // GET API
  useEffect(() => {
    const getPost = async () => {
     try {
      const response = await axios.post(
        "/api/getPosts",
        {
          zip_code: searchValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response::::", response?.data);
      dispatch(getPostDetails(response?.data));
      const usersWithPost = response.data.posts.filter(
        (user) => user.start_date
      );

      const usersWithoutPost = response.data.allUsers.filter(
        (user) => !user.start_date
      );
      setUsersWithPost(usersWithPost);
      setUsersWithoutPost(usersWithoutPost);
      setBtnValue(false);
     
     } catch(err) {
        setError(err);
     }
    };
   getPost();
  }, [btnValue]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", {month: "short"});
    const day = date.getDate();
    const year = date.getFullYear().toString().substr(-2);
    return `${month} ${day}th’${year}`;
  };

  const phMine = `Enter your  zipcode | How far are you willing to travel? | Search a time period | Dog preference`;

  return (
    <>
      {/* Search Bar */}
      <Row style={{marginTop: 16}}>
        <Col lg={6} xs={1}></Col>
        <Col lg={12} xs={22}>
          <div style={{display: "flex"}}>
            <Input
              placeholder={phMine}
              className="search_field"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button
              type="text"
              className="search_field_btn"
              onClick={() => {
                setBtnValue(true);
              }}
            >
              Search <SearchOutlined />
            </Button>
          </div>
        </Col>

        <Col lg={6} xs={1}></Col>
      </Row>

      {/* Looking for Boarding */}

      <Row justify="space-between" className="main_row_cards_heading">
        <h1>Looking for boarding</h1>
      </Row>
      <Row justify="space-between" className="main_row_cards">
       
        {usersWithPost
          ? usersWithPost.map((values) => {
              return (
                <>
                  <Col
                    lg={5}
                    xs={24}
                    style={{margin: 15}}
                    className="main_col_searchpg"
                    key={values?.userId}
                  >
                    <Link to={`/profile/${values?.userId}`}>
                      <div
                        style={{
                          backgroundImage: `url(${values.user.profile_pic})`,
                          height: "213px",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          borderRadius: 8,
                        }}
                      ></div>
                    </Link>

                    <Row justify="space-between" style={{height: 25}}>
                      <Col>
                        <h1 className="main_row_card_f_head">
                          {values?.user.firstname} {values?.user.lastname}
                        </h1>
                      </Col>
                      <Col>
                        <Row
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            columnGap: 5,
                          }}
                        >
                          <img
                            src="assets/home-cards/layer1.svg"
                            alt="Picture of the author"
                            className="main_row_cards_icon"
                          />
                          <p className="main_row_card_f_points">
                            {"--"}

                            <span
                              style={{
                                color: "#A6A6A6",
                                fontWeight: "lighter",
                                marginLeft: 4,
                              }}
                            >
                              20 Points
                            </span>
                          </p>
                        </Row>
                      </Col>
                    </Row>
                    <Row style={{height: 30}}>
                      <Col>
                        <p className="main_row_card_s_head">Richmond, CA</p>
                      </Col>
                    </Row>

                    <p
                      style={{textAlign: "left", height: 10}}
                      className="main_row_card_dates_head"
                    >
                      Dates need help
                    </p>
                    <Row justify="space-between">
                      <Col
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 7,
                        }}
                      >
                        <span className="start_date">
                          {formatDate(values.start_date)}
                        </span>
                        <span className="end_date">
                          {formatDate(values.end_date)}
                        </span>
                      </Col>
                      <Col >
                        <Rate
                          style={{color: "#3E6DA8", fontSize: 14}}
                          defaultValue={5}
                        />{" "}
                        <span style={{color: "#3E6DA8", fontSize: 14}}>
                          (10)
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </>
              );
            })
          : "Not Found"}
      </Row>

      {/* All Members */}

      <Row justify="space-between" className="main_row_cards_heading">
        <h1>All Members</h1>
      </Row>
      <Row justify="space-between" className="main_row_cards">
        {usersWithoutPost
          ? usersWithoutPost.map((values) => {
              return (
                <>
                  <Col
                    lg={5}
                    xs={24}
                    style={{margin: 15}}
                    className="main_col_searchpg"
                    key={values?.id}
                  >
                    <Link to={`/profile/${values?.id}`}>
                      <div
                        style={{
                          backgroundImage: `url(${values.profile_pic})`,
                          height: "213px",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          borderRadius: 8,
                        }}
                      ></div>
                    </Link>

                    <Row justify="space-between" style={{height: 20}}>
                      <Col>
                        <h1 className="main_row_card_f_head">
                          {values?.firstname} {values?.lastname}
                        </h1>
                      </Col>
                      <Col>
                        <Row
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            columnGap: 5,
                          }}
                        >
                          <img
                            src="assets/home-cards/layer1.svg"
                            alt="Picture of the author"
                            className="main_row_cards_icon"
                          />
                          <p className="main_row_card_f_points">
                            {"--"}

                            <span
                              style={{
                                color: "#A6A6A6",
                                fontWeight: "lighter",
                                marginLeft: 4,
                              }}
                            >
                              20 Points
                            </span>
                          </p>
                        </Row>
                      </Col>
                    </Row>
                    <Row style={{height: 30}}>
                      <Col>
                        <p className="main_row_card_s_head">Richmond, CA</p>
                      </Col>
                    </Row>

                    <p
                      style={{textAlign: "left", height: 10}}
                      className="main_row_card_dates_head"
                    >
                      Dates need help
                    </p>
                    <Row justify="space-between">
                      <Col style={{display: "flex", alignItems: "center"}}>
                        <Rate
                          style={{color: "#3E6DA8", fontSize: 14}}
                          defaultValue={5}
                        />{" "}
                        <span style={{color: "#3E6DA8", fontSize: 14}}>
                          (10)
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </>
              );
            })
          : "Not Found"}
      </Row>
    </>
  );
};

export default Cards;
