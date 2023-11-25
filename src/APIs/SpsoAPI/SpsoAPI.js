import SpssAPI from "../SpssAPI/SpssAPI";

const path = "/v1/spso/printers";
const path1 = "/v1/spso/printer";

const path2 = "/v1/spso/printingQueue"
const path3 = "/v1/spso/printingLog"
export const getPrintersList = async (params) => {
  const PrintersInfos = await SpssAPI.get(path, {
    params: params
  })
    .then((response) => {
      //console.log("Response from api User infomation ", response);
      //console.log(response);
      return response;
    })
    .catch((error) => {
      //console.log("Fail get User infomation ", error);
      return error;
    });

  return PrintersInfos;
};

export const getPrinterQueue = async (params) => {
  const PrinterQueue = await SpssAPI.get(path2, {
    params: params
  })
    .then((response) => {
      //console.log("Response from api User infomation ", response);
      //console.log(response);
      return response;
    })
    .catch((error) => {
      //console.log("Fail get User infomation ", error);
      return error;
    });
  return PrinterQueue;
}

export const getPrinterLog = async (params) => {
  const PrinterLog = await SpssAPI.get(path3, {
    params: params
  })
    .then((response) => {
      //console.log("Response from api User infomation ", response);
      //console.log(response);
      return response;
    })
    .catch((error) => {
      //console.log("Fail get User infomation ", error);
      return error;
    });
  return PrinterLog;
}
export const editPrinter = async (newData) => {
  const PrintersInfos = await SpssAPI.put(path1, newData)
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

export const addPrinter = async (newData) => {
  const PrintersInfo = await SpssAPI.post(path1, newData)
    .then((response) => {
      //console.log("Response from api User infomation ", response);

      return response;
    })
    .catch((error) => {
      //console.log("Fail get User infomation ", error);
      return error;
    });

  return PrintersInfo;
}