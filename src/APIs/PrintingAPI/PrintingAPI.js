import axios from "axios";

const PrintingBaseApi = axios.create({
  baseURL: "https://ssps-7wxl.onrender.com",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

PrintingBaseApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

PrintingBaseApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const path = "/v1/user/refresh-access-token";
    const originalConfig = error.config;
    // console.log("Access_token expired");
    if (error.response && error.response.status == 410) {
      try {
        console.log("call refresh token");
        const result = await PrintingBaseApi.post(path, {
          refreshToken: localStorage.getItem("refreshToken"),
        });
        const { accesstoken, refreshtoken } = result.data;
        localStorage.setItem("accessToken", accesstoken);
        localStorage.setItem("refreshToken", refreshtoken);
        originalConfig.headers["Authorization"] = `Bearer ${accesstoken}`;

        return PrintingBaseApi(originalConfig);
      } catch (err) {
        if (err.response && err.response.status === 419) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.href = "/Login";
        }
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

const path = "/v1/student/printing";

export const PrintingAPI = async (formData) => {
  try {
    const response = await PrintingBaseApi.post(path, formData);
    console.log("Response from Printing API:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error from Printing API:", error);
    throw error;
  }
};
