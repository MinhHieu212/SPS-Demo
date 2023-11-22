import SpssAPI from "../SpssAPI/SpssAPI";

const path = "/v1/student/printing";

export const PrintingAPI = async (formData) => {
  const responsePrintingAPI = await SpssAPI.post(path, formData)
    .then((response) => {
      // console.log("Response from api PrintingAPI ", response);
      return response?.data;
    })
    .catch((error) => {
      // console.log("Fail get PrintingAPI ", error);
      return error;
    });

  return responsePrintingAPI;
};
