import React, { useEffect, useState } from "react";
import "./Activities.scss";
import { FilterIcon, SearchIcon } from "../../Assets/Icons/Icons";
import ActivityItem from "./ActivityItem";
import { ActivitiesFilterModal } from "../../Modals";
import { useNavigate } from "react-router-dom";
import { activities } from "./FixedData";
import { ActivityFilter } from "../../Modals/ActivitiesFilterModal/ActivitiesFilterModal";
import { getStudents, getDetailStudent } from "../../APIs/SpsoAPI/SpsoAPI";

const Activities = () => {
  const [renderList, setRenderList] = useState(true);
  const [stID, setStID] = useState("");
  const [stName, setStName] = useState("");
  var [name, setName] = useState(null);
  var [id, setId] = useState(null);
  const navigate = useNavigate();
  const [fetchAct, setFetchAct] = useState(activities);

  useEffect(() => {
    const params = {
      studentId: id !== "" ? id : null,
      studentName: name !== "" ? name : null,
      sortName: ActivityFilter.sortName,
      sortPayment: ActivityFilter.sortPayment,
    };
    //console.log(params);
    setFetchAct(activities);
    const handleGetStudents = async (params) => {
      const response = await getStudents(params);
      console.log(response?.data?.data);
      setFetchAct(response?.data?.data);
    };
    handleGetStudents(params);
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Login");
    }
  }, [renderList]);

  return (
    <div className="Activities max-w-[1280px] px-[10px] md:px-[20px] bg-[white] mx-auto shadow-sm mb-5 min-h-[93vh]">
      <h2 className="text-2xl lg:text-3xl font-semibold mt-3  printing-title border-b-4 border-[#066DCC] pb-2 md:pb-3  text-[#066DCC]">
        HOẠT ĐỘNG IN ẤN
      </h2>
      <div className="w-[100%] flex flex-col items-start md:flex-row mt-3 gap-3">
        <div className="flex flex-col md:flex-row w-[90%] mx-auto gap-3 md:w-[70%] activity-inner-flex-input">
          <form
            className="w-[100%] border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white"
            onSubmit={(e) => {
              setId(stID);
              setRenderList(!renderList);
            }}
          >
            <input
              type="text"
              placeholder="Tìm theo ID sinh viên"
              className="w-full outline-none border-none"
              onChange={(e) => setStID(e.target.value)}
            />
            <button type="submit">
              <SearchIcon></SearchIcon>
            </button>
          </form>
          <form
            className="w-[100%]  mx-auto border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white"
            onSubmit={(e) => {
              setName(stName);
              setRenderList(!renderList);
            }}
          >
            <input
              type="text"
              placeholder="Tìm theo Tên sinh viên"
              className="w-full outline-none border-none"
              onChange={(e) => setStName(e.target.value)}
            />
            <button type="submit">
              <SearchIcon></SearchIcon>
            </button>
          </form>
        </div>

        <div className="w-[90%] md:w-[30%] mx-auto">
          <ActivitiesFilterModal
            functionSetRenderList={() => setRenderList(!renderList)}
          >
            <div className="w-full border h-[50px] border-black rounded-lg flex items-center justify-between pr-3 bg-white">
              <input
                type="text"
                placeholder="Lọc kết quả"
                className="w-full outline-none border-none"
                readOnly
              />
              <FilterIcon></FilterIcon>
            </div>
          </ActivitiesFilterModal>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className=" min-w-[800px] md:w-full max-h-[60px]  flex flex-row mx-auto justify-between shadow-lg items-center bg-[#3C8DBC] text-[16px]  lg:text-[18px] font-bold py-3 px-4 mt-8 rounded-sm  text-white">
          <div className=" w-[18%] truncate overflow-clip ">SINH VIÊN</div>
          <div className="text-center truncate overflow-clip  w-[15%]">
            ID SINH VIÊN
          </div>
          <div className=" w-[22%] truncate overflow-clip pl-3">KHOA</div>
          <div className="text-center truncate overflow-clip  w-[15%]">LỚP</div>
          <div className=" w-[15%] truncate overflow-clip pl-3">
            LƯỢNG GIẤY ĐÃ IN
          </div>
          <div className="text-center w-[10%] truncate overflow-clip ">
            LỊCH SỬ
          </div>
        </div>
        <div className="max-h-[79vh] md:max-h-[87vh] lg:max-h-[79vh] min-w-[800px] md:w-full overflow-y-scroll">
          {fetchAct.map((activity, index) => (
            <ActivityItem key={index} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
