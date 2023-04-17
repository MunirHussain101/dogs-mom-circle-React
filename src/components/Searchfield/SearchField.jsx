import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Row, Space } from 'antd';
// import styles from "../../styles/sections/Banner.module.css"
import { useState } from 'react';
import { useSelector } from 'react-redux';


// var cnvtBoldZio='zipcode'.bold();
var phMine=`Enter your  zipcode | How far are you willing to travel? | Search a time period | Dog preference`
const SearchField=()=>{
    const [ph, setPh]=useState();
    const [searchDataSave, setSearchDataSave] = useState();

    const searchData = useSelector((state) => state?.info?.getSearchData);
    // console.log("searchData", searchData);

    // const handleSearchData = () => {
    //     const filerData = searchData.filter((item) => {
    //         return item.zipCode == "909"
    //     });
    //     console.log("filerData", filerData);
    //     // setSearchDataSave(filerData);
    // }
    
    return(
        <>
        <div style={{display:'flex'}}>
             <Input
                placeholder={phMine}
                className="search_field"
                // value={searchDataSave}
              
              />
              <Button type='text' className="search_field_btn" >
               Search <SearchOutlined />
              </Button>
              </div>
        </>
    )
}
export default SearchField