import SpssAPI from "../SpssAPI/SpssAPI";

const path = "/v1/user/login";

export const LoginAPI = async (data) => {
  const responseLogin = await SpssAPI.post(path, data)
    .then((response) => {
      localStorage.setItem("accessToken", response?.data?.data?.accessToken);
      localStorage.setItem("refreshToken", response?.data?.data?.refreshToken);
      return response;
    })
    .catch((error) => {
      console.log("Fail Login", error);
      return error;
    });

  return responseLogin;
};
