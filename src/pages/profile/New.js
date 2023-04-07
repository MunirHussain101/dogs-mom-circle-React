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
    <div className="main_div_for_space">
     <Row>
      <Col lg={12} style={{display:'flex', alignItems:"center"}}>
        {/* left content */}
         
          {/* row for Avatar content */}
         <Row style={{display:'flex', gap:22}}>
          {/* col for avatar */}
          <Col>
          <Avatar  style={{width:100, height:100}} src={card.pets[0].img} />
            
          </Col>
          {/* col for content */}

          <Col style={{marginTop:10}}>
              <div style={{display:'flex',columnGap:"5px", height:20, alignItems:'center'}}> 
              <h1  
              
              className="userName"
              
              >
                
                {card.pets[0].petsName}</h1>
              <img
                src="assets/profile/verify-user.svg"
                width={17}
                height={20}
                
                alt="profile-image"
                // className="verify_img"
              />
              </div>
                <p 
                
                
                className="place_name"
                
                >{card.pets[0].petsPara}</p>
                <p 
                
                className="user_para"
                
                >
                  User - <span 
                  
                  
                  className="user_para2"
                  
                  ><b>Nori</b></span>
                </p>
              {/* <Card className={styles.card} > */}
              <Col className="card" >
                <p className="card_msg">{card.pets[0].datePara}</p>
                <p className="card_date">{card.pets[0].date}</p>
              </Col>
               

          </Col>
         </Row>
      </Col>

      
      <Col lg={12} style={{display:'flex', justifyContent:'center', marginTop:1}}>

   <Row style={{display:'flex', gap:10,marginLeft:'auto'}}>
  {/* right content */}
  <img
                src="assets/home-cards/layer1.svg"
                alt="Picture of the author"
                className="main_row_cards_icon_profile"
              />
              <span 
              
              
              className="main_row_card_f_points_profile"
              
              >

                
                20 {""}
                 {""}

                <span style={{color: "#A6A6A6", fontWeight: "lighter"}}>
                  Points
                </span>
              </span>
<br />


              <Rate
                className="rating"
                style={{color: "#3E6DA8", fontSize: 15}}
                defaultValue={5}
              />
              <span style={{color: "#3E6DA8", fontSize: 15}}>
                {card.pets[0].ratingNo}
              </span>

              </Row>


    {/* btn  */}
    <Col className="main_btn_col">
    <Button className="chat_btn">
                  <span className="btn_msg">Chat Now</span>
                </Button>
                </Col>     
            </Col>
            
     </Row>
     </div>
    </>
  );
};
export default Profile;
