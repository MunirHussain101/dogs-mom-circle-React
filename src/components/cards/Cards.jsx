import { Col, Rate, Row } from "antd"
import cards from "./cards.json";
import { Link } from "react-router-dom";
import './Cards.css'


const Cards = () => {
    return (
        <>
            <Row justify='space-between'  className="main_row_cards" >
              {cards? cards.pets.map((values)=>{
                 return(
                    <>
                    <Col lg={5}
                    style={{margin:15}}
                    className="main_col_searchpg"
                >
                    <Link to="/profile">
                    <div style={{
                        backgroundImage: `url(${values.img})`,
                        height: "213px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        // backgroundPosition: "center",
                        borderRadius: 8
                    }}>
                    </div>
                    </Link>

                 
                    <Row justify='space-between' style={{height:40}}>
                        <Col>
                            <h1 className="main_row_card_f_head">{values.petsName}</h1>

                        </Col>
                        <Col>
                            <Row style={{display:'flex', justifyContent:'space-around', columnGap:5}}>
                               <img
                                    src="assets/home-cards/layer1.svg"
                                    alt="Picture of the author"
                                    className="main_row_cards_icon"
                                />
                                  <p className="main_row_card_f_points">{values.petsPoint?values.petsPoint:'--'}
                                  
                                 {values.petsPoint?(
                                    <span style={{color:'#A6A6A6', fontWeight:'lighter', marginLeft:4}}>  Points</span>
                                 ):<></>} 
                                 
                                  </p>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{height:30}}>
                        <Col>
                            <p className="main_row_card_s_head">{values.petsPara}</p>

                        </Col>
                      
                    </Row>
                  
                    <p style={{textAlign:'left', height:4}} className="main_row_card_dates_head">{values.datePara}</p>
                    {/* </div> */}
                    <Row justify='space-between'>

                        <Col>
                            <h1 className="main_row_card_dates_val">{values.date}</h1>

                        </Col>
                        <Col style={{display:'flex', alignItems:'center'}}>
                        <Rate style={{color:"#3E6DA8", fontSize:14}}   defaultValue={5} />
                        {" "}
                        <span style={{color:"#3E6DA8", fontSize:14}}>{values.ratingNo}</span>
                        </Col>
                      
                      
                    </Row>
                </Col>
                    </>
                 )
              }):"Not Found"}
                
             
            </Row>

        </>
    )
}

export default Cards