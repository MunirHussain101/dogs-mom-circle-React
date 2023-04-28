import axios from "axios";


export default axios.create({
    // baseURL: "http://ec2-44-206-231-202.compute-1.amazonaws.com:8080/"
    // baseURL:"http://ec2-3-95-200-237.compute-1.amazonaws.com:8080/" 
    baseURL:'http://localhost:8080/'
    
})