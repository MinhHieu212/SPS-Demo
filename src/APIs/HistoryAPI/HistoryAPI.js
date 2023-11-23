import SpssAPI from "../SpssAPI/SpssAPI";

const path = "/v1/student/filterLogs";

export const filterHistory = async (filterParams = {}) => {
  const responseFilterParams = await SpssAPI.get(path, { params: filterParams })
    .then((response) => {
      // console.log("Response from api User infomation ", response);
      return response?.data;
    })
    .catch((error) => {
      // console.log("Fail get User infomation ", error);
      return error;
    });

  return responseFilterParams;
};

export const cancelPrintingAPI = async (data) => {
  const reponseCancelPrintingAPI = await SpssAPI.delete(path, data)
    .then((response) => {
      // console.log("Response from api User infomation ", response);
      return response?.data;
    })
    .catch((error) => {
      // console.log("Fail get User infomation ", error);
      return error;
    });

  return reponseCancelPrintingAPI;
};
