import SpssAPI from "../SpssAPI/SpssAPI";

const path = "/v1/student/payments/";

export const getPaymentsList = async () => {
  const BKPayInfo = await SpssAPI.get(path)
    .then((response) => {
      //console.log("Response from api User infomation ", response);
      return response;
    })
    .catch((error) => {
      //console.log("Fail get User infomation ", error);
      return error;
    });

  return BKPayInfo;
};
