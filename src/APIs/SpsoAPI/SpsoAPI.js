import SpssAPI from "../SpssAPI/SpssAPI";

const path = "/v1/spso/printers/";

export const getPrintersList = async () => {
  const PrintersInfos = await SpssAPI.get(path)
    .then((response) => {
      //console.log("Response from api User infomation ", response);
      return response;
    })
    .catch((error) => {
      //console.log("Fail get User infomation ", error);
      return error;
    });

  return PrintersInfos;
};