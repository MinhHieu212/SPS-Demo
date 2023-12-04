import React, { useEffect, useState } from "react";
import CenterModal from "../BaseModals/CenterModal";
import { Loading, SendIcon } from "../../Assets/Icons/Icons";
import UserItem from "./UserItem";
import MessItem from "./MessItem";
import { getConversation, getFriendList } from "../../APIs/ChatAPI/ChatAPI";
import { sendMessage } from "../../APIs/ChatAPI/SendMessAPI";

const ChatboxModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [listFriend, setListFriend] = useState([]);
  const [currRecieverId, setCurrRecieverId] = useState();
  const [currConversationId, setCurrConversationId] = useState();
  const [currSocket, setCurrSocket] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleClose = () => {
    setConversation([]);
    setOpenModal(false);
  };

  useEffect(() => {
    try {
      const callAPI = async () => {
        const reponse = await getFriendList();
        setListFriend(reponse.data.data);
      };

      callAPI();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputMessage !== "") {
      const data = {
        conversationId: currConversationId,
        text: inputMessage,
      };

      setInputMessage("");

      const reponse = await sendMessage(data);
      console.log("Reponse for send message API: ", reponse);

      const response = await getConversation({
        conversationId: currConversationId,
      });

      if (response) setConversation(response?.data?.data);

      // await currSocket.emit("create-message", currConversationId);
    }
  };

  const handleGetConversation = async ({
    reciever_Id,
    conversation_Id,
    userSocket,
  }) => {
    setCurrConversationId(null);
    setCurrRecieverId(null);
    setInputMessage("");
    try {
      setCurrRecieverId("");

      const response = await getConversation({
        conversationId: conversation_Id,
      });

      if (response) setConversation(response?.data?.data);

      setCurrConversationId(conversation_Id);
      setCurrSocket(userSocket);
      setCurrRecieverId(reciever_Id);
    } catch (err) {
      console.log("Error from inProgress get Converastion: ", err);
    }
  };

  // if (currSocket) {
  //   currSocket.on("get-message", async () => {
  //     // const response = await getConversation({
  //     //   conversationId: currConversationId,
  //     // });
  //     // setConversation(response?.data?.data);
  //     console.log("get-message signal");
  //   });
  // }

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="content w-[350px] md:w-[550px] h-[645px] overflow-hidden rounded-[15px]  border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] font-bold flex items-center justify-center h-[60px] w-full">
            TIN NHẮN
          </div>
          <div className=" h-[85px]  border-b-2 border-[#3C8DBC] rounded-lg overflow-x-scroll flex items-center justify-start px-2 gap-2 scroll-smooth focus:overscroll-contain">
            {listFriend?.map((member, index) => (
              <UserItem
                key={index}
                receiver_Name={member.firstName + " " + member.lastName}
                reciever_Id={member.receiver_id}
                receiver_Role={member.role}
                reciever_Location={
                  member?.location?.facility +
                  member?.location?.department +
                  member?.location?.room
                }
                getConversation={handleGetConversation}
              ></UserItem>
            ))}
          </div>
          <div className=" h-[420px] border-b-2 border-[#3C8DBC] bg-slate-200  flex flex-col items-center justify-start p-2 gap-2 overflow-y-scroll">
            {currRecieverId !== "" ? (
              conversation?.map((conversationItem, index) => {
                return (
                  <MessItem
                    key={index}
                    conversationItem={conversationItem}
                    recieverId={currRecieverId}
                  ></MessItem>
                );
              })
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-spin inline-block">
                  <Loading></Loading>
                </div>
              </div>
            )}
          </div>
          <form
            className=" h-[80px] border-b-2 border-[#3C8DBC] bg-slate-200  flex items-center justify-start px-3 gap-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={inputMessage}
              className="w-[90%] p-2 rounded-lg bg-slate-200 text-[16px] lg:text-[18px] outline-none border-3 border-[#3C8DBC]"
              onInput={(e) => setInputMessage(e.target.value)}
            />
            <button
              type="submit"
              className="w-[10%] flex items-center justify-center outline-none"
            >
              <SendIcon></SendIcon>
            </button>
          </form>
        </div>
      </CenterModal>
    </>
  );
};

export default ChatboxModal;
