import React, { useState } from "react";
import { useUserInfo } from "../../Contexts/UserInfoContext";

const StudentInfo = () => {
  const userInfoContext = useUserInfo();
  const [userInformation, setUserInformation] = useState(userInfoContext.info);

  return (
    <div className="mt-3 w-[236px] mb-2 flex flex-col items-start justify-between gap-y-1 pl-2 ">
      <div className="flex w-full justify-between items-center">
        <div className=" text-white font-semibold capitalize text-start w-[80%]">
          {userInformation?.firstName + " " + userInformation?.lastName ||
            "... ..."}
        </div>
        <div className="border border-gray-300 mr-[6px] h-11 w-11 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-fill "
            src="https://media-exp1.licdn.com/dms/image/C510BAQEovqvV05Duyw/company-logo_200_200/0?e=2159024400&v=beta&t=b021HtjGIHS1D-ZepG1OrVOufgpeRqToyE-oaqrlXW0"
            alt=""
          />
        </div>
      </div>
      <div className=" text-white text-[10px] w-[100%] pr-[60px] truncate overflow-clip capitalize">
        {userInformation?.major || "..."}
      </div>
    </div>
  );
};

export default StudentInfo;
