import SpssAPI from "../SpssAPI/SpssAPI";

const path1 = "/v1/student/printers";

export const getPrinterList = async (filterParams = {}) => {
  const responseFilterParams = await SpssAPI.get(path1, {
    params: filterParams,
  })
    .then((response) => {
      // console.log("Response from PrintersAPI", response);
      return response?.data;
    })
    .catch((error) => {
      // console.log("Fail get  PrintersAPI", error);
      return error;
    });

  return responseFilterParams;
};

const path2 = "/v1/student/printer";

export const getPrinterInfo = async (filterParams = {}) => {
  const responseFilterParams = await SpssAPI.get(path2, {
    params: filterParams,
  })
    .then((response) => {
      // console.log("Response from Single Printer API", response);
      return response?.data;
    })
    .catch((error) => {
      // console.log("Fail get  Single Printer API", error);
      return error;
    });

  return responseFilterParams;
};
