import React, { useState } from "react";
import { conversation_data } from "./FixedData";

export const avatars = [
  "https://media.istockphoto.com/id/1410847427/vi/anh/%C4%91%C3%A0n-%C3%B4ng-%C4%91ang-nghe-nh%E1%BA%A1c-b%E1%BA%B1ng-tai-nghe-m%E1%BB%99t-c%C3%A1ch-tho%E1%BA%A3i-m%C3%A1i-v%C3%A0-vui-v%E1%BA%BB-3d-render.jpg?s=2048x2048&w=is&k=20&c=_8duVf0uul7mznJL4ACyevZA9KMvcJSNCD3R5TROK3E=",

  "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
];

const UserItem = ({
  receiver_Role,
  receiver_Name,
  reciever_Id,
  reciever_Location,
  getConversation = () => {},
}) => {
  return (
    <div
      className="w-[100px] shrink-0 cursor-pointer bg-slate-300 hover:bg-slate-400 transition-all rounded-lg flex flex-col items-center justify-center"
      onClick={() => getConversation(reciever_Id)}
    >
      <div className="w-[45px] h-[45px] rounded-full mt-1 overflow-hidden border-2 border-black">
        <img
          src={receiver_Role === "spso" ? avatars[0] : avatars[1]}
          alt=""
          className="w-full h-full "
        />
      </div>

      <span className="w-[100%] text-center overflow-clip truncate">
        {receiver_Name}
      </span>
    </div>
  );
};

export default UserItem;
