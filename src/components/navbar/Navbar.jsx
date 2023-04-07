import { Avatar, Button, Col, Row } from "antd"
// import styles from "../../../styles/sections/Navbar.module.css"
import { UserOutlined } from "@ant-design/icons"
import { Link, useLocation } from "react-router-dom"
import './Navbar.css';

const Navbar=()=>{
    const location=useLocation()
    return(
        <>
              <Row className={location.pathname!=='/'?"main_row_nav":"main_row_nav_home"} >
              <Col lg={12} className="main_first_col">
                <Link to='/'>
              <img
        src="assets/header/Dogs-Mom-Circle (4) 1.svg"
        alt="Picture of the author"
           width={124.27}
       height={66}
    />
    </Link>
              </Col>
                {location.pathname!=='/'?(
                    <>
                             <Col lg={12} className="main_sec_col">
                    <Link href='/search-page'>
                <Button icon={<UserOutlined />}>
                  {''}
                  <b>
                   Bao
                   </b>
                   
                   </Button>
                   </Link>
                </Col>
                    </>
                ):<></>}
       
            </Row>  
        </>
    )
}
export default Navbar