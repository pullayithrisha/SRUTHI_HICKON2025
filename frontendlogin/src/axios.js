import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", // Make sure this matches your backend server URL
});

export default instance;
