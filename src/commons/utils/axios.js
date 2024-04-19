import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Set your base URL
  timeout: 40000, // Set timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
