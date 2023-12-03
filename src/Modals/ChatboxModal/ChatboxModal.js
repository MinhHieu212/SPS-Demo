import React, { useEffect, useState } from "react";
import CenterModal from "../BaseModals/CenterModal";
import { SendIcon } from "../../Assets/Icons/Icons";
import UserItem from "./UserItem";
import MessItem from "./MessItem";
import { conversation_data, fetch_list_friend, mnembers } from "./FixedData";
import {
  getConversation,
  getConversationId,
  getFriendList,
} from "../../APIs/ChatAPI/ChatAPI";

const ChatboxModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [listFriend, setListFriend] = useState([]);
  const [conversationId, setConversationId] = useState();
  const [recieverId, setRecieverId] = useState();
  const [conversation, setConversation] = useState([]);
  const handleClose = () => {
    setConversation([]);
    setOpenModal(false);
  };

  // call api get lisst friend (recieverId list)

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

  // call API get conversation id -> call api get conversation
  const handleGetConversation = async (reciever_Id) => {
    try {
      setRecieverId(reciever_Id);
      console.log("recieverId : ", recieverId);

      const reponse1 = await getConversationId({ receiver_id: recieverId });

      setConversationId(reponse1?.data?.data[0].conversationId);
      console.log("ConversationId : ", conversationId);

      const reponse2 = await getConversation({
        conversationId: conversationId,
      });

      setConversation(reponse2?.data?.data);
      console.log("conversation : ", conversation);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="content w-[350px] md:w-[550px] h-[650px] overflow-hidden rounded-lg  border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] font-bold flex items-center justify-center h-[60px] w-full">
            TIN NHẮN
          </div>
          <div className=" h-[90px] border-b-2 border-[#3C8DBC] overflow-x-scroll flex items-center justify-start px-2 gap-2 scroll-smooth focus:overscroll-contain">
            {listFriend?.map((member, index) => (
              <UserItem
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
          <div className=" h-[420px] border-b-2 border-[#3C8DBC] bg-slate-200  flex flex-col items-center justify-start p-2 gap-2">
            {conversation?.map((conversationItem, index) => {
              {
                return (
                  <MessItem
                    conversationItem={conversationItem}
                    recieverId={recieverId}
                  ></MessItem>
                );
              }
            })}
          </div>
          <form className=" h-[80px] border-b-2 border-[#3C8DBC] bg-slate-200  flex items-center justify-start px-3 gap-2">
            <input
              type="text"
              className="w-[90%] p-2 rounded-lg bg-slate-200 text-[16px] lg:text-[18px] outline-none border-2 border-[#3C8DBC]"
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
