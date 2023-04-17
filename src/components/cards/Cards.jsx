import { useEffect, useState } from "react";
import { Col, Rate, Row } from "antd"
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../api/axios";
import cards from "./cards.json";
import './Cards.css'
import { getSearchDetails } from "../../features/additionalnfo/Info";



const Cards = () => {
    const [userData, setUserData] = useState([]);

    const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
        const response = await axios.get(`/api/users`);
        setUserData(response.data);
        dispatch(getSearchDetails(response.data));
    }
    getData();
  }, []);


  var dt = new Date();


    return (
        <>
            <Row justify='space-between'  className="main_row_cards" >
              {userData? userData.map((values)=>{
                 return(
                    <>
                    <Col lg={5}
                    style={{margin:15}}
                    className="main_col_searchpg"
                >
                    <Link to={`/profile/${values?.id}`}>
                    <div style={{
                        backgroundImage: `url(${values.profile_pic})`,
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
                            <h1 className="main_row_card_f_head">{values.firstname} {values.lastname}</h1>

                        </Col>
                        <Col>
                            <Row style={{display:'flex', justifyContent:'space-around', columnGap:5}}>
                               <img
                                    src="assets/home-cards/layer1.svg"
                                    alt="Picture of the author"
                                    className="main_row_cards_icon"
                                />
                                  <p className="main_row_card_f_points">{'--'}
                                  
                                  <span style={{color:'#A6A6A6', fontWeight:'lighter', marginLeft:4}}>20 Points</span>
                                  </p>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{height:30}}>
                        <Col>
                            <p className="main_row_card_s_head">Richmond, CA</p>

                        </Col>
                      
                    </Row>
                  
                    <p style={{textAlign:'left', height:4}} className="main_row_card_dates_head">Dates need help</p>
                    {/* </div> */}
                    <Row justify='space-between'>

                        <Col>
                            <h1 className="main_row_card_dates_val">
                            {new Date(values.createdAt).toLocaleString().split(',')[0]}
                            </h1>

                        </Col>
                        <Col style={{display:'flex', alignItems:'center'}}>
                        <Rate style={{color:"#3E6DA8", fontSize:14}}  defaultValue={5} />
                        {" "}
                        <span style={{color:"#3E6DA8", fontSize:14}}>10</span>
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