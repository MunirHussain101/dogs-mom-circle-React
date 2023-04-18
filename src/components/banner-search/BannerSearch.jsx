import { Col, Row } from "antd"
import './BannerSearch.css';
import SearchField from "../Searchfield/SearchField";


const BannerSearch=({userData, setUserData})=>{
    return(
        <>
        <Row>
         <Col lg={6}></Col>
         <Col lg={12}>
            <h1 className="firstBanner_head">Dog-Sitting Made Easy</h1>
         </Col>

    <Col lg={6}></Col>
    </Row>
    <Row style={{marginTop:16}}>
         <Col lg={4}></Col>
         <Col lg={16}>
            <h1 className="secBanner_head">Browse and connect with other dog moms who need help. Each day of dog sitting earns 10 points.</h1>
         </Col>

    <Col lg={4}></Col>
    </Row>
    <Row style={{marginTop:16}}>
         <Col lg={6}></Col>
         <Col lg={12}>
            <SearchField userData={userData} setUserData={setUserData} />
         </Col>

    <Col lg={6}></Col>
    </Row>
        </>
    )
}
export default BannerSearch