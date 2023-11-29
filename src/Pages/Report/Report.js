import React, { useEffect, useState } from "react";
import ReportItem from "./ReportItem";
import PaperChart from "./PaperChart";
import { useNavigate } from "react-router";
import { FilterReportModalV2 } from "../../Modals";
import { getReportPrinters, getReportChart } from "../../APIs/SpsoAPI/SpsoAPI";
import { params } from "../../Modals/FilterReportModalV2/FilterReportModalV2";
import { itemsData } from "./FixedData";

const Report = () => {
  const navigate = useNavigate();
  const [renderList, setRenderList] = useState(true);
  const [reports, setReports] = useState([]);
  const [printers, setPrinters] = useState(itemsData);
  const [data, setData] = useState([]);
  useEffect(() => {
    const handleGetReport = async (params) => {
      const response = await getReportPrinters(params);
      setReports(response?.data?.data);
      setPrinters(response?.data?.data?.all_printers);
      //console.log(response?.data?.data);
    };
    handleGetReport(params);
    //console.log(params);
    if (localStorage.getItem("accessToken") === null) {
      navigate("/Login");
    }
  }, [renderList]);

  useEffect(() => {
    const handleGetChart = async (params) => {
      const response = await getReportChart(params);
      setData(Object.values(response?.data?.data));
    };
    handleGetChart({ year: params.year });
  }, [renderList]);
  return (
    <div className="Report mx-auto max-w-[1280px] px-[10px]   md:px-[20px] bg-[white] shadow-sm mb-5 min-h-[93vh]">
      <div className="flex flex-row mt-3 border-b-4 border-[#066DCC] pb-2 md:pb-3 mb-4 items-center justify-between">
        <h2 className="text-2xl lg:text-3xl font-semibold printing-title text-[#066DCC]">
          BÁO CÁO HỆ THỐNG
        </h2>
        <div>
          <FilterReportModalV2
            functionRenderList={() => setRenderList(!renderList)}
          >
            <button className="text-[16px] lg:text-[18px] text-white bg-[#066DCC] font-semibold md:px-[30px] px-[10px] py-2 rounded-md">
              Lọc báo cáo
            </button>
          </FilterReportModalV2>
        </div>
      </div>
      <PaperChart data={data || Array(12).fill(0)} />
      <h2 className="text-[16px] lg:text-[18px] font-bold underline px-8 mt-[50px] mb-4">
        TẤT CẢ MÁY IN
      </h2>
      <div className="flex flex-col md:flex-row px-8 gap-3  ">
        <div className="w-full lg:w-1/2 flex flex-col gap-3 ">
          <p className="text-[16px] lg:text-[18px]  text-black font-semibold">
            <span className="   text-[#1488db] font-semibold">
              Tổng lượng giấy đã in:{" "}
            </span>
            {reports.total_pages || 0}
          </p>
          <p className="text-[16px] lg:text-[18px]  text-black font-semibold">
            <span className="  text-[#1488db] font-semibold">
              Tổng lượng giấy A3 đã in:{" "}
            </span>
            {reports.total_A3 || 0}
          </p>
          <p className="text-[16px] lg:text-[18px]  text-black font-semibold">
            <span className="   text-[#1488db] font-semibold">
              Tổng lượng giấy A4 đã in:{" "}
            </span>
            {reports.total_A4 || 0}
          </p>
          <p className="text-[16px] lg:text-[18px]  text-black font-semibold">
            <span className="  text-[#1488db] font-semibold">
              Tổng số lần bảo trì:{" "}
            </span>
            {reports.total_Printed || 0}
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-3 ">
          <p className="text-[16px] lg:text-[18px]  text-black font-semibold">
            <span className="   text-[#1488db] font-semibold">
              Trung bình lượng giấy A3 trên mỗi máy:{" "}
            </span>
            {reports.avg_A3 || 0}
          </p>
          <p className="text-[16px] lg:text-[18px]  text-black font-semibold">
            <span className="   text-[#1488db] font-semibold">
              Trung bình lượng giấy A4 trên mỗi máy:{" "}
            </span>
            {reports.avg_A4 || 0}
          </p>
          <p className="text-[16px] lg:text-[18px]  text-black font-semibold">
            <span className="   text-[#1488db] font-semibold">
              Trung bình số lần in trên mỗi máy:{" "}
            </span>
            {reports.avg_Printed || 0}
          </p>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className=" min-w-[800px] md:w-full max-h-[60px] flex flex-row mx-auto justify-between shadow-lg items-center bg-[#3C8DBC] text-[16px]  lg:text-[18px] font-bold py-3 px-4 mt-8 rounded-sm  text-white">
          <div className="min-w-[10%] text-center">THỜI GIAN</div>
          <div className="min-w-[15%] text-center">ID MÁY IN</div>
          <div className="min-w-[25%] text-center">VỊ TRÍ</div>
          <div className="min-w-[10%] text-center">SỐ LẦN IN</div>
          <div className="min-w-[15%] text-center">GIẤY A3 ĐÃ IN</div>
          <div className="min-w-[15%] text-center">GIẤY A4 ĐÃ IN</div>
        </div>
        {printers?.map((item, index) => (
          <ReportItem
            key={index}
            time={item.date}
            id={item.printerId}
            location={
              item?.location?.facility +
              ", " +
              item?.location?.department +
              ", " +
              item?.location?.room
            }
            frequency={item?.printed}
            a3={item?.totalA3Pages}
            a4={item?.totalA4Pages}
          />
        ))}
      </div>
    </div>
  );
};

export default Report;
