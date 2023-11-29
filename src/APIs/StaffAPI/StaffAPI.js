import SpssAPI from "../SpssAPI/SpssAPI";

const path1 = "/v1/staff/printers";
const path2 = "/v1/staff/printingLog";
const path3 = "/v1/staff/printingQueue";
const path4 = "/v1/staff/printer";
export const editPtr = async (newData) => {
    const PrintersInfos = await SpssAPI.put(path4, newData)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  
    return PrintersInfos;
  };
export const getPtrQueue = async (params) => {
    const PtrQueue = await SpssAPI.get(path3, {
        params: params
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });

    return PtrQueue;
}
export const getPtrLog = async (params) => {
    const PtrLogs = await SpssAPI.get(path2, {
        params: params
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });

    return PtrLogs;
}
export const getPtr = async (params) => {
    const PtrInfos = await SpssAPI.get(path1, {
        params: params
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });

    return PtrInfos;
}