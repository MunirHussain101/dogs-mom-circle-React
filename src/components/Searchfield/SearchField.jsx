import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Row, Space } from 'antd';
// import styles from "../../styles/sections/Banner.module.css"
import { useState } from 'react';
import { useSelector } from 'react-redux';


// var cnvtBoldZio='zipcode'.bold();
var phMine=`Enter your  zipcode | How far are you willing to travel? | Search a time period | Dog preference`
const SearchField=({userData,setUserData})=>{
    const [ph, setPh]=useState();
    const [searchDataSave, setSearchDataSave] = useState("");

    const searchData = useSelector((state) => state?.info?.getSearchData);

    const handleSearchData = () => {

    //   console.log("search field",userData)
       
    //   const covtString=userData.map((values)=>{
   
    //   }).join(',')
    //   console.log(covtString)
        //    new
//       if(searchDataSave){
//         setUserData((prev)=>{
//           const updatedData=prev?.map((values)=>{
//             const {zipCode, firstname}=values
//             return `${zipCode}${firstname}`
//           }).filter((values)=>{
//               return values.includes(searchDataSave)
//           })
//           return updatedData
//         })
//  }else{
//        setUserData(searchData);
//  }

           if(searchDataSave){
                  setUserData((prev)=>{
                    const updatedData=prev?.filter((values)=>{
                        return values.zipCode==searchDataSave
                    })
                    return updatedData
                  })
           }else{
                 setUserData(searchData);
           }
        setSearchDataSave('')
        
    }

    
    return(
        <>
        <div style={{display:'flex'}}>
             <Input
                placeholder={phMine}
                className="search_field"
                onChange={(e)=>{setSearchDataSave(e.target.value)}}
                value={searchDataSave}
              
              />
            <Button type='text' className="search_field_btn" onClick={handleSearchData} >
               Search <SearchOutlined />
              </Button>
              </div>
        </>
    )
}
export default SearchField