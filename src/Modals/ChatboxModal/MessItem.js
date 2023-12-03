import React from "react";

const MessItem = ({ conversationItem, recieverId }) => {
  return (
    <div
      className={`w-full text-[16px] lg:text-[18px] mt-1 ${
        recieverId !== conversationItem.senderId ? "text-right" : "text-left"
      }`}
    >
      <div
        className={`max-w-[80%] p-2 inline-block rounded-lg text-white ${
          recieverId !== conversationItem.senderId ? "bg-[blue]" : "bg-[gray]"
        }`}
      >
        {conversationItem.text}
      </div>
    </div>
  );
};

export default MessItem;
