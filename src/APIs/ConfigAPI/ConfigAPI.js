import SpssAPI from "../SpssAPI/SpssAPI";

const path = "/v1/spso//systemConfig";
const path2 = "/v1/spso/systemConfig";

export const ConfigAPI = async () => {
    const ConfigInfo = await SpssAPI.get(path)
      .then((response) => {
        //console.log("Response from api User infomation ", response);
        return response;
      })
      .catch((error) => {
        //console.log("Fail get User infomation ", error);
        return error;
      });
  
    return ConfigInfo;
  };


export const SendConfigAPI = async (data) => {
  const responseConfigInfo = await SpssAPI.put(path2, data)
  .then((response) => {
    console.log("Response from api put config info ", response);
    return response;
  }) .catch((error) => {
    console.log("Fail on api api put config info ", error);
    return error;
  });
  return responseConfigInfo;
}