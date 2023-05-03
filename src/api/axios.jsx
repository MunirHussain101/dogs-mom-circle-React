import axios from "axios";


export default axios.create({
    baseURL: "http://ec2-3-93-238-241.compute-1.amazonaws.com:8080/"
    // baseURL: "http://ec2-3-93-146-137.compute-1.amazonaws.com"  
    // baseURL:'http://localhost:8080/'
    
})