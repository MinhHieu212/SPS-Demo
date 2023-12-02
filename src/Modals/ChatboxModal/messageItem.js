import React from "react";

const messageItem = (props) => {
  console.log(1);
  return (
    <div
      className={`max-w-[80%] h-[40px] flex items-center text-white text-[16px] md:text-[18px] p-2 mt-2 ${
        ownerId === props.ownerId
          ? "ml-auto bg-blue-600 justify-end"
          : "mr-auto bg-slate-600 justify-start"
      }`}
    >
      {props?.message.message}
    </div>
  );
};

export default messageItem;
