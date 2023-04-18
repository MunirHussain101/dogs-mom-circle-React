import { Col, Row } from "antd"
import './Footer.css';

const FooterMain=()=>{
    return(
        <>
        <Row style={{display:'flex', alignItems:'left', marginTop:'15px'}}>
            <Col >
             <img
      // loader={myLoader}
        src="/assets/footer/Dogs 1.svg"
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