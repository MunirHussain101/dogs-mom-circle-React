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
<h2>New profile page added</h2>
   </>
  );
};
export default ProfileNew;
