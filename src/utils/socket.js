import { io } from "socket.io-client";
const baseUrl = "http://localhost:8080";
const socket = io(baseUrl);
export default socket;
