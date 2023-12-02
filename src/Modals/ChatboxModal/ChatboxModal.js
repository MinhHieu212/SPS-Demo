import React, { useEffect, useState } from "react";
import CenterModal from "../BaseModals/CenterModal";
import { SendIcon } from "../../Assets/Icons/Icons";
import UserItem from "./UserItem";
import MessItem from "./MessItem";

const mnembers = [
  {
    avatar:
      "https://media.istockphoto.com/id/1410847427/vi/anh/%C4%91%C3%A0n-%C3%B4ng-%C4%91ang-nghe-nh%E1%BA%A1c-b%E1%BA%B1ng-tai-nghe-m%E1%BB%99t-c%C3%A1ch-tho%E1%BA%A3i-m%C3%A1i-v%C3%A0-vui-v%E1%BA%BB-3d-render.jpg?s=2048x2048&w=is&k=20&c=_8duVf0uul7mznJL4ACyevZA9KMvcJSNCD3R5TROK3E=",
    name: "Trang Anh",
    id: 2,
    conversation: [
      { id: 1, message: "Hello Minh Hieu" },
      { id: 2, message: "Hello Hung Truong" },
      { id: 2, message: "Ban Oke chu, chuc ban sinh nhat vui ve" },
      { id: 1, message: "Hello em iu" },
    ],
  },
  {
    avatar:
      "https://media.istockphoto.com/id/1410847427/vi/anh/%C4%91%C3%A0n-%C3%B4ng-%C4%91ang-nghe-nh%E1%BA%A1c-b%E1%BA%B1ng-tai-nghe-m%E1%BB%99t-c%C3%A1ch-tho%E1%BA%A3i-m%C3%A1i-v%C3%A0-vui-v%E1%BA%BB-3d-render.jpg?s=2048x2048&w=is&k=20&c=_8duVf0uul7mznJL4ACyevZA9KMvcJSNCD3R5TROK3E=",
    name: "Trang Anh",
    id: 1,
    conversation: [
      { id: 1, message: "Hello Minh Hieu" },
      { id: 2, message: "Hello Hung Truong" },
      { id: 2, message: "Ban Oke chu, chuc ban sinh nhat vui ve" },
      { id: 1, message: "Hello em iu" },
    ],
  },
];

const ChatboxModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [ownerId, serOwnweId] = useState();

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleRenderConversation = (conversation, id) => {
    setConversation(conversation);
    serOwnweId(id);
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="content w-[100%] md:w-[550px] h-[660px] overflow-hidden rounded-lg  border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] font-bold flex items-center justify-center h-[60px] w-full">
            TIN NHẮN
          </div>
          <div className=" h-[100px] border-b-2 border-[#3C8DBC] overflow-x-scroll flex items-center justify-start px-2 gap-2 scroll-smooth focus:overscroll-contain">
            {mnembers?.map((member, index) => (
              <UserItem
                name={member.name}
                id={member.id}
                avatar={member.avatar}
                conversation={member.conversation}
                renderConversation={handleRenderConversation}
              ></UserItem>
            ))}
          </div>
          <div className=" h-[420px] border-b-2 border-[#3C8DBC] bg-slate-200  flex flex-col items-center justify-start p-2 gap-2">
            {conversation?.map((item, index) => {
              {
                return <MessItem message={item} ownerId={ownerId}></MessItem>;
              }
            })}
          </div>
          <form className=" h-[80px] border-b-2 border-[#3C8DBC] bg-slate-200  flex items-center justify-start px-3 gap-2">
            <input
              type="text"
              className="w-[90%] p-2 rounded-lg bg-slate-200 outline-none border-2 border-[#3C8DBC]"
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
