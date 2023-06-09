import {Col, Image, Row} from "antd";
import "./Banner.css";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Banner = () => {
  return (
    <>
      <Row style={{background: "linear-gradient(180.51deg, #ffe5ea, #fff)"}}>
        <Col lg={6} xs={0}></Col>

        <Col
          style={{display: "flex", justifyContent: "center"}}
          lg={12}
          xs={24}
        >
          <LazyLoadImage
            src="/assets/banner/Dogbannerimg.png"
            alt="dog mom banner"
            effect="opacity"
            className="img_banner"
          />
        </Col>

        <Col lg={6} xs={0}></Col>
      </Row>
      <Row>
        <Col lg={2} xs={0}></Col>
        <Col
          lg={20}
          xs={24}
          style={{display: "flex", justifyContent: "center"}}
        >
          <h1 className="head_banner">
            Find a neighbour to look after your dog, return <br /> the favour
            and build a community,{" "}
            <span className="head_banner_inner">all for free.</span>{" "}
          </h1>
        </Col>
        <Col lg={2} xs={0}></Col>
      </Row>
    </>
  );
};
export default Banner;
