import React, {useEffect, useState} from "react";
import {Row, Col, Avatar, Rate, Button} from "antd";
import card from "../../components/cards/cards.json";
import "./Profile.css";
import {Link, useParams} from "react-router-dom";
import axios from "../../api/axios";
import {useSelector} from "react-redux";

function Profile() {
  const [userData, setUserData] = useState();
  const {id} = useParams();
  const tokenValue = localStorage.getItem("token");
  const posts = useSelector((state) => state.posts.postDetails);
  console.log("Post", posts);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.post(`/api/user/get-profile`, {
        id: id,
        token: tokenValue,
      });
      setUserData(response?.data);
    };
    getData();
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
      <Row className="main_row_user_profile" style={{marginTop: 80}}>
        <Col lg={4}></Col>
        <Col lg={8}>
          <Row
            className="main_subrow_user_profile"
            style={{display: "flex", gap: 20}}
          >
            <Col>
              <Avatar
                style={{width: 100, height: 100}}
                src={userData?.profile_pic}
              />
            </Col>

            <Col>
              <Row style={{display: "flex", gap: 20}}>
                <h1 className="userName">
                  {userData?.firstname} {userData?.lastname}
                </h1>
                <img
                  src="/assets/profile/verify-user.svg"
                  width={18}
                  height={22}
                  alt="profile-image"
                  className="verify_img"
                />
              </Row>
              <div style={{display: "flex", flexDirection: "column"}}>
                <p className="place_name">Richmond, CA</p>
                <p className="user_para">
                  User -{" "}
                  <span className="user_para2">
                    <b>Franny</b>
                  </span>
                </p>
              </div>
              <div className="card">
                <p className="card_msg">{card.pets[0].datePara}</p>
                <p className="card_date">
               {posts.map((val) => {
                return (
                  <>
                   <span className="start_date">
                          {formatDate(val.start_date)}
                        </span>
                        <span className="end_date">
                          {formatDate(val.end_date)}
                        </span>
                  </>
                )
               })}
                </p>
              </div>
              <br />
              <div>
               <Link to="/chats">
               <Button className="chat_btn">
                  <span className="btn_msg">Chat Now</span>
                </Button>
               </Link>
              </div>
            </Col>
          </Row>
        </Col>

        {/* This Col used for Right side content */}
        <Col lg={8}>
          <Row
            style={{
              marginTop: 7,
              display: "flex",
              justifyContent: "flex-end",
              gap: 40,
            }}
          >
            <Col
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
              }}
            >
              <img
                src="/assets/home-cards/layer1.svg"
                alt="Picture of the author"
                className="main_row_cards_icon_profile"
              />
              <p className="main_row_card_f_points_profile">
                {card.pets[0].petsPoint}{" "}
                <span style={{color: "#A6A6A6", fontWeight: "lighter"}}>
                  Points
                </span>
              </p>
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
              }}
            >
              <Rate
                className="rating"
                style={{color: "#3E6DA8", fontSize: 15}}
                defaultValue={5}
              />
              <span style={{color: "#3E6DA8", fontSize: 15}}>
                {card.pets[0].ratingNo}
              </span>
            </Col>
          </Row>
        </Col>
        <Col lg={4}></Col>
      </Row>

      {/* Line */}
      <br />
      <Row>
        <Col lg={4}></Col>

        <Col lg={16} className="line_col"></Col>

        <Col lg={4}></Col>
      </Row>

      {/* Image Gallery */}
      <Row className="image_gallery_row">
        <Col lg={4}></Col>
        <Col lg={16}>
          <h1 className="gallery_head">
            {userData?.firstname} {userData?.lastname}{" "}
            <span className="gallery_name">Gallery</span>
          </h1>
          <img src={userData?.dogs[0]?.profile_pic} />
        </Col>
        <Col lg={4}></Col>
      </Row>
      <br />

      {/* Lisa's Profile */}
      <Row>
        <Col lg={4}></Col>
        <Col lg={16}>
          <h1 className="gallery_head">
            {userData?.firstname} {userData?.lastname}{" "}
            <span className="gallery_name">Profile</span>
          </h1>
          <br />

          <div className="flex_container">
            <h1></h1>
            {/* <div className="profile_box">Mom</div>
            <div className="profile_box">2 Kids</div> */}
            <div className="profile_box">{userData?.have_a_cat}</div>
            <div className="profile_box">1 Dog</div>
          </div>
        </Col>
        <Col lg={4}></Col>
      </Row>

      <Row>
        <Col lg={4}></Col>
        <Col lg={16}>
          <h1 className="furBaby_head">
            Franny's <span className="furBaby_name">Profile</span>
          </h1>
          <br />

          <div className="flex_container">
            <div className="furBaby_box">{userData?.shedding_prefs}</div>
            <div className="furBaby_box">{userData?.house_training_prefs}</div>
            <div className="furBaby_box">{userData?.dog_left_alone_prefs}</div>
            <div className="furBaby_box">Get along with cats</div>
          </div>
        </Col>
        <Col lg={4}></Col>
      </Row>

      {/* Fur baby's Profile */}
      <Row>
        <Col lg={4}></Col>
        <Col lg={16}>
          <h1 className="furBaby_head">
            {userData?.firstname} {userData?.lastname} can{" "}
            <span className="furBaby_name">Host</span>
          </h1>
          <br />

          <div className="flex_container">
            <div className="furBaby_box" style={{fontSize: 14}}>
              0-50lbs
              <b>Dog</b>
            </div>
          </div>
        </Col>
        <Col lg={4}></Col>
      </Row>

      {/* Additional Information */}
      <Row>
        <Col lg={4}></Col>
        <Col lg={16}>
          <div>
            <h1 className="additional_Info">Additional Information</h1>
            <ul className="styles.info_list">
              <li>{userData?.additional_notes}</li>
            </ul>
          </div>
          <br />
        </Col>
        <Col lg={4}></Col>
      </Row>
      <br />
      <br />
      {/* Review */}
      <Row>
        <Col lg={4}></Col>
        <Col lg={16}>
          <h1 className="additional_Info">Reviews</h1>
          <Row>
            <Col>
              <img
                src="/assets/profile/IMAGE.svg"
                width={50}
                height={50}
                alt="foot"
                className="pets_foot"
              />
            </Col>
            <Col>
              <p className="review_para">Anna</p>
              <span className="review_para2">Mar 27, 2023</span>
            </Col>
          </Row>
          <br />
          <p className="review_last_para">
            {userData?.firstname} {userData?.lastname} has helped me out for
            some last minute extended trips several times now. She is always
            super helpful and accommodating with my messy schedule and my little
            guy seems totally happy when I pick him up. Recommend 100%.
          </p>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </>
    // </div>
  );
}

export default Profile;
