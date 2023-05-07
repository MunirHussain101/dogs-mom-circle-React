import axios from "axios";


export default axios.create({
       baseURL: "http://ec2-44-203-155-46.compute-1.amazonaws.com:8080/"
    // baseURL:'http://localhost:8080/'
    
})