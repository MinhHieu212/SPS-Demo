import React from "react";

const MessItem = ({ conversationItem, recieverId }) => {
  return (
    <>
      <div
        className={`w-full  text-[16px] lg:text-[18px] mt-1 ${
          recieverId !== conversationItem.senderId ? "text-right" : "text-left"
        }`}
      >
        <div
          className={`max-w-[80%] p-2 shadow-lg inline-block rounded-lg text-white ${
            recieverId !== conversationItem.senderId
              ? "bg-[#4d4dbe]"
              : "bg-[#8b7b7b]"
          }`}
        >
          <p>{conversationItem.text}</p>
        </div>
        <p className="text-gray-600 text-[10px]">
          {formatTime(conversationItem.createdAt)}
        </p>
      </div>
    </>
  );
};

const formatTime = (createdAt) => {
  const date = new Date(createdAt);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
};

export default MessItem;
