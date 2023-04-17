// import Banner from "../components/sections/banner/Banner";
import { useParams } from "react-router-dom";
import BannerSearch from "../../components/banner-search/BannerSearch";
import Cards from "../../components/cards/Cards";
// import Cards from "../components/singleton-comp/Cards";

const SearchPage=()=>{

  return(
    <>
    <div style={{marginTop:50, marginBottom:50}}>
    <BannerSearch />
    <Cards />
 

    </div>
    </>
  )
}

export default SearchPage;