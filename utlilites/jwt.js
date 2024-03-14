import axiosInstance from "./axios";


const setSession = (token, user) => {
  if (token) {
    // localStorage.setItem("user", user);
    console.log(token,"token")
    localStorage.setItem("accessToken", token);
    localStorage.setItem("user", JSON.stringify(user));
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem("accessToken");
    // localStorage.removeItem("user");
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};
export { setSession };


