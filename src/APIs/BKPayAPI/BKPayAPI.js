import SpssAPI from "../SpssAPI/SpssAPI";

const path1 = "/v1/student/payments/";
const path2 = "/v1/student/confirm-payment";
const path3 = "/v1/student/BKpayment";

export const getPaymentsList = async () => {
  const BKPayInfo = await SpssAPI.get(path1)
    .then((response) => {
      //console.log("Response from api get list payments", response);
      return response;
    })
    .catch((error) => {
      //console.log("Fail on api get list payments ", error);
      return error;
    });

  return BKPayInfo;
};

export const confirmPayment = async (data) => {
  const responseConfirmPayment = await SpssAPI.post(path2, data)
    .then((response) => {
      // console.log("Response from api post confirm payments", response);
      return response;
    })
    .catch((error) => {
      // console.log("Fail on api post confirm payments ", error);
      return error;
    });

  return responseConfirmPayment;
};

export const makePayment = async (data) => {
  const resMakePayment = await SpssAPI.post(path3, data)
    .then((response) => {
      // console.log("Response from api post confirm resMakePayment", response);
      return response;
    })
    .catch((error) => {
      // console.log("Fail on api post confirm resMakePayment ", error);
      return error;
    });

  return resMakePayment;
};
