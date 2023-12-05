import SpssAPI from "../SpssAPI/SpssAPI";

const path1 = "/v1/user/message-list"; // get friend list - GET
const path2 = "/v1/user/conversation-id"; // GET - params { receiver_id :} get cionversation id
const path3 = "/v1/user/message"; // GET - params {conversationId} get conversation

export const getFriendList = async () => {
  const Response = await SpssAPI.get(path1)
    .then((response) => {
      //   console.log("Success - Response getFriendList", response);
      return response;
    })
    .catch((error) => {
      //   console.log("Error - Response getFriendList", error);
      return error;
    });

  return Response;
};

export const getConversationId = async (params) => {
  // console.log("parmas of getConversationId: ", params);
  const Response = await SpssAPI.get(path2, {
    params: params,
  })
    .then((response) => {
      //   console.log("Success - Response getConversationId", response);
      return response;
    })
    .catch((error) => {
      //   console.log("Error - Response getConversationId", error);
      return error;
    });

  return Response;
};

export const getConversation = async (params) => {
  // console.log("parmas of getConversation: ", params);

  const Response = await SpssAPI.get(path3, {
    params: params,
  })
    .then((response) => {
      //   console.log("Success - Response getConversation", response);
      return response;
    })
    .catch((error) => {
      //   console.log("Error - Response getConversation", error);
      return error;
    });

  return Response;
};
