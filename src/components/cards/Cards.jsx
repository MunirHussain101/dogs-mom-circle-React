import {useEffect, useState} from "react";
import {Col, Rate, Row, message} from "antd";
import {Link, useNavigate, useParams} from "react-router-dom";
import cards from "./cards.json";
import "./Cards.css";
import axios from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import {getPostDetails} from "../../features/posts/postSlice";

const Cards = ({userData}) => {
  const [reviews, setReviews] = useState({
    rating: "",
    review: "",
  });
  const [getPosts, setGetPosts] = useState([]);
  const [usersWithPost, setUsersWithPost] = useState([]);
  const [usersWithoutPost, setUsersWithoutPost] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genId = new Date().getMilliseconds();
  const token = localStorage.getItem("token");

  //   var dt = new Date();
  const handleSubmit = async () => {

    try {
      const response = await axios.post(`/api/review/${genId}`, reviews, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("reviews response --->", response.data);
      navigate("/search");
    } catch (err) {
      messageApi.open({
        type: "error",
        content: err.response,
      });
    }
  };

  // GET API
  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get("/api/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log("post get ---> ", response.data.posts);
      // setGetPosts(response.data);
      const usersWithPost = response.data.posts.filter(
        (user) => user.start_date
      );
      dispatch(getPostDetails(usersWithPost));

      const usersWithoutPost = response.data.allUsers.filter(
        (user) => !user.start_date
      );
      // console.log(usersWithPost);
      // console.log(usersWithoutPost);

      setUsersWithPost(usersWithPost);
      setUsersWithoutPost(usersWithoutPost);
    };
    getPost();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", {month: "short"});
    const day = date.getDate();
    const year = date.getFullYear().toString().substr(-2);
    return `${month} ${day}th’${year}`;
  };

  return (
    <>
      {contextHolder}
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
                  >
                    <Link to={`/profile/${values?.id}`}>
                      <div
                        style={{
                          backgroundImage: `url(${values.user.profile_pic})`,
                          height: "213px",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          // backgroundPosition: "center",
                          borderRadius: 8,
                        }}
                      ></div>
                    </Link>

                    <Row justify="space-between" style={{height: 40}}>
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
                      style={{textAlign: "left", height: 4}}
                      className="main_row_card_dates_head"
                    >
                      Dates need help
                    </p>
                    <br />
                    {/* </div> */}
                    <Row justify="space-between">
                      <Col
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 10,
                        }}
                      >
                        <span className="start_date">
                          {formatDate(values.start_date)}
                        </span>
                        <span className="end_date">
                          {formatDate(values.end_date)}
                        </span>
                      </Col>
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
                  >
                    <Link to={`/profile/${values?.id}`}>
                      <div
                        style={{
                          backgroundImage: `url(${values.profile_pic})`,
                          height: "213px",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          // backgroundPosition: "center",
                          borderRadius: 8,
                        }}
                      ></div>
                    </Link>

                    <Row justify="space-between" style={{height: 40}}>
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
                      style={{textAlign: "left", height: 4}}
                      className="main_row_card_dates_head"
                    >
                      Dates need help
                    </p>
                    {/* </div> */}
                    <Row justify="space-between">
                      {/* <Col>
                        {getPosts.posts.map((val) => {
                          return (
                            <>
                            <p>{val.start_date}</p>
                            <span>{new Date(val.end_date).toLocaleDateString()}</span>;
                            </>
                          )
                        })}
                      </Col> */}
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
