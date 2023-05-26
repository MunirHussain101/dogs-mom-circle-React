import {Col, Row} from "antd";
import "./BannerSearch.css";

const BannerSearch = () => {
  return (
    <>
      <Row>
        <Col lg={6} xs={0}></Col>
        <Col lg={12} xs={24}>
          <h1 className="firstBanner_head">Dog-Sitting Made Easy</h1>
        </Col>

        <Col lg={6} xs={1}></Col>
      </Row>

      <Row>
        <Col lg={4} xs={1}></Col>
        <Col lg={16} xs={22}>
          <h1 className="secBanner_head">
            Browse and connect with other dog moms who need help. Each day of
            dog sitting earns 10 points.
          </h1>
        </Col>

        <Col lg={4} xs={1}></Col>
      </Row>
    </>
  );
};
export default BannerSearch;
