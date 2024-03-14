import axios from "axios";
import BaseUrl from "./BaseUrl";

const axiosInstance = axios.create({
  baseURL: BaseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    // console.log("Request Interceptor:", config);
    if (token) {
      console.log("TOKENSSSS", token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {

    console.error("Request Interceptor Error----------:", error);
    if (error.response.data.message === "Unauthenticated") {
      localStorage.getItem("accessToken");
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    console.error("Response Interceptor Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;