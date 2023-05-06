import { Card, Col, Row } from "antd"
import { Link } from "react-router-dom";
import './AntdCard.css'
import { useSelector } from "react-redux";
import './AntdCard.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

const AntdCard=()=>{
    const imgMine1='assets/home-cards/new9.svg'
    const imgMine2='assets/home-cards/new10.svg'
    const imgMine3='assets/home-cards/new11.svg'

   const authDetails = useSelector((state) => state?.auth?.userDetails);
    return(
        <>
        <div 
        className="main_card_antdBox"
        >
           <Row style={{marginTop:40}}>
            <Col lg={6}></Col>
            <Col lg={12} style={{display:'flex', justifyContent:'center'}}>
                <h1 className="card_head_first">How does <span style={{color:'#EAB2BB'}}>Dog Mom Circle</span>  Works?</h1>
            </Col>
            <Col lg={6}></Col>

           </Row>

           <Row  justify='space-around' style={{marginTop:60,marginBottom:100,display:"flex", flexWrap:'wrap'}}>
              <Col className="card_box" lg={7} md={24} xs={24} style={{width:'100%', paddingBottom:70}}> 
              <Link to={authDetails ? "/search" : ""}>
              <LazyLoadImage src={imgMine1} className="card_img" />
           
              </Link>
                 <h1 className="card_head_first_sign">Signup</h1>
                 <p className="card_head_first_para">Sign up, tell us a little about you and your dog. Fill out your hosting preferences.</p>
              </Col>

              <Col className="card_box" lg={7} md={24} xs={24} style={{width:'100%', paddingBottom:70}}> 
              <Link to={authDetails ? "/search" : ""}>
               <LazyLoadImage src={imgMine2} className="card_img" />
           
              </Link>


                 <h1 className="card_head_first_sign">Post</h1>
                 <p className="card_head_first_para">Post about your upcoming boarding and daycare needs in the group. We will help you find the best match. Everyday of boarding costs 10 points. New members are allowed to go negative 100 points.</p>
              </Col>

              <Col className="card_box" lg={7} md={24} xs={24} style={{width:'100%', paddingBottom:70}}> 
              <Link to={authDetails ? "/search" : ""}>
              <LazyLoadImage src={imgMine3} className="card_img" />
         
              </Link>

                 <h1 className="card_head_first_sign">Help</h1>
                 <p className="card_head_first_para">Give back to the community by hosting another dog. Everyday of hosting earns 10 points.</p>
             
              </Col>
            

           </Row>
           </div>
        </>
    )

}
export default AntdCard