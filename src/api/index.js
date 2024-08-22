import axios from "axios";

const mainURL = axios.create({
  // baseURL: "https://ona-tili-backend.vercel.app",
  baseURL: "http://localhost:5000",
});

export default mainURL;
