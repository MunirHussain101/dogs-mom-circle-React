import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Row, Space } from 'antd';
// import styles from "../../styles/sections/Banner.module.css"
import { useState } from 'react';


// var cnvtBoldZio='zipcode'.bold();
var phMine=`Enter your  zipcode | How far are you willing to travel? | Search a time period | Dog preference`
const SearchField=()=>{
    const [ph, setPh]=useState()

    return(
        <>
        <div style={{display:'flex'}}>
             <Input
                placeholder={phMine}
                className="search_field"
              
              />
              <Button type='text' className="search_field_btn">
               Search <SearchOutlined />
              </Button>
              </div>
        </>
    )
}
export default SearchField