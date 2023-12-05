import axios from "axios";

const SendMessAPI = axios.create({
  baseURL: "https://ssps-7wxl.onrender.com",
  // baseURL: "http://172.16.1.230:8000",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

SendMessAPI.interceptors.request.use(
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

SendMessAPI.interceptors.response.use(
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
        const result = await SpssAPI.post(path, {
          refreshToken: localStorage.getItem("refreshToken"),
        });
        const { accesstoken, refreshtoken } = result.data;
        localStorage.setItem("accessToken", accesstoken);
        localStorage.setItem("refreshToken", refreshtoken);
        originalConfig.headers["Authorization"] = `Bearer ${accesstoken}`;

        return SpssAPI(originalConfig);
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

const path4 = "/v1/user/message";

export const sendMessage = async (data) => {
  const params = new URLSearchParams(data).toString();

  const Response = await SendMessAPI.post(path4, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

  return Response;
};
