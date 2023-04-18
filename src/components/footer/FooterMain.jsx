import { Col, Row } from "antd"
import './Footer.css';
import footerImg from "../../../public/assets/footer/Dogs 1.svg"

const FooterMain=()=>{
    return(
        <>
        <Row style={{display:'flex', alignItems:'left', marginTop:'15px'}}>
            <Col >
             <img
      // loader={myLoader}
        src={footerImg}
        alt="Picture of the author"
           width={156}
       height={66}
    />
    </Col>
    </Row>
        </>
    )
}
export default FooterMain