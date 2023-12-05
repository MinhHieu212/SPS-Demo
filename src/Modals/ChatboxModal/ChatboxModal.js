import React, { useEffect, useRef, useState } from "react";
import CenterModal from "../BaseModals/CenterModal";
import { Loading, SendIcon } from "../../Assets/Icons/Icons";
import UserItem from "./UserItem";
import MessItem from "./MessItem";
import { getConversation, getFriendList } from "../../APIs/ChatAPI/ChatAPI";
import { sendMessage } from "../../APIs/ChatAPI/SendMessAPI";
import { useSocket } from "../../Contexts/SocketIOContenxt";

const ChatboxModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [listFriend, setListFriend] = useState([]);
  const [currRecieverId, setCurrRecieverId] = useState();
  const [currConversationId, setCurrConversationId] = useState();
  const [conversation, setConversation] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const UserSocket = useSocket();

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

    if (UserSocket) {
      UserSocket?.socket?.on("get-message", async (data) => {
        try {
          console.log("Socket on - get_message - signal");
          console.log("Data from get-mesage: ", data);
          const response = await getConversation({
            conversationId: data.conversationId,
          });

          setConversation(response?.data?.data);

          console.log("Socket.on - reciever conversation signal");
        } catch (error) {
          console.error("Error processing get-message event:");
        }
      });
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

      if (UserSocket) {
        try {
          const reponse = await sendMessage(data);

          await UserSocket?.socket?.emit(
            "create-message",
            currConversationId,
            data.text
          );
          console.log("Socket emit - send_message - boastcast signal");
        } catch (error) {
          console.error("Error emitting socket event:", error);
        }
      }
    }
  };

  const handleGetConversation = async ({ reciever_Id, conversation_Id }) => {
    setCurrConversationId(conversation_Id);
    setCurrRecieverId(null);
    setInputMessage("");

    try {
      setCurrRecieverId("");

      const response = await getConversation({
        conversationId: conversation_Id,
      });

      if (response) setConversation(response?.data?.data);
    } catch (err) {
      console.log("Error from inProgress get Converastion: ", err);
    }
    setCurrRecieverId(reciever_Id);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div
          className="content w-[350px] md:w-[550px] h-[660px] overflow-hidden rounded-[15px]  border-[1px] border-[#367FA9]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1686283201463-8cbc4011a56e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundPosition: "center",
            objectPosition: "fit",
          }}
        >
          <div className="header bg-[#3C8DBC] text-white text-[20px] font-bold flex items-center justify-center h-[60px] w-full">
            TIN NHẮN
          </div>
          <div className=" h-[100px]  overflow-x-scroll flex items-center justify-start px-2 gap-2 scroll-smooth focus:overscroll-contain">
            {listFriend?.map((member, index) => (
              <UserItem
                key={index}
                socket={UserSocket}
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
          <div
            className=" h-[420px] border-b-2 border-[#3C8DBC] px-3 bg-transparent flex flex-col items-center justify-start p-2 gap-2 overflow-y-scroll"
            style={{
              flexDirection: "column-reverse",
            }}
          >
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
            className=" h-[80px] border-b-2 border-[#3C8DBC] bg-slate-200  flex items-center justify-start px-3 gap-2 bg-transparent"
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
