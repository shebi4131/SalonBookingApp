import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5245/api", // Adjust to match your backend port
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
