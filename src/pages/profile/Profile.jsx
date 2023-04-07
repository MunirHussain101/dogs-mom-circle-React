import {Avatar, Row, Col, Card, Rate, Button} from "antd";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Gallery } from "react-grid-gallery";
import card from "../../components/cards/cards.json";
import "./Profile.css";

const images = [
  "assets/gallery/image 1 (1).svg",
  "assets/gallery/image2.svg",
  "assets/gallery/image3.svg",
  "assets/gallery/image4.svg",
  "assets/gallery/image5.svg",
];

// const images = [
//   {src: "assets/gallery/Frame 21.svg", width:279, height:231 },
//   {src: "assets/gallery/Frame 22.svg", width:202, height:115 },
//   <br/>,
//   {src: "assets/gallery/Frame 23.svg", width:203, height:115 },
//   {src: "assets/gallery/Frame 24.svg", width:202, height:115 },
//   {src: "assets/gallery/Frame 25.svg", width:203, height:115 },
// ]
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Profile = () => {
  // console.log("Profile", card.pets[0].petsName);

  return (
    <>
      {/* UserProfile */}
      <Row style={{marginLeft: 300}} >
        <Col lg={12}>
          {/* Image */}
          <Row
            style={{
              display: "flex",
              justifyContent: "flex-start",
              columnGap: "20px",
            }}
          >
            <Col>
              {/* <img
                src={card.pets[0].img}
                width={100}
                height={100}
                alt="profile-image"
                style={{marginTop: 70, borderRadius:100}}
              /> */}
              
         <Avatar  style={{marginTop: 70,width:100, height:100}} src={card.pets[0].img} />
              {/* <h1 className={styles.userName}>Lisa</h1> */}
            </Col>
            <Col>
              <h1  className="userName">{card.pets[0].petsName}</h1>
              <img
                src="assets/profile/verify-user.svg"
                width={18}
                height={22}
                
                alt="profile-image"
                className="verify_img"
              />
              <div>
                <p className="place_name">{card.pets[0].petsPara}</p>
                <p className="user_para">
                  User - <span className="user_para2"><b>Franny</b></span>
                </p>
              </div>
              {/* <Card className={styles.card} > */}
              <div className="card" >
                <p className="card_msg">{card.pets[0].datePara}</p>
                <p className="card_date">{card.pets[0].date}</p>
              {/* </Card> */}
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={12}>
          <Row>
            <Col>
              <img
                src="assets/home-cards/layer1.svg"
                alt="Picture of the author"
                className="main_row_cards_icon_profile"
              />
              <p className="main_row_card_f_points_profile">
                {card.pets[0].petsPoint} {""}
                 {""}

                <span style={{color: "#A6A6A6", fontWeight: "lighter"}}>
                  Points
                </span>
              </p>

            </Col>
              <Col>
              <Rate
                className="rating"
                style={{color: "#3E6DA8", fontSize: 15}}
                allowHalf
                defaultValue={5}
              />
              <span style={{marginLeft: 10, color: "#3E6DA8", fontSize: 15}}>
              {card.pets[0].ratingNo}
              </span>
              </Col>
            <Col>
              <div>
                <Button className="chat_btn">
                  <span className="btn_msg">Chat Now</span>
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Line */}
      <br />
      <hr style={{marginLeft:330, marginRight:320, height:0, backgroundColor:'lightgray'}} />
    
      {/* <br /> */}
      {/* <br /> */}
<br />
<br />
<br />

<br />

  
      {/* Image Gallery */}
      <Row style={{marginLeft: 300}}>
        <Col lg={24}>
          <h1 className="gallery_head">
          {card.pets[0].petsName} <span className="gallery_name">Gallery</span>
          </h1>
          <br />
          
          {/* <Gallery images={images} /> */}
          {/* <ImageList
            sx={{width: 500, height: 450}}
            variant="quilted"
            cols={2}
            rowHeight={121}
          >
            {images.map((item) => (
              <ImageListItem
                key={item}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item, 121, item.rows, item.cols)}
                  alt="Image"
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList> */}

          <img src="assets/gallery/Frame 26.svg" />

        </Col>
      </Row>
      <br />

      {/* Lisa's Profile */}
      <Row style={{marginLeft: 300}}>
        <Col lg={24}>
          <h1 className="gallery_head">
            {card.pets[0].petsName} <span className="gallery_name">Profile</span>
          </h1>
          <br />

          <div className="flex_container">
            <h1>

            </h1>
            {/* <div className="profile_box">Mom</div>
            <div className="profile_box">2 Kids</div> */}
            <div className="profile_box">0 Cat</div>
            <div className="profile_box">1 Dogs</div>
          </div>
        </Col>
      </Row>

      {/* Lise can Host */}
      <Row style={{marginLeft: 300}}>
        <Col lg={24}>
          <h1 className="furBaby_head">
            Franny's <span className="furBaby_name">Profile</span>
          </h1>
          <br />

          <div className="flex_container">
            <div className="furBaby_box">Moderate Shedding</div>
            <div className="furBaby_box">Very house trained</div>
            <div className="furBaby_box">Can not be left along</div>
            <div className="furBaby_box">Get along with cats</div>
          </div>
        </Col>
      </Row>

      {/* Fur baby's Profile */}
      <Row style={{marginLeft: 300}}>
        <Col lg={24}>
          <h1 className="furBaby_head">
            {card.pets[0].petsName} can <span className="furBaby_name">Host</span>
          </h1>
          <br />

          <div className="flex_container">
            <div className="furBaby_box" style={{fontSize: 14}}>
              0-50lbs
              <b>Dog</b>
            </div>
          </div>
        </Col>
      </Row>

      {/* Additional Information */}
      <Row style={{marginLeft: 300}}>
        <Col lg={24}>
          <div>
            <h1 className="additional_Info">Additional Information</h1>
            <br />
            <ul className="styles.info_list">
              <li>
              franny and i live alone in a house with a backyard. we’re hoping to make connections with other dog parents to build a network of support.
              <br />
               franny would love a sibling so hopefully Dog Moms can help us keep her company since we can’t fully manage another dog at this time!



              </li>
              <li>Dogs Allowed On Bed</li>
              <li>Potty Breaks Every 2-4 Hours</li>
              <li>Not Yard</li>
            </ul>
          </div>
          <br />
        </Col>
      </Row>
      <br />
      <br />
      {/* Review */}
      <Row style={{marginLeft: 300}}>
        <Col lg={24}>
          <h1 className="additional_Info">Reviews</h1>
          <Row>
            <Col>
              <img
                src="assets/profile/IMAGE.svg"
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
            {card.pets[0].petsName} has helped me out for some last minute extended trips several
            times now. She is always super helpful and accommodating with my
            messy schedule and my little guy seems totally happy when I pick him
            up. Recommend 100%.
          </p>
        </Col>
      </Row>
      {/* </div> */}
      <br />
      <br />
      <br />
    </>
  );
};
export default Profile;