import React, { Children } from "react";

const MessItem = ({ message, ownerId }) => {
  console.log(message.id, ownerId);
  return (
    <div
      className={`w-full mt-1 ${
        ownerId === message.id ? "text-right" : "text-left"
      }`}
    >
      <div
        className={`max-w-[80%] p-2 inline-block rounded-lg text-white ${
          ownerId === message.id ? "bg-[blue]" : "bg-[gray]"
        }`}
      >
        {message.message}
      </div>
    </div>
  );
};

export default MessItem;
