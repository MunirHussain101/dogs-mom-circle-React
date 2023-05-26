import React from "react";
import BannerSearch from "../../components/banner-search/BannerSearch";
import Cards from "../../components/cards/Cards";

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