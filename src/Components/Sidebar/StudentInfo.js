import React from "react";

const StudentInfo = ({
  name = "Nguyễn Văn A",
  major = "Khoa khoa học và kĩ thuật máy tính",
}) => {
  return (
    <div className="mt-3 w-[236px] flex flex-col items-start justify-between gap-y-1 ">
      <div className="flex w-full justify-between items-center">
        <div className=" text-white font-semibold capitalize">
          {name || "Nguyễn Văn A"}
        </div>
        <div className="border border-gray-300 mr-[6px] h-11 w-11 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-fill "
            src="https://media-exp1.licdn.com/dms/image/C510BAQEovqvV05Duyw/company-logo_200_200/0?e=2159024400&v=beta&t=b021HtjGIHS1D-ZepG1OrVOufgpeRqToyE-oaqrlXW0"
            alt=""
          />
        </div>
      </div>
      <div className=" text-white text-[10px] w-[175px] capitalize">
        {major || "Sinh viên trường đại học Bách Khoa thành phố HCM"}
      </div>
    </div>
  );
};

export default StudentInfo;
