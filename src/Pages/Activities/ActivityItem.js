import React, {useState} from "react";
import "./Activities.scss";
import { ListIcon } from "../../Assets/Icons/Icons";
import { DetailStudentLogModal } from "../../Modals";
import { ActivitySkeleton } from "../../Utils/Skeleton";
import { getDetailStudent } from "../../APIs/SpsoAPI/SpsoAPI";

function ActivityItem({ activity }) {
  const [detail, setDetail] = useState([]);
  const handleGetDetail = async (params) => {
    const response = await getDetailStudent(params);
    setDetail(response?.data?.data);
  }
  return (
    <>
      {activity?.studentId !== "" ? (
        <div className="min-w-[800px] md:w-full max-h-[60px] Activity?Item flex flex-row justify-between items-center bg-[#ffffff] text-[16px] lg:text-[18px] font-bold py-3 px-4 mt-2 rounded-sm border-b-2 border-black ">
          <div className=" w-[18%] truncate overflow-clip ">
            {activity?.lastName + " " + activity?.firstName}
          </div>
          <div className="text-center truncate overflow-clip  w-[15%]">
            {activity?.mssv}
          </div>
          <div className=" w-[22%] truncate overflow-clip pl-3">
            {activity?.major}
          </div>
          <div className="text-center truncate overflow-clip  w-[15%]">
            {activity?.classes}
          </div>
          <div className=" w-[15%] text-center  truncate overflow-clip">
            {activity?.total_payment}
          </div>
          <div className=" flex justify-center w-[10%] truncate overflow-clip ">
            <DetailStudentLogModal activity={activity} detail={detail} cbGetDetail={(params) => handleGetDetail(params)}>
              <div onClick={(e) => handleGetDetail({studentId: activity._id})}><ListIcon></ListIcon></div>
            </DetailStudentLogModal>
          </div>
        </div>
      ) : (
        <ActivitySkeleton></ActivitySkeleton>
      )}
    </>
  );
}

export default ActivityItem;
