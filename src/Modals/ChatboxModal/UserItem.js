import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { getConversationId } from "../../APIs/ChatAPI/ChatAPI";

export const avatars = [
  "https://images.unsplash.com/photo-1701215097228-188d262c1f6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1701220293337-c1585aab8372?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
];

const UserItem = ({
  receiver_Role,
  receiver_Name,
  reciever_Id,
  reciever_Location,
  getConversation = () => {},
}) => {
  const [conversationId, setConversationId] = useState();
  const [userSocket, setUserSocket] = useState(null);

  useEffect(() => {
    const socket = io("https://ssps-7wxl.onrender.com");

    socket.on("connect", () => {
      console.log("CHATNAME === ", receiver_Name, " === SOCKET ID", socket.id);
    });

    setUserSocket(socket);

    const callApiGetConversationId = async () => {
      try {
        const response1 = await getConversationId({
          receiver_id: reciever_Id,
        });

        setConversationId(response1?.data?.data[0].conversationId);

        socket.emit("join-room", response1?.data?.data[0].conversationId);
      } catch (err) {
        console.log("Error from inProgress get Converastion: ", err);
      }
    };

    callApiGetConversationId();
  }, []);

  return (
    <div
      className="w-[100px] shadow-md shrink-0 cursor-pointer border-[1px] border-[blue] bg-slate-200 hover:bg-slate-400 transition-all rounded-lg flex flex-col items-center justify-center"
      onClick={() => {
        getConversation({
          reciever_Id: reciever_Id,
          conversation_Id: conversationId,
          userSocket: userSocket,
        });
      }}
    >
      <div className="w-[45px] h-[45px] rounded-full mt-1 overflow-hidden border-[1px] border-[blue] shadow-lg">
        <img
          src={receiver_Role === "spso" ? avatars[0] : avatars[1]}
          alt=""
          className="w-full h-full "
        />
      </div>

      <span className="w-[100%] text-center font-semibold overflow-clip truncate">
        {receiver_Name}
      </span>
    </div>
  );
};

export default UserItem;
