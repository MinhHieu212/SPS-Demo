import React from "react";

const UserItem = ({
  avatar,
  name,
  id,
  conversation,
  renderConversation = () => {},
}) => {
  return (
    <div
      className="w-[100px] shrink-0 cursor-pointer bg-slate-300 hover:bg-slate-400 transition-all rounded-lg flex flex-col items-center justify-center"
      onClick={() => renderConversation(conversation, id)}
    >
      <div className="w-[50px] h-[50px] rounded-full mt-1 overflow-hidden border-2 border-black">
        <img src={avatar} alt="" className="w-full h-full" />
      </div>

      <span className="w-[100%] text-center overflow-clip truncate">
        {name}
      </span>
    </div>
  );
};

export default UserItem;
