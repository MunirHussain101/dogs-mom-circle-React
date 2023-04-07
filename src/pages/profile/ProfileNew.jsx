import {Avatar, Row, Col, Card, Rate, Button} from "antd";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Gallery } from "react-grid-gallery";
import card from "../../components/cards/cards.json";
import "./ProfileNew.css";

const images = [
  "assets/gallery/image 1 (1).svg",
  "assets/gallery/image2.svg",
  "assets/gallery/image3.svg",
  "assets/gallery/image4.svg",
  "assets/gallery/image5.svg",
];


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ProfileNew = () => {
  // console.log("Profile", card.pets[0].petsName);

  return (
    <>
  {/* main row */}
  <div className="main_margin_box">
  <Row className="main_row_first">
     {/* left col */}
     <Col lg={12} className="first_contentleft">
         <Row className="avatar_row_content">
            <Col className="avatar_img">
            <Avatar  style={{marginTop: 70,width:100, height:100}} src={card.pets[0].img} />
            </Col>
            <Col className="avatar_content">
            <h1  className="userName">{card.pets[0].petsName}</h1>
              <img
                src="assets/profile/verify-user.svg"
                width={18}
                height={22}
                
                alt="profile-image"
                className="verify_img"
              />

            </Col>

         </Row>
     </Col>
     <Col lg={12} className="sec_contentRight">
  <div className="main_right_first">

    <h1>Pints and pint image </h1>
    <h1>Ratting</h1>

</div>
<div className="main_right_sec">
  <h1>Button</h1>
</div>

     </Col>

  </Row>
  </div>
   </>
  );
};
export default ProfileNew;
