import SpssAPI from "../SpssAPI/SpssAPI";

const path1 = "/v1/student/filterLogs";

export const filterHistory = async (filterParams = {}) => {
  const responseFilterParams = await SpssAPI.get(path1, {
    params: filterParams,
  })
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

const path2 = "/v1/student/cancelLog";

export const cancelPrintingAPI = async (data) => {
  console.log(JSON.stringify(data));
  const reponseCancelPrintingAPI = await SpssAPI.delete(path2, { data })
    .then((response) => {
      console.log("Response from api cancelPrintingAPI", response);
      return response?.data;
    })
    .catch((error) => {
      console.log("Fail get cancelPrintingAPI ", error);
      return error;
    });

  return reponseCancelPrintingAPI;
};
