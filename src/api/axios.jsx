import axios from "axios";


export default axios.create({
    baseURL: "http://ec2-44-211-141-219.compute-1.amazonaws.com",
    // baseURL:'http://localhost:8080/'
    
})