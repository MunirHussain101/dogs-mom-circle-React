// import Banner from "../components/sections/banner/Banner";
import { useParams } from "react-router-dom";
import BannerSearch from "../../components/banner-search/BannerSearch";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../api/axios";
import Cards from "../../components/cards/Cards";
import { getSearchDetails } from "../../features/additionalnfo/Info";
import { useEffect, useState } from "react";

const SearchPage=()=>{
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

  return(
    <>
    <div style={{marginTop:50, marginBottom:50}}>
    <BannerSearch setUserData={setUserData} userData={userData}  />
    <Cards userData={userData} />
 

    </div>
    </>
  )
}

export default SearchPage;